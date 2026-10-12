---
title: "SEI mais descritivo e horizontal"
id: sei-mais-descritivo-horizontal
plataforma: SEI
grupo: "SEI"
plano: free
desde: "1.0.2"
padrao: ligado
---

# SEI mais descritivo e horizontal

## O que faz

Na tela de controle de processos do SEI, os marcadores e as descrições aparecem só como ícones ou
balões. Este recurso mostra o texto dos marcadores ao lado dos ícones e a especificação de cada
processo logo abaixo do número, reorganiza as colunas e destaca as linhas com termos que você
escolher, como "urgente".

## Onde aparece

**SEI** (`*.jus.br/sei/`), tela de controle de processos.

## Passo a passo

1. Abra a tela de controle de processos do SEI.
2. Cada marcador aparece com o texto ao lado do ícone, e a descrição de cada processo aparece em
   letra menor sob o número.
3. As linhas que contêm um dos termos configurados ficam com a cor de destaque.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Termos para destaque (separados por `;`) | `urgente; prioridade;` | Linhas que contêm algum desses termos recebem a cor de destaque. Maiúsculas e acentos não importam. |
| Cor de destaque | #a5e491 (verde-claro) | Cor de fundo das linhas destacadas. |

## Observações

- Só atua na tela de controle de processos.
- Trechos repetitivos dos marcadores, como "Informações prestadas no processo", são omitidos para
  economizar espaço.

<!-- DEMO: sei-mais-descritivo-horizontal -->
