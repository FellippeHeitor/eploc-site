import { existsSync, readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const pastaReels = fileURLToPath(new URL("../../reels/", import.meta.url));

/**
 * { "<id do script>": "<pasta do reel>" }, lido da <meta name="eploc-script"> de cada
 * reels/<pasta>/reel.html.
 */
export function reelsPorScript() {
  /** @type {Record<string, string>} */
  const mapa = {};
  for (const pasta of readdirSync(pastaReels)) {
    const arquivo = `${pastaReels}${pasta}/reel.html`;
    if (!existsSync(arquivo)) continue;
    const id = readFileSync(arquivo, "utf8").match(
      /<meta name="eploc-script" content="([^"]+)">/
    )?.[1];
    if (id) mapa[id] = pasta;
  }
  return mapa;
}

/**
 * Troca o marcador <!-- DEMO: <id> --> pela animação do reel daquele script, quando existe.
 * Sem reel, o marcador continua um comentário e não aparece.
 * @param {import("markdown-it")} md
 * @param {string} base
 */
export function pluginReels(md, base) {
  const reels = reelsPorScript();
  const original = md.renderer.rules.html_block;
  md.renderer.rules.html_block = (tokens, idx, ...resto) => {
    const id = tokens[idx].content.match(/^<!--\s*DEMO:\s*([\w-]+)\s*-->/)?.[1];
    const pasta = id && reels[id];
    if (!pasta) return original(tokens, idx, ...resto);
    return `<figure class="demo">
  <div class="demo__tela"><iframe src="${base}demos/${pasta}/reel.html" title="Demonstração animada" loading="lazy" tabindex="-1"></iframe></div>
  <figcaption>Demonstração animada</figcaption>
</figure>\n`;
  };
}
