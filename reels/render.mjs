// Renderiza um reel (reels/<pasta>/reel.html) quadro a quadro em MP4 vertical 1080x1920
// (H.264, 30 fps, com trilha silenciosa).
// Uso: node reels/render.mjs <pasta> [saida.mp4|saida.gif] [--quadros 2,8.5,16] [--zonas] [--capa]
//        [--params "a=1&b=2"] [--gif]
//   --quadros: só salva PNGs desses instantes (segundos), para conferir o visual.
//   --params: parâmetros repassados à página (ex.: live-amanha aceita "dia=hoje&formato=quadrado").
//   --gif: grava um GIF em loop (540px de largura, 15 fps) com o trecho window.LOOP = { ini, dur, fade }
//     da página; os últimos `fade` segundos se dissolvem no primeiro quadro, para o loop não ter emenda.
//   A página pode declarar window.TAMANHO = { w, h } (padrão 540x960).
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
const iParams = args.indexOf("--params");
const params = iParams >= 0 ? "&" + args[iParams + 1] : "";
const gif = args.includes("--gif");
const livres = args.filter((a, i) => !a.startsWith("--") && (iQuadros < 0 || i !== iQuadros + 1) && (iParams < 0 || i !== iParams + 1));
const [nome, saidaArg] = livres;
const pasta = nome && path.join(reels, path.basename(nome));
if (!pasta || !fs.existsSync(path.join(pasta, "reel.html"))) {
  console.error("Uso: node reels/render.mjs <pasta> [saida.mp4] [--quadros 2,8.5] [--zonas] [--capa]");
  process.exit(1);
}
const saida = path.resolve(saidaArg || path.join(pasta, `${path.basename(pasta)}.${gif ? "gif" : "mp4"}`));
const FPS = 30;

const browser = await chromium.launch({ args: ["--enable-unsafe-swiftshader"] });  // WebGL por software, se não houver GPU (live-amanha)
const page = await browser.newPage({ viewport: { width: 540, height: 960 }, deviceScaleFactor: 2 });

if (args.includes("--capa")) {
  await page.goto(pathToFileURL(path.join(pasta, "capa.html")).href);
  await page.evaluate(() => window.pronto);
  const arq = saida.replace(/\.mp4$/, ".png");
  await page.screenshot({ path: arq });
  console.log(arq);
} else {
  const zonas = args.includes("--zonas") ? "&zonas" : "";
  const url = pathToFileURL(path.join(pasta, "reel.html")).href + "?render" + zonas + params;
  await page.goto(url);
  await page.evaluate(() => window.pronto);
  const tam = await page.evaluate(() => window.TAMANHO);
  if (tam && (tam.w !== 540 || tam.h !== 960)) {
    await page.setViewportSize({ width: tam.w, height: tam.h });
    await page.goto(url);
    await page.evaluate(() => window.pronto);
  }
  const duracao = await page.evaluate(() => window.DURACAO);

  if (quadros) {
    for (const t of quadros) {
      await page.evaluate((t) => window.renderFrame(t), t);
      const arq = saida.replace(/\.mp4$/, "") + `-${t}s.png`;
      await page.screenshot({ path: arq });
      console.log(arq);
    }
  } else if (gif) {
    const loop = await page.evaluate(() => window.LOOP);
    if (!loop) throw new Error("--gif pede window.LOOP = { ini, dur, fade } na página");
    const GFPS = 15, { ini, dur, fade } = loop;
    // Em quadros inteiros: N do loop e F da dissolução. Grava N+F quadros a partir de ini; o
    // ffmpeg sobrepõe os F primeiros aos F últimos do loop, com opacidade crescente até 100% no
    // último quadro, que fica igual ao vizinho natural do primeiro. Assim o loop não tem emenda.
    const N = Math.round(dur * GFPS), F = Math.round(fade * GFPS);
    const tmp = fs.mkdtempSync(path.join(path.dirname(saida), ".quadros-"));
    const total = N + F;
    for (let i = 0; i < total; i++) {
      await page.evaluate((t) => window.renderFrame(t), ini + i / GFPS);
      await page.screenshot({ path: path.join(tmp, `${String(i).padStart(4, "0")}.png`) });
      if (i % 30 === 0) console.log(`${i}/${total}`);
    }
    const filtro = [
      `[0]format=rgba,split[a][b]`,
      `[a]trim=start_frame=${F}:end_frame=${F + N},setpts=PTS-STARTPTS[A]`,
      `[b]trim=start_frame=0:end_frame=${F},setpts=PTS-STARTPTS+${N - F}/(${GFPS}*TB),fade=in:s=0:n=${F - 1}:alpha=1[B]`,
      `[A][B]overlay=eof_action=pass:format=rgb,scale=540:-1:flags=lanczos,split[p][q]`,
      `[p]palettegen=max_colors=256:stats_mode=full[pal]`,
      `[q][pal]paletteuse=dither=sierra2_4a`,
    ].join(";");
    await new Promise((r, j) => spawn("ffmpeg", ["-y", "-loglevel", "error", "-framerate", String(GFPS),
      "-i", path.join(tmp, "%04d.png"), "-filter_complex", filtro, "-loop", "0", saida], { stdio: "inherit" })
      .on("close", (c) => (c === 0 ? r() : j(new Error(`ffmpeg saiu com ${c}`)))));
    fs.rmSync(tmp, { recursive: true });
    console.log(saida);
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
