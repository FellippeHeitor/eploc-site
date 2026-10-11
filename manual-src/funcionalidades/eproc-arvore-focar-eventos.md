---
title: "Focar evento/documento na árvore (links da minuta)"
id: eproc-arvore-focar-eventos
plataforma: eproc
grupo: "Árvore e minuta"
plano: free
desde: "1.4.0"
padrao: ligado
---

# Focar evento/documento na árvore (links da minuta)

## O que faz

É a parte do [Atalho para árvore no menu da minuta](./eproc-atalho-arvore-minuta) que age na árvore
de documentos: quando a árvore é aberta por um link "Evento N" da minuta, ela rola até o evento, o
destaca e, se um documento foi indicado, abre esse documento.

## Onde aparece

**eproc**, árvore de documentos do processo, quando aberta a partir de um link da minuta.

## Passo a passo

1. Na visualização de minuta, clique numa menção como "Evento 4, documento 1".
2. Na árvore, o evento 4 aparece destacado e o documento 1 é aberto, como se você tivesse clicado
   nele.

## Configurações e opções

Não tem interruptor próprio: funciona sempre que o
[Atalho para árvore no menu da minuta](./eproc-atalho-arvore-minuta) estiver ligado.

## Limitações e problemas conhecidos

- O evento é localizado pelo número "(N)" mostrado na árvore. Se o evento não estiver na árvore
  (por exemplo, por filtros aplicados), nada é destacado.

<!-- DEMO: eproc-arvore-focar-eventos -->
