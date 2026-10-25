// Renderiza um reel (reels/<pasta>/reel.html) quadro a quadro em MP4 vertical 1080x1920
// (H.264, 30 fps, com trilha silenciosa).
// Uso: node reels/render.mjs <pasta> [saida.mp4] [--quadros 2,8.5,16] [--zonas] [--capa]
//   --quadros: só salva PNGs desses instantes (segundos), para conferir o visual.
//   --zonas: desenha a zona segura (retângulo tracejado) nos quadros.
//   --capa: salva a capa (capa.html da pasta) como PNG 1080x1920.
// Sem saída, grava <pasta>.mp4 (ou .png) dentro da pasta do reel (ignorado pelo git).
import { createRequire } from "node:module";
import { spawn } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import fs from "node:fs";

// require: acha o Playwright instalado globalmente, que o import de ESM não enxerga.
const { chromium } = createRequire(import.meta.url)("playwright");
const reels = path.dirname(fileURLToPath(import.meta.url));

const args = process.argv.slice(2);
const iQuadros = args.indexOf("--quadros");
const quadros = iQuadros >= 0 ? args[iQuadros + 1].split(",").map(Number) : null;
const livres = args.filter((a, i) => !a.startsWith("--") && (iQuadros < 0 || i !== iQuadros + 1));
const [nome, saidaArg] = livres;
const pasta = nome && path.join(reels, path.basename(nome));
if (!pasta || !fs.existsSync(path.join(pasta, "reel.html"))) {
  console.error("Uso: node reels/render.mjs <pasta> [saida.mp4] [--quadros 2,8.5] [--zonas] [--capa]");
  process.exit(1);
}
const saida = path.resolve(saidaArg || path.join(pasta, `${path.basename(pasta)}.mp4`));
const FPS = 30;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 540, height: 960 }, deviceScaleFactor: 2 });

if (args.includes("--capa")) {
  await page.goto(pathToFileURL(path.join(pasta, "capa.html")).href);
  await page.evaluate(() => window.pronto);
  const arq = saida.replace(/\.mp4$/, ".png");
  await page.screenshot({ path: arq });
  console.log(arq);
} else {
  const zonas = args.includes("--zonas") ? "&zonas" : "";
  await page.goto(pathToFileURL(path.join(pasta, "reel.html")).href + "?render" + zonas);
  await page.evaluate(() => window.pronto);
  const duracao = await page.evaluate(() => window.DURACAO);

  if (quadros) {
    for (const t of quadros) {
      await page.evaluate((t) => window.renderFrame(t), t);
      const arq = saida.replace(/\.mp4$/, "") + `-${t}s.png`;
      await page.screenshot({ path: arq });
      console.log(arq);
    }
  } else {
    const ff = spawn("ffmpeg", [
      "-y", "-loglevel", "error",
      "-f", "image2pipe", "-framerate", String(FPS), "-c:v", "png", "-i", "-",
      "-f", "lavfi", "-i", "anullsrc=channel_layout=stereo:sample_rate=48000",
      "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "18", "-preset", "slow", "-r", String(FPS),
      "-c:a", "aac", "-shortest", "-movflags", "+faststart", saida,
    ], { stdio: ["pipe", "inherit", "inherit"] });
    const total = Math.round(duracao * FPS);
    for (let i = 0; i < total; i++) {
      await page.evaluate((t) => window.renderFrame(t), i / FPS);
      const png = await page.screenshot({ type: "png" });
      if (!ff.stdin.write(png)) await new Promise((r) => ff.stdin.once("drain", r));
      if (i % 90 === 0) console.log(`${i}/${total}`);
    }
    ff.stdin.end();
    await new Promise((r, j) => ff.on("close", (c) => (c === 0 ? r() : j(new Error(`ffmpeg saiu com ${c}`)))));
    console.log(saida);
  }
}
await browser.close();
