// Lê o número de usuários da página pública do eploc na Chrome Web Store e
// grava em _data/webstore.json, já arredondado para baixo (centenas abaixo de
// 10.000, milhares acima). A faixa de confiança do index mostra esse valor
// ("Mais de 1.000 usuários") via {{ site.data.webstore.usuarios }}.
//
// A Web Store não tem API pública para isso, então o número é extraído do HTML.
// Se a página mudar e o número não for encontrado, o script falha sem tocar no
// arquivo — o site continua com o último valor válido.
//
// Uso: node scripts/fetch-users.mjs   (roda todo dia no GitHub Actions —
// ver .github/workflows/users.yml)

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataFile = path.join(root, '_data', 'webstore.json');
const storeUrl = 'https://chromewebstore.google.com/detail/eploc/fkpkkenjcfpplmhlfdbabhcdhmhiojhj?hl=en&gl=BR';

const res = await fetch(storeUrl, { headers: { 'User-Agent': 'Mozilla/5.0', 'Accept-Language': 'en' } });
if (!res.ok) throw new Error(`Web Store respondeu ${res.status}`);
const html = await res.text();

// A página também lista extensões recomendadas, cada uma com seu número de
// usuários — por isso a busca fica presa ao ID do eploc. Primeiro os dados
// embutidos (bloco ds:0), em que o número aparece cru logo após a categoria,
// depois do ID: "fkpk...",...["productivity/tools",null,5],1,null,1000,
// O trecho termina no ID da próxima extensão, para não pegar o número dela.
// Se não achar, aceita o texto visível ("1,000 users" / "1.000 usuários"),
// mas só se ele aparecer uma única vez na página.
const extId = 'fkpkkenjcfpplmhlfdbabhcdhmhiojhj';
function findUsers(html) {
    const ds0 = html.indexOf("key: 'ds:0'");
    if (ds0 >= 0) {
        const block = html.slice(ds0);
        const start = block.indexOf(`"${extId}"`);
        if (start >= 0) {
            const rest = block.slice(start + extId.length + 2);
            const next = rest.search(/"[a-p]{32}"/);
            const own = next < 0 ? rest : rest.slice(0, next);
            const n = own.match(/\["[\w/]+",null,\d+\],\d+,null,(\d+),/)?.[1];
            if (n) return n;
        }
    }
    const texts = [...html.matchAll(/>\s*(\d{1,3}(?:[.,\s ]\d{3})*)\+?\s+(?:users?|usuários?)\s*</gi)];
    return texts.length === 1 ? texts[0][1] : null;
}

const found = findUsers(html);
// A Web Store manda para /detail/empty-title/ quando o item não está disponível
// na região de quem pede (o runner do Actions fica nos EUA); o gl=BR acima tenta
// contornar isso.
if (!found && res.url.includes('/empty-title/')) {
    throw new Error(`A Web Store não mostrou o eploc para esta região (${res.url}). Confira as regiões de distribuição no painel da Web Store.`);
}
if (!found) {
    // Mostra o que veio, para entender a falha no log do Actions
    const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
    console.error(`URL final: ${res.url}\nStatus: ${res.status}\nTamanho: ${html.length}\nTítulo: ${title}`);
    console.error(html.slice(0, 1500));
    throw new Error('Número de usuários não encontrado na página da Web Store');
}
const total = Number(found.replace(/\D/g, ''));
if (!Number.isFinite(total) || total <= 0) throw new Error(`Número inválido: ${found}`);

const step = total < 10000 ? 100 : 1000;
const rounded = Math.floor(total / step) * step;

let previous = null;
try {
    previous = JSON.parse(await readFile(dataFile, 'utf8'));
} catch {}

// Uma queda brusca provavelmente é erro de leitura, não perda real de usuários
if (previous?.total && rounded < previous.total / 2) {
    throw new Error(`Queda suspeita: ${previous.total} → ${rounded}. Arquivo não alterado.`);
}

const data = {
    total: rounded,
    usuarios: rounded.toLocaleString('pt-BR'),
};

if (previous?.total === data.total) {
    console.log(`Sem mudança: ${data.usuarios} (Web Store: ${total}).`);
} else {
    await mkdir(path.dirname(dataFile), { recursive: true });
    await writeFile(dataFile, JSON.stringify(data, null, 2) + '\n');
    console.log(`Atualizado: ${previous?.usuarios ?? '—'} → ${data.usuarios} (Web Store: ${total}).`);
}
