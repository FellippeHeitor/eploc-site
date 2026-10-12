/**
 * Gera o manual em PDF (manual/eploc-manual.pdf) a partir do site já
 * construído por `vitepress build`, para envio a tribunais e outras instituições.
 *
 * - A ordem das páginas é a da barra lateral (themeConfig.sidebar), lida da
 *   própria configuração do VitePress: a mesma fonte do site.
 * - Cada página é aberta no Chromium (servida localmente, já renderizada), e o
 *   conteúdo de .vp-doc (mais os selos da funcionalidade) é copiado para um
 *   documento único, com capa e sumário. Os links entre páginas viram links
 *   internos do PDF; ids de títulos ganham o prefixo da página para não
 *   colidirem.
 * - O documento usa o CSS do próprio site, com ajustes de impressão.
 *
 * Uso: npm run build && npm run pdf
 * Navegador: CHROME_PATH (executável) ou, sem ele, o Google Chrome instalado
 * (canal "chrome", presente nos runners do GitHub Actions).
 */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";
import { resolveConfig } from "vitepress";

const raiz = fileURLToPath(new URL("..", import.meta.url));
// Versão da extensão a que o manual se refere (atualize a cada release).
const VERSAO_EXTENSAO = JSON.parse(
  await readFile(join(raiz, ".vitepress/versao.json"), "utf8")
).extensao;
const config = await resolveConfig(raiz, "build", "production");
const base = config.site.base; // "/manual/"
const outDir = config.outDir;
const NOME_PDF = "eploc-manual.pdf";

// ── Ordem das páginas, a partir da barra lateral ────────────────────────
function coletarLinks(itens, secao, saida) {
  for (const item of itens) {
    if (item.link) saida.push({ link: item.link, titulo: item.text, secao: secao || item.text });
    if (item.items) coletarLinks(item.items, item.text, saida);
  }
  return saida;
}
const sidebar = config.site.themeConfig.sidebar;
// A lista de /funcionalidades/ repete o sumário: fica fora do PDF.
const paginas = coletarLinks(sidebar, "", [])
  .filter((p) => p.link !== "/funcionalidades/")
  .filter((p, i, todas) => todas.findIndex((q) => q.link === p.link) === i);

