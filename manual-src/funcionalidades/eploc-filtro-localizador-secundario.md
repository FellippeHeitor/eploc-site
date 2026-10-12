---
title: "Filtro por trechos no campo de localizador secundário"
id: eploc-filtro-localizador-secundario
plataforma: eproc
grupo: "Pesquisa e filtros"
plano: free
desde: "1.0.10"
padrao: ligado
---

# Filtro por trechos no campo de localizador secundário

## O que faz

A busca do campo de localizadores secundários do eproc só encontra o texto digitado exatamente
como está, em sequência. Com este recurso, você pode digitar trechos de palavras, em qualquer
ordem, e a lista mostra só os localizadores que contêm todos eles.

## Onde aparece

**eproc**, campo de localizadores secundários (por exemplo, no cadastro de minuta e na alteração de
localizadores), na caixa de busca da lista.

## Passo a passo

1. Abra a lista do campo de localizadores secundários.
2. Digite trechos separados por espaço, por exemplo `concl emenda` para achar "Conclusos para
   decisão - Petição inicial emendada".
3. Use as setas para percorrer os resultados e Enter para marcar o destacado.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Busca aproximada (tolera abreviações e pequenos erros de digitação) | ligada | Também encontra localizadores com pequenas diferenças de grafia. |

Este interruptor também decide se o campo **Novo localizador** aceita vários trechos em qualquer
ordem. Veja [Filtro por trechos no campo de novo localizador](./eproc-filtro-novo-localizador).

## Observações

- Nesta lista, os resultados não são reordenados por relevância: eles só são filtrados, na ordem do
  eproc.

<!-- DEMO: eploc-filtro-localizador-secundario -->
