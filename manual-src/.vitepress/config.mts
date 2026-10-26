import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig, type DefaultTheme } from "vitepress";
import { ORDEM_GRUPOS, rotuloGrupo } from "./grupos";
import { pluginReels } from "./reels.mjs";

const raiz = fileURLToPath(new URL("..", import.meta.url));

interface Pagina {
  link: string;
  title: string;
  plataforma: string;
  grupo: string;
}

/** Lê o front matter simples (chave: valor) das páginas de uma pasta. */
function lerPaginas(pasta: string): Pagina[] {
  return readdirSync(raiz + pasta)
    .filter((f) => f.endsWith(".md") && f !== "index.md")
    .map((f) => {
      const texto = readFileSync(`${raiz}${pasta}/${f}`, "utf8");
      const fm = texto.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";
      const campo = (k: string) => {
        const v = fm.match(new RegExp(`^${k}:\\s*(.*)$`, "m"))?.[1]?.trim() ?? "";
        return v.startsWith('"') ? JSON.parse(v) : v;
      };
      return {
        link: `/${pasta}/${f.replace(/\.md$/, "")}`,
        title: campo("title"),
        plataforma: campo("plataforma"),
        grupo: campo("grupo"),
      };
    });
}


function sidebarFuncionalidades(): DefaultTheme.SidebarItem[] {
  const paginas = lerPaginas("funcionalidades");
  const porTitulo = (a: Pagina, b: Pagina) => a.title.localeCompare(b.title, "pt-BR");
  const grupos = ORDEM_GRUPOS.map(([plataforma, grupo]) => ({
    text: rotuloGrupo(plataforma, grupo),
    collapsed: true,
    items: paginas
      .filter((p) => p.plataforma === plataforma && p.grupo === grupo)
      .sort(porTitulo)
      .map((p) => ({ text: p.title, link: p.link })),
  }));
  const semGrupo = paginas.filter(
    (p) => !ORDEM_GRUPOS.some(([pl, g]) => pl === p.plataforma && g === p.grupo)
  );
  if (semGrupo.length) {
    throw new Error(
      `Páginas com plataforma/grupo fora de ORDEM_GRUPOS: ${semGrupo.map((p) => p.link).join(", ")}`
    );
  }
  return grupos.filter((g) => g.items.length);
}

export default defineConfig({
  lang: "pt-BR",
  title: "Manual do eploc",
  description:
    "Manual oficial do eploc, extensão para Chrome e Edge que acelera o trabalho no eproc, SEI e RUPE.",
  base: "/manual/",
  outDir: "../manual",
  cleanUrls: true,
  lastUpdated: false,
  srcExclude: ["README.md"],
  // Sitemap próprio do manual, só com URLs limpas (o do Jekyll exclui /manual).
  sitemap: { hostname: "https://eploc.com.br/manual/" },
  // Canônica explícita na forma sem .html, a mesma usada nos links internos.
  transformPageData(pageData) {
    const caminho = pageData.relativePath
      .replace(/(^|\/)index\.md$/, "$1")
      .replace(/\.md$/, "");
    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push([
      "link",
      { rel: "canonical", href: `https://eploc.com.br/manual/${caminho}` },
    ]);
  },
  markdown: {
    // <!-- DEMO: <id> --> vira a animação do reel do script (reels/), quando existe.
    config: (md) => pluginReels(md, "/manual/"),
  },
  head: [
    ["link", { rel: "icon", href: "/manual/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#e8195f" }],
  ],
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "Manual do eploc",
    nav: [
      { text: "Início rápido", link: "/inicio-rapido" },
      { text: "Funcionalidades", link: "/funcionalidades/" },
      { text: "Privacidade", link: "/privacidade" },
      { text: "Dúvidas", link: "/perguntas-frequentes" },
      { text: "PDF", link: "https://eploc.com.br/manual/eploc-manual.pdf", target: "_blank" },
      { text: "eploc.com.br", link: "https://eploc.com.br/" },
    ],
    sidebar: [
      {
        text: "Primeiros passos",
        items: [
          { text: "Apresentação", link: "/" },
          { text: "Início rápido", link: "/inicio-rapido" },
        ],
      },
      {
        text: "A extensão",
        items: [
          { text: "Popup e ícone da barra", link: "/geral/popup" },
          { text: "Página de configurações", link: "/geral/configuracoes" },
          { text: "Aparência e efeitos visuais", link: "/geral/aparencia" },
          { text: "Backup em arquivo", link: "/geral/backup-arquivo" },
          { text: "Backup no Google Drive", link: "/geral/backup-google-drive" },
        ],
      },
      {
        text: "Funcionalidades",
        link: "/funcionalidades/",
        items: sidebarFuncionalidades(),
      },
      {
        text: "Institucional",
        items: [
          { text: "Privacidade e dados", link: "/privacidade" },
          { text: "Compatibilidade", link: "/compatibilidade" },
          { text: "Perguntas frequentes", link: "/perguntas-frequentes" },
          { text: "Contato", link: "/contato" },
        ],
      },
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: { buttonText: "Buscar", buttonAriaLabel: "Buscar no manual" },
          modal: {
            displayDetails: "Mostrar detalhes",
            resetButtonTitle: "Limpar busca",
            backButtonTitle: "Fechar busca",
            noResultsText: "Nenhum resultado para",
            footer: {
              selectText: "abrir",
              navigateText: "navegar",
              closeText: "fechar",
            },
          },
        },
      },
    },
    outline: { level: [2, 3], label: "Nesta página" },
    docFooter: { prev: "Anterior", next: "Próxima" },
    darkModeSwitchLabel: "Tema",
    lightModeSwitchTitle: "Mudar para o tema claro",
    darkModeSwitchTitle: "Mudar para o tema escuro",
    sidebarMenuLabel: "Menu",
    returnToTopLabel: "Voltar ao topo",
    langMenuLabel: "Idioma",
    notFound: {
      title: "Página não encontrada",
      quote: "O endereço pode ter mudado. Use a busca ou volte ao início do manual.",
      linkText: "Ir para o início",
    },
    footer: {
      message:
        'O eploc é uma ferramenta independente, sem vínculo, endosso ou homologação oficial de tribunais ou do CNJ. <a href="https://eploc.com.br/termos">Termos de uso</a> · <a href="https://eploc.com.br/privacidade">Política de privacidade</a>',
      copyright: "Programa de computador registrado no INPI sob o nº BR 51 2026 008457 1.",
    },
  },
});
