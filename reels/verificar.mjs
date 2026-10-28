// Confere a zona segura de um reel: varre a linha do tempo a cada 0,25 s e aponta todo texto
// visível (descontados opacidade e recortes) fora de x 33–444, y 144–624 da página.
// Uso: node reels/verificar.mjs <pasta>
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
const { chromium } = createRequire(import.meta.url)("playwright");
const pasta = path.join(path.dirname(fileURLToPath(import.meta.url)), path.basename(process.argv[2] || ""));

const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 540, height: 960 } });
await p.goto(pathToFileURL(path.join(pasta, "reel.html")).href + "?render");
await p.evaluate(() => window.pronto);
const dur = await p.evaluate(() => window.DURACAO);
const fora = new Map();
for (let t = 0; t <= dur; t += 0.25) {
  await p.evaluate((t) => renderFrame(t), t);
  const r = await p.evaluate(() => {
    const out = [];
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = w.nextNode())) {
      if (!n.textContent.trim()) continue;
      const el = n.parentElement;
      let op = 1, e = el;
      while (e) {
        const cs = getComputedStyle(e);
        if (cs.display === "none" || cs.visibility === "hidden") { op = 0; break; }
        op *= +cs.opacity;
        e = e.parentElement;
      }
      if (op < 0.3) continue;
      const rg = document.createRange();
      rg.selectNodeContents(n);
      for (let q of rg.getClientRects()) {
        if (!q.width || !q.height) continue;
        // Parte visível: interseção com os ancestrais que recortam (overflow).
        let v = { l: q.left, t: q.top, r: q.right, b: q.bottom }, a = el;
        while (a && a !== document.body) {
          if (getComputedStyle(a).overflow !== "visible") {
            const c = a.getBoundingClientRect();
            v = { l: Math.max(v.l, c.left), t: Math.max(v.t, c.top), r: Math.min(v.r, c.right), b: Math.min(v.b, c.bottom) };
          }
          a = a.parentElement;
        }
        if (v.r - v.l < 1 || v.b - v.t < 3 || v.b <= 0 || v.t >= 960) continue;
        q = { left: v.l, top: v.t, right: v.r, bottom: v.b };
        if (q.left < 32.5 || q.right > 444.5 || q.top < 143.5 || q.bottom > 624.5)
          out.push(`${n.textContent.trim().slice(0, 40)} [${Math.round(q.left)},${Math.round(q.top)}–${Math.round(q.right)},${Math.round(q.bottom)}]`);
      }
    }
    return out;
  });
  for (const x of r) { const k = x.replace(/ \[.*/, ""); if (!fora.has(k)) fora.set(k, `${t}s ${x}`); }
}
for (const v of fora.values()) console.log("FORA", v);
console.log(fora.size ? `${fora.size} textos fora` : "tudo dentro");
await b.close();
process.exitCode = fora.size ? 1 : 0;

