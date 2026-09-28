// Baixa para assets/thumbs/<id do YouTube>.jpg a thumbnail de cada vídeo do
// YouTube listado em videos.json que ainda não tenha uma, e apaga as que não
// são mais usadas. Assim a galeria #tutoriais mostra thumbnails sem fazer
// requisições ao Google no carregamento da página.
//
// Uso: node scripts/fetch-thumbnails.mjs   (roda sozinho no GitHub Actions
// a cada push que altera videos.json — ver .github/workflows/thumbnails.yml)

import { readFile, writeFile, readdir, unlink, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const thumbsDir = path.join(root, 'assets', 'thumbs');

// Mesma lógica de parseYouTube() em script.js, só para extrair o id
function youTubeId(rawUrl) {
    try {
        const url = new URL(rawUrl);
        const host = url.hostname.replace(/^(www|m)\./, '');
        let id = null;
        if (host === 'youtu.be') {
            id = url.pathname.slice(1);
        } else if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
            const match = url.pathname.match(/^\/(shorts|embed|live)\/([\w-]+)/);
            if (match) id = match[2];
            else if (url.pathname === '/watch') id = url.searchParams.get('v');
        }
        return id && /^[\w-]{6,}$/.test(id) ? id : null;
    } catch {
        return null;
    }
}

// maxresdefault (1280x720, sem tarjas; em Shorts vem com laterais desfocadas)
// nem sempre existe; hqdefault sempre existe (4:3 com tarjas, cortadas pelo CSS)
async function download(id) {
    for (const name of ['maxresdefault', 'hqdefault']) {
        const res = await fetch(`https://i.ytimg.com/vi/${id}/${name}.jpg`);
        if (res.ok) return Buffer.from(await res.arrayBuffer());
    }
    throw new Error(`nenhuma thumbnail encontrada para ${id}`);
}

const videos = JSON.parse(await readFile(path.join(root, 'videos.json'), 'utf8'));
const wanted = new Set(
    Object.values(videos)
        .filter(url => typeof url === 'string' && url.trim())
        .map(url => youTubeId(url.trim()))
        .filter(Boolean)
);

await mkdir(thumbsDir, { recursive: true });
const existing = new Set((await readdir(thumbsDir)).filter(f => f.endsWith('.jpg')).map(f => f.slice(0, -4)));

let failed = false;
for (const id of wanted) {
    if (existing.has(id)) continue;
    try {
        await writeFile(path.join(thumbsDir, `${id}.jpg`), await download(id));
        console.log(`+ ${id}`);
    } catch (e) {
        console.error(`! ${e.message}`);
        failed = true;
    }
}
for (const id of existing) {
    if (wanted.has(id)) continue;
    await unlink(path.join(thumbsDir, `${id}.jpg`));
    console.log(`- ${id}`);
}
if (failed) process.exitCode = 1;
