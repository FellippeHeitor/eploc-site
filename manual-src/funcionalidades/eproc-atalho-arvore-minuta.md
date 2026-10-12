---
title: "Atalho para árvore no menu da minuta"
id: eproc-atalho-arvore-minuta
plataforma: eproc
grupo: "Árvore e minuta"
plano: free
desde: "1.4.0"
padrao: ligado
---

# Atalho para árvore no menu da minuta

## O que faz

Na visualização de uma minuta, acrescenta o item **Árvore** ao menu flutuante, que abre a árvore de
documentos do processo numa nova aba. Também transforma as menções a "Evento N" e "Evento N,
documento M" no texto da minuta em links que abrem a árvore já nesse ponto.

## Onde aparece

**eproc**, tela de visualização de minuta, no menu flutuante (junto de "Alterações e Marcações" e
"Lembretes da minuta") e no texto da própria minuta.

## Passo a passo

1. Abra uma minuta para visualização.
2. No menu flutuante, clique em **Árvore**. Na primeira vez, o item mostra "Carregando em segundo
   plano..." enquanto o eploc busca o endereço da árvore. Em seguida a árvore abre numa nova aba.
3. No texto da minuta, clique numa menção como "Evento 4" ou "Evento 4, documento 1". A árvore abre
   rolada até o evento, com ele destacado e, se um documento foi indicado, com esse documento
   aberto.
4. Os cliques seguintes reaproveitam a mesma aba da árvore, enquanto ela estiver aberta.

## Configurações e opções

Não há opções além de ligar e desligar. A parte que rola e destaca o evento na árvore é feita por
[Focar evento/documento na árvore](./eproc-arvore-focar-eventos), que acompanha este recurso.

## Observações

- O primeiro clique em cada página demora um pouco, porque o endereço da árvore precisa ser obtido
  da página do processo.
- Menções que o eproc já transformou em link continuam com o link original do eproc.

<!-- DEMO: eproc-atalho-arvore-minuta -->