/** "/funcionalidades/eproc-x" → "funcionalidades-eproc-x"; "/" → "inicio". */
const slugDaPagina = (link) =>
  link.replace(/^\/|\/$/g, "").replace(/\//g, "-") || "apresentacao";

// ── Servidor estático do build ──────────────────────────────────────────
const TIPOS = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};
let htmlCombinado = "";
const servidor = createServer(async (req, res) => {
  const caminho = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (caminho === `${base}__pdf.html`) {
    res.writeHead(200, { "content-type": TIPOS[".html"] });
    res.end(htmlCombinado);
    return;
  }
  if (!caminho.startsWith(base)) {
    res.writeHead(404).end();
    return;
  }
  let arquivo = normalize(join(outDir, caminho.slice(base.length)));
  if (!arquivo.startsWith(outDir)) {
    res.writeHead(403).end();
    return;
  }
  try {
    const info = await stat(arquivo).catch(() => null);
    if (info?.isDirectory()) arquivo = join(arquivo, "index.html");
    else if (!info) arquivo += ".html";
    const conteudo = await readFile(arquivo);
    res.writeHead(200, { "content-type": TIPOS[extname(arquivo)] ?? "application/octet-stream" });
    res.end(conteudo);
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((ok) => servidor.listen(0, "127.0.0.1", ok));
const origem = `http://127.0.0.1:${servidor.address().port}`;

const navegador = await chromium.launch(
  process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : { channel: "chrome" }
);

try {
  const aba = await navegador.newPage({ colorScheme: "light" });

  // ── Conteúdo de cada página ───────────────────────────────────────────
  const secoes = [];
  let estilos = [];
  for (const pagina of paginas) {
    const url = `${origem}${base}${pagina.link.replace(/^\//, "")}`;
    const resposta = await aba.goto(url, { waitUntil: "networkidle" });
    if (!resposta?.ok()) throw new Error(`Falha ao abrir ${url}: ${resposta?.status()}`);
    if (!estilos.length) {
      estilos = await aba.$$eval('link[rel~="stylesheet"]', (ls) => ls.map((l) => l.href));
    }
    const slug = slugDaPagina(pagina.link);
    const html = await aba.evaluate(
      ({ slug, base, slugDaPaginaSrc }) => {
        const slugDaPagina = new Function(`return (${slugDaPaginaSrc})`)();
        const doc = document.querySelector(".vp-doc > div");
        if (!doc) return "";
        const copia = doc.cloneNode(true);
        // Âncoras de título ("#") e outros controles do site não vão para o PDF.
        copia.querySelectorAll(".header-anchor, .copy, button").forEach((el) => el.remove());
        copia.querySelectorAll("[id]").forEach((el) => (el.id = `${slug}--${el.id}`));
        copia.querySelectorAll("a[href]").forEach((a) => {
          const destino = new URL(a.href, location.href);
          if (destino.origin !== location.origin) {
            a.setAttribute("target", "_blank");
            return;
          }
          const caminho = destino.pathname.startsWith(base)
            ? "/" + destino.pathname.slice(base.length)
            : destino.pathname;
          const alvo = slugDaPagina(caminho.replace(/\.html$/, "").replace(/\/index$/, "/"));
          const hash = destino.hash ? `--${decodeURIComponent(destino.hash.slice(1))}` : "";
          a.setAttribute("href", `#${alvo}${hash}`);
          a.removeAttribute("target");
        });
        const selos = document.querySelector(".selos")?.outerHTML ?? "";
        return selos + copia.innerHTML;
      },
      { slug, base, slugDaPaginaSrc: slugDaPagina.toString() }
    );
    secoes.push({ ...pagina, slug, html });
  }

  // ── Documento único ───────────────────────────────────────────────────
  const hoje = new Date().toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });
  let secaoAnterior = null;
  const sumario = secoes
    .map((s) => {
      const cabecalho =
        s.secao && s.secao !== secaoAnterior ? `<li class="sumario-secao">${s.secao}</li>` : "";
      secaoAnterior = s.secao;
      return `${cabecalho}<li><a href="#${s.slug}">${s.titulo}</a></li>`;
    })
    .join("\n");
  htmlCombinado = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Manual do eploc</title>
${estilos.map((href) => `<link rel="stylesheet" href="${href}">`).join("\n")}
<style>
  @page { size: A4; margin: 18mm 16mm 20mm; }
  html, body { background: #fff; }
  body { font-size: 11pt; }
  .vp-doc { max-width: none; }
  .vp-doc h1 { font-size: 22pt; line-height: 1.25; margin-top: 0; }
  .vp-doc h2 { font-size: 15pt; margin-top: 22px; padding-top: 14px; }
  .vp-doc h3 { font-size: 12pt; }
  .vp-doc p, .vp-doc li { line-height: 1.55; }
  .vp-doc table { display: table; width: 100%; font-size: 9.5pt; }
  .vp-doc tr, .vp-doc .custom-block, .vp-doc pre, .vp-doc blockquote { break-inside: avoid; }
  .vp-doc h2, .vp-doc h3 { break-after: avoid; }
  .vp-doc a { color: var(--vp-c-brand-1); }
  .pagina { break-before: page; }
  .selos { margin-bottom: 4px; }
  .capa { height: 245mm; display: flex; flex-direction: column; justify-content: center; text-align: center; }
  .capa img { width: 96px; height: 96px; margin: 0 auto 24px; }
  .capa h1 { font-size: 34pt; margin: 0 0 8px; border: 0; }
  .capa .subtitulo { font-size: 13pt; color: var(--vp-c-text-2); margin: 0 0 40px; }
  .capa .dados { font-size: 10.5pt; color: var(--vp-c-text-2); line-height: 1.7; }
  .sumario { break-before: page; }
  .sumario h1 { font-size: 20pt; }
  .sumario ol { list-style: none; padding: 0; columns: 2; column-gap: 28px; font-size: 10pt; }
  .sumario li { margin: 2px 0; break-inside: avoid; }
  .sumario .sumario-secao { font-weight: 700; margin-top: 10px; color: var(--vp-c-text-1); }
  .sumario a { text-decoration: none; }
</style>
</head>
<body>
<div class="vp-doc">
  <section class="capa">
    <img src="${base}logo.png" alt="">
    <h1>Manual do eploc</h1>
    <p class="subtitulo">Extensão para Google Chrome e Microsoft Edge · eproc, SEI, RUPE e TJMG</p>
    <p class="dados">
      Referente à versão ${VERSAO_EXTENSAO} da extensão<br>
      Gerado em ${hoje} a partir de https://eploc.com.br${base}<br>
      Contato: fellippe@eploc.com.br
    </p>
  </section>
  <section class="sumario">
    <h1>Sumário</h1>
    <ol>${sumario}</ol>
  </section>
  ${secoes.map((s) => `<section class="pagina" id="${s.slug}">${s.html}</section>`).join("\n")}
</div>
</body>
</html>`;

  await aba.goto(`${origem}${base}__pdf.html`, { waitUntil: "networkidle" });
  await aba.evaluate(() => document.fonts.ready);
  const destino = join(outDir, NOME_PDF);
  await aba.pdf({
    path: destino,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: "<span></span>",
    footerTemplate: `<div style="width:100%;font-size:8px;color:#6b5f73;padding:0 16mm;display:flex;justify-content:space-between;">
      <span>Manual do eploc · v${VERSAO_EXTENSAO}</span>
      <span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`,
  });
  console.log(`PDF gerado: ${destino} (${secoes.length} páginas do manual)`);
} finally {
  await navegador.close();
  servidor.close();
}
