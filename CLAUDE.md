# eploc-site

Site institucional da extensão eploc. Estático: `index.html`, `styles.css`, `script.js`.

## Recursos consumidos pela extensão

- `video.html` — casca https para embeds do YouTube. A extensão eploc (repo irmão) embute o
  player nela em vez de apontar direto para youtube.com, porque páginas `chrome-extension://`
  não enviam o header `Referer` que o YouTube exige (senão dá "Erro 153"). Recebe `?v=<id do
  vídeo>` (e opcionalmente `&t=<segundos>`) via query string. Não depende de nada do site em
  si — pode ser aberta isolada.
- `videos.json` — mapa `{ "<id do script>": "<URL do vídeo>" }`, servido estaticamente pelo
  GitHub Pages (CORS liberado por padrão). É o catálogo de vídeos demonstrativos por
  funcionalidade, compartilhado entre a página de configurações da extensão (mostra o vídeo ao
  passar o mouse sobre o card do script) e este site. `id do script` é o `id` do descriptor em
  `ScriptRegistry.register(...)` no repo da extensão (ex.: `eproc-alertas-inline`). Editar este
  arquivo e dar push já atualiza o vídeo exibido nos dois lugares, sem precisar de nova versão
  da extensão.

## Workflow: atualizar o site a partir do changelog/descrição da extensão

Quando o usuário pedir para "atualizar o site com base no changelog/webstore do eploc":

1. Leia as fontes no projeto da extensão (repo irmão):
   - `/Users/fellippeheitor/git/eploc/src/CHANGELOG.md` — entrada(s) mais recente(s) no topo.
   - `/Users/fellippeheitor/git/eploc/src/WEBSTORE.md` — descrição completa e atual, útil para conferir wording já consolidado.
2. Em `index.html`, há duas seções que recebem essas novidades:
   - `#recursos` → `.features` — cards para os recursos **principais/flagship**. A grade tem ~12 cards; ao trazer um recurso novo grande o suficiente para entrar aqui, considere substituir um card mais fraco em vez de só crescer a lista (ver commit `8bcd964` como exemplo desse tipo de curadoria).
   - `#detalhes` → `.detail-list` — lista de ajustes menores, uma frase curta por `<li><span>...</span></li>`, sem marketing, no mesmo tom direto dos itens existentes.
3. Critério prático: novidades "novas funcionalidades" pequenas/específicas do changelog viram itens de `.detail-list`; só recursos realmente grandes e visuais ganham um novo `.feature-card` (com ícone SVG inline simples, no estilo dos existentes). Itens de "Melhorias" e "Corrigido" do changelog normalmente **não** entram no site — são polimento interno, não recurso novo.
4. Não crie uma seção de changelog no site nem liste versão/data — o site fala de recursos, não de releases.
5. Depois de editar, mostre o diff relevante mas não rode build nem commit a menos que pedido.

Commits anteriores desse tipo usam mensagens como "Adiciona novas funcionalidades ao painel de recursos e melhorias na descrição das funcionalidades" — só crie o commit se o usuário pedir.
