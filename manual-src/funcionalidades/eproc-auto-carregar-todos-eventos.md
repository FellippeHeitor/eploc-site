---
title: "Carregar todos os eventos automaticamente"
id: eproc-auto-carregar-todos-eventos
plataforma: eproc
grupo: "Eventos"
plano: free
desde: "1.1.4"
padrao: desligado
---

# Carregar todos os eventos automaticamente

## O que faz

Em processos com muitos eventos, o eproc mostra só uma parte e oferece o link "Carregar TODOS os
eventos". Este recurso clica nesse link por você assim que ele aparece e esconde a paginação que o
eproc deixa na tela depois.

## Onde aparece

**eproc**, página do processo, tabela de eventos.

## Passo a passo

1. Ligue o recurso nas configurações do eploc (ele vem desligado).
2. Abra um processo com muitos eventos. Todos os eventos são carregados sozinhos.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Ao clicar em link de evento ainda não carregado, carregar todos os eventos automaticamente | ligada | Quando um link leva a um evento que ainda não está na tabela, os eventos são carregados antes. |

## Observações

- Vem desligado: é preciso ligá-lo nas configurações.
- Se o carregamento não terminar (o evento 1 não chega a aparecer na tabela), a paginação do eproc
  continua na tela.

<!-- DEMO: eproc-auto-carregar-todos-eventos -->
