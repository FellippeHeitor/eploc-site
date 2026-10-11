---
title: "Filtro por trechos no campo de novo localizador"
id: eproc-filtro-novo-localizador
plataforma: eproc
grupo: "Pesquisa e filtros"
plano: free
desde: "1.0.10"
padrao: ligado
---

# Filtro por trechos no campo de novo localizador

## O que faz

Acrescenta uma busca ao campo **Novo localizador**, em qualquer tela do eproc em que ele apareça.
Você digita trechos de palavras, em qualquer ordem, e a lista mostra os localizadores que combinam,
com os mais relevantes primeiro.

## Onde aparece

**eproc**, campo "Novo localizador" (por exemplo, no cadastro de minuta).

## Passo a passo

1. Clique no campo "Novo localizador". No lugar da lista comum, abre um painel com campo de busca.
2. Digite trechos, por exemplo `concl emenda`.
3. Escolha o localizador na lista filtrada.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Busca aproximada (tolera abreviações e pequenos erros de digitação, mostrando primeiro os resultados mais relevantes) | ligada | Também encontra localizadores com pequenas diferenças de grafia e ordena pelo mais parecido. |

A busca por vários trechos em qualquer ordem depende de
[Filtro por trechos no campo de localizador secundário](./eploc-filtro-localizador-secundario)
estar ligado. Com ele desligado, este campo só encontra um trecho contínuo.

## Limitações e problemas conhecidos

- Os demais campos de seleção do eproc têm busca própria em
  [Busca nos campos de seleção](./eproc-filtro-selects).

<!-- DEMO: eproc-filtro-novo-localizador -->
