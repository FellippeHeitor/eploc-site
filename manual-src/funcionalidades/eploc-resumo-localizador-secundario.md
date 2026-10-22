---
title: "Resumo das opções selecionadas em campos múltiplos"
id: eploc-resumo-localizador-secundario
plataforma: eproc
grupo: "Pesquisa e filtros"
plano: free
desde: "1.4.0"
padrao: ligado
---

# Resumo das opções selecionadas em campos múltiplos

## O que faz

Quando há mais de uma opção marcada num campo de seleção múltipla do eproc (como o de localizadores
secundários ou o filtro "Status" da área de trabalho de minutas), o campo mostra só "Selecionado X de
Y" (ou "X de Y selecionados"), sem dizer quais. Este recurso lista, logo abaixo do campo, as opções selecionadas, cada uma com um "x"
para removê-la.

## Onde aparece

**eproc**, abaixo de qualquer campo de seleção múltipla que mostre só a contagem das opções marcadas,
como o de localizadores secundários e o filtro "Status" da área de trabalho de minutas.

## Passo a passo

1. Marque duas ou mais opções num campo de seleção múltipla (por exemplo, localizadores secundários).
2. Abaixo do campo aparecem pequenas etiquetas com o nome de cada um.
3. Clique no "x" de uma etiqueta para desmarcar aquela opção.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Quantidade de opções mostradas antes de recolher as demais num botão "+N" | 5 | Com mais opções marcadas que isso, só as primeiras aparecem; o botão "+N" mostra as demais numa área com rolagem, e "Mostrar menos" recolhe de novo. |

## Observações

- Nomes longos aparecem cortados com reticências; passe o mouse sobre a etiqueta para ver o nome completo.
- Com uma única opção marcada, o resumo não aparece, porque o próprio campo já mostra o nome.
- Se a caixa "Incluir processo em outros localizadores" for desmarcada, o resumo some, porque a
  seleção não será enviada.

<!-- DEMO: eploc-resumo-localizador-secundario -->
