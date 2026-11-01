// Gera os PNGs de um carrossel (carrosseis/<pasta>/carrossel.html): um por <section class="slide">,
// 1080x1350, numerados (01.png, 02.png…). Também confere as margens: avisa quando algum texto
// visível passa da margem de 32px do slide.
// Uso: node carrosseis/render.mjs <pasta> [pasta-de-saida]   (padrão: carrosseis/<pasta>/png/, ignorada pelo git)
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import fs from "node:fs";

const { chromium } = createRequire(import.meta.url)("playwright");
const raiz = path.dirname(fileURLToPath(import.meta.url));
const nome = process.argv[2];
const pasta = nome && path.join(raiz, path.basename(nome));
if (!pasta || !fs.existsSync(path.join(pasta, "carrossel.html"))) {
  console.error("Uso: node carrosseis/render.mjs <pasta> [pasta-de-saida]");
  process.exit(1);
}
const saida = path.resolve(process.argv[3] || path.join(pasta, "png"));
fs.mkdirSync(saida, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 540, height: 675 }, deviceScaleFactor: 2 });
await page.goto(pathToFileURL(path.join(pasta, "carrossel.html")).href);
await page.evaluate(() => window.pronto);

const slides = await page.$$(".slide");
let problemas = 0;
for (const [i, slide] of slides.entries()) {
  const fora = await slide.evaluate((s) => {
    const r = s.getBoundingClientRect();
    const out = [];
    const w = document.createTreeWalker(s, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = w.nextNode())) {
      if (!n.textContent.trim()) continue;
      const rg = document.createRange();
      rg.selectNodeContents(n);
      for (const q of rg.getClientRects()) {
        if (!q.width) continue;
        if (q.left - r.left < 31.5 || r.right - q.right < 31.5 || q.top - r.top < 20 || r.bottom - q.bottom < 16)
          out.push(n.textContent.trim().slice(0, 40));
      }
    }
    return [...new Set(out)];
  });
  for (const t of fora) { console.warn(`slide ${i + 1}: texto fora da margem: ${t}`); problemas++; }
  const arq = path.join(saida, `${String(i + 1).padStart(2, "0")}.png`);
  await slide.screenshot({ path: arq });
  console.log(arq);
}
await browser.close();
if (problemas) process.exitCode = 1;
