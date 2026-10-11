---
title: "Busca nos campos de seleção"
id: eproc-filtro-selects
plataforma: eproc
grupo: "Pesquisa e filtros"
plano: free
desde: "1.8.0"
padrao: ligado
---

# Busca nos campos de seleção

## O que faz

Muitas listas de opções do eproc (tipo de parte, classe, órgão e outras) não têm busca. Com este
recurso, ao abrir uma dessas listas aparece um campo para filtrá-la por trechos, em qualquer ordem.
A estrela ao lado de cada opção a favorita, fixando-a no topo daquela lista.

## Onde aparece

**eproc**, em qualquer campo de seleção sem busca própria que tenha opções suficientes (8 ou mais,
por padrão).

## Passo a passo

1. Clique no campo de seleção. No lugar da lista comum, abre um painel com campo de busca.
2. Digite trechos do que procura. Com a lista ainda fechada, basta começar a digitar com o campo
   selecionado.
3. Escolha a opção.
4. Para favoritar uma opção, clique na estrela ao lado dela. Na próxima vez, ela aparece no topo
   daquela lista. Clique de novo para desfavoritar.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Mínimo de opções para mostrar a busca | 8 | Listas menores continuam com a lista comum (de 2 a 100). |
| Busca aproximada (tolera abreviações e pequenos erros de digitação, mostrando primeiro os resultados mais relevantes) | ligada | Também encontra opções com pequenas diferenças de grafia. |

## Limitações e problemas conhecidos

- Não vale para listas de várias escolhas, listas sempre abertas nem campos que já têm busca própria.
- O campo "Novo localizador" tem recurso próprio:
  [Filtro por trechos no campo de novo localizador](./eproc-filtro-novo-localizador).
- Os favoritos são lembrados pelo campo e pelo texto da opção. Se o eproc mudar o texto da opção, ela
  deixa de aparecer como favorita.

<!-- DEMO: eproc-filtro-selects -->
