# Copy: story da live (amanhã, 19h)

Story do Instagram (15 s). O vídeo tem uma vaga vazia, com um halo rosa, logo abaixo de
"Entre por aqui:" e das setas. É onde vai o sticker de link.

## Ao publicar

1. Suba o MP4 como story.
2. Adicione o sticker **Link** com a URL do grupo do WhatsApp.
3. Texto do sticker: **Entrar no grupo da live**.
4. Posicione o sticker sobre o halo, logo abaixo das setas. Para ver o retângulo exato, abra
   `reel.html?guia` no navegador.

## Antes de gerar de novo

O vídeo diz "Amanhã, às 19h" e "terça-feira, 24 de novembro". Como o story fica no ar por 24 h,
a data explícita evita que quem o veja no dia seguinte entenda "amanhã" errado. Para outra data,
troque os textos de `#l1`, `#l2` e `#data` em `reel.html`.

## Variações

- `--params "dia=hoje"`: story com "Hoje, às 19h", para o dia da live.
- `--params "formato=quadrado"` com `--gif`: GIF quadrado em loop (540x540, 7,5 s) para o grupo
  do WhatsApp, sem a vaga do sticker ("O link da live sai aqui no grupo."). Some
  `&dia=hoje` para a versão do dia.

```bash
node reels/render.mjs live-amanha story-amanha.mp4
node reels/render.mjs live-amanha story-hoje.mp4 --params "dia=hoje"
node reels/render.mjs live-amanha whatsapp-amanha.gif --gif --params "formato=quadrado"
node reels/render.mjs live-amanha whatsapp-hoje.gif --gif --params "formato=quadrado&dia=hoje"
```
