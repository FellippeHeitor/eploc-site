---
title: "Buscar preventos em segundo plano"
id: eproc-auto-buscar-prevencao
plataforma: eproc
grupo: "Pesquisa e filtros"
plano: free
desde: "1.1.0"
padrao: ligado
---

# Buscar preventos em segundo plano

## O que faz

Executa a busca de prevenção do eproc em segundo plano, sem tirar você da página do processo. A aba
de resultado só é aberta quando há possíveis preventos.

## Onde aparece

**eproc**, página do processo, num botão com ícone de busca ao lado do link "Prevenção".

## Passo a passo

1. Abra um processo.
2. Clique no botão ao lado de "Prevenção" ("Executar busca de prevenção em segundo plano").
3. Aguarde: o botão mostra que a busca está em andamento.
4. Se houver possíveis preventos, o resultado abre numa nova aba. Se não houver, o botão indica que
   a busca já foi realizada e nada mais é aberto.
5. Para repetir a busca, clique de novo ("Executar novamente busca de prevenção em segundo plano").

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Executar a busca automaticamente quando a prevenção estiver "NÃO executada" | desligada | Ao abrir um processo cuja prevenção ainda não foi executada, a busca roda sozinha uma vez. |

## Observações

- A busca é a mesma do eproc, feita numa janela oculta. Se o eproc demorar ou falhar, o botão indica
  a falha e você pode tentar de novo.

<!-- DEMO: eproc-auto-buscar-prevencao -->
