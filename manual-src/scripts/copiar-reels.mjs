// Copia os reels (../reels) para public/demos, onde o manual os embute como animação na página
// da funcionalidade (marcador <!-- DEMO: <id> -->; ver reels.mjs). Leva junto as fontes e imagens
// que os reels pedem com "../../": em public/ ficam no mesmo lugar relativo.
// Roda sozinho antes de `npm run dev` e `npm run build`. A saída não é versionada.
import { cpSync, mkdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { reelsPorScript } from "../.vitepress/reels.mjs";

const site = fileURLToPath(new URL("../../", import.meta.url));
const pub = fileURLToPath(new URL("../public/", import.meta.url));

rmSync(pub + "demos", { recursive: true, force: true });
mkdirSync(pub + "demos/base", { recursive: true });
cpSync(site + "reels/base/reel.css", pub + "demos/base/reel.css");
cpSync(site + "reels/base/reel.js", pub + "demos/base/reel.js");

const reels = reelsPorScript();
for (const pasta of Object.values(reels)) {
  mkdirSync(`${pub}demos/${pasta}`, { recursive: true });
  cpSync(`${site}reels/${pasta}/reel.html`, `${pub}demos/${pasta}/reel.html`);
}

cpSync(site + "assets/fonts", pub + "assets/fonts", { recursive: true });
cpSync(site + "assets/eploc-logo-master-1000.png", pub + "assets/eploc-logo-master-1000.png");
cpSync(site + "icon32.png", pub + "icon32.png");

console.log(`Reels copiados para o manual: ${Object.keys(reels).join(", ") || "nenhum"}`);
