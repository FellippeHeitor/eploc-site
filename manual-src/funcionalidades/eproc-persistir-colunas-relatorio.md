---
title: "Persistir colunas visíveis do Relatório Geral"
id: eproc-persistir-colunas-relatorio
plataforma: eproc
grupo: "Relatórios"
plano: free
desde: "1.4.0"
padrao: ligado
---

# Persistir colunas visíveis do Relatório Geral

## O que faz

No Relatório Geral, o eproc permite escolher as colunas visíveis, mas com frequência volta ao
padrão sozinho. Este recurso memoriza as colunas que você escolheu e as reaplica quando o eproc as
reseta, avisando quando faz isso.

## Onde aparece

**eproc**, Relatório Geral de Processos, seletor "Colunas visíveis".

## Passo a passo

1. Gere o Relatório Geral e ajuste as colunas em "Colunas visíveis". Um balão confirma: "O eploc vai
   lembrar dessa coluna para você".
2. Quando o eproc resetar as colunas, o eploc as remarca, recarrega a tabela e avisa no botão
   "Colunas visíveis": "O sistema resetou as colunas — mas o eploc já corrigiu pra você".

## Configurações e opções

Não há opções além de ligar e desligar.

## Observações

- Nada é alterado antes de você mexer numa coluna pela primeira vez com o recurso ligado.
- As colunas são guardadas separadamente para cada perfil/unidade do eproc.
- A correção é feita uma coluna por vez. Com várias colunas resetadas, ela leva alguns instantes.

<!-- DEMO: eproc-persistir-colunas-relatorio -->
