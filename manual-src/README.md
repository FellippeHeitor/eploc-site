# Manual do eploc (fonte)

Fonte em Markdown do manual publicado em https://eploc.com.br/manual, feito com
[VitePress](https://vitepress.dev). Esta pasta fica fora do Jekyll (`exclude` em `_config.yml`);
o que o site publica é a pasta `manual/` na raiz, gerada a partir daqui.

## Comandos

```bash
cd manual-src
npm ci
npm run dev        # pré-visualização em http://localhost:5173/manual/
npm run build      # gera ../manual
npm run pdf        # gera ../manual/eploc-manual.pdf (depois do build)
```

O PDF é montado por `scripts/gerar-pdf.mjs`: abre cada página já construída no Chromium, na ordem
da barra lateral, e junta tudo num documento com capa e sumário (links internos funcionando). Usa
o Google Chrome instalado ou o executável indicado em `CHROME_PATH`. A versão da extensão citada
na capa vem de `.vitepress/versao.json` — atualize-a a cada release da extensão.


## Publicação

O workflow `.github/workflows/manual.yml` roda a cada push no `main` que altera `manual-src/`:
gera `manual/` (com o PDF em `manual/eploc-manual.pdf`) e commita o resultado (mesmo esquema das thumbnails). Depois de um push aqui, dê
`git pull` antes do próximo commit. Não edite `manual/` à mão.

## Organização

- `index.md`, `inicio-rapido.md` — apresentação e primeiros passos.
- `geral/` — recursos da extensão em si (popup, configurações, backups).
- `funcionalidades/<id>.md` — uma página por script. O nome do arquivo é o `id` do script em
  `ScriptRegistry.register(...)` no repo da extensão; a ajuda contextual da extensão monta o link
  `https://eploc.com.br/manual/funcionalidades/<id>` a partir dele, então **não renomeie**.
- `privacidade.md`, `compatibilidade.md`, `perguntas-frequentes.md`, `contato.md` — institucionais.

## Molde de uma página de funcionalidade

Front matter (lido pelo cabeçalho de selos e pela barra lateral):

```yaml
---
title: "Nome exatamente como nas configurações da extensão"
id: id-do-script
plataforma: eproc        # eproc | RUPE | SEI | TJMG
tribunal: TJMG           # opcional, quando o recurso só serve a um tribunal
grupo: "Eventos"         # grupo das configurações; RUPE/SEI/TJMG repetem a plataforma
plano: free              # free | pro
desde: "1.7.0"           # primeira versão publicada com o script (CHANGELOG da extensão)
padrao: ligado           # ligado | desligado numa instalação nova
---
```

Seções, nesta ordem: `## O que faz` (2–3 frases), `## Onde aparece`, `## Passo a passo`,
`## Configurações e opções`, `## Observações`. O selo de plano (Gratuito/Pro) e o
"Disponível desde" aparecem sozinhos, a partir do front matter. Marque o lugar da demonstração
animada com `<!-- DEMO: <id> -->`.

Exemplos usam sempre dados fictícios (processos, partes, CPFs).
