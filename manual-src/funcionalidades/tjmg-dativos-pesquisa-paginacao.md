---
title: "Melhorar consulta de advogados dativos (TJMG)"
id: tjmg-dativos-pesquisa-paginacao
plataforma: TJMG
grupo: "TJMG"
plano: free
desde: "1.3.0"
padrao: ligado
---

# Melhorar consulta de advogados dativos (TJMG)

## O que faz

Na consulta de advogados dativos do TJMG, acrescenta um campo de busca aos filtros (Subseção,
Comarca, Especialidade) e junta todas as páginas de resultado numa única lista, sem precisar
navegar página por página.

## Onde aparece

**TJMG**, consulta de advogados dativos (`consulta-dativos.tjmg.jus.br`).

## Passo a passo

1. Abra a consulta de advogados dativos.
2. Nos filtros, digite para encontrar a opção desejada em vez de rolar a lista.
3. Faça a consulta. O eploc carrega as demais páginas de resultado, mostrando o andamento ("carregando
   página 2 de 5..."), e as reúne numa única lista. O total de registros aparece no topo da tabela.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Adicionar campo de busca aos filtros (selects) | ligada | Busca por digitação nos filtros. |
| Unificar automaticamente todas as páginas de resultado | ligada | Junta todas as páginas numa lista. |

## Limitações e problemas conhecidos

- Se a quantidade carregada não bater com o total informado no rodapé, o eploc avisa e mantém a
  paginação, para você conferir manualmente.

<!-- DEMO: tjmg-dativos-pesquisa-paginacao -->
