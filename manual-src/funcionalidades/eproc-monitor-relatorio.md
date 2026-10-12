---
title: "Monitor de Relatórios"
id: eproc-monitor-relatorio
plataforma: eproc
grupo: "Monitoramento"
plano: free
desde: "1.2.0"
padrao: ligado
---

# Monitor de Relatórios

## O que faz

Permite marcar processos de um relatório para acompanhar. Na próxima vez que o processo aparecer no
relatório, o eploc destaca as colunas que mudaram desde a marcação. Se nada mudou, a linha fica
esmaecida, para você focar no que andou.

## Onde aparece

**eproc**, Relatório Geral de Processos. O gerenciamento fica nas configurações do eploc, no card do
recurso ("Gerenciar colunas excluídas e processos monitorados").

## Passo a passo

1. Gere o Relatório Geral.
2. Passe o mouse sobre a linha de um processo e clique no ícone de olho ("Monitorar este processo").
   Para marcar todos os processos da página, use "Monitorar todos os processos listados nesta página
   do relatório".
3. Nas próximas vezes em que gerar o relatório:
   - as células que mudaram ficam destacadas, com a marca "NOVO";
   - as linhas sem mudança ficam esmaecidas.
4. Depois de ver a mudança, use "Marcar alteração como vista (continuar monitorando)". Para encerrar
   o acompanhamento, use "Parar de monitorar este processo".
5. No gerenciador, você pode excluir colunas da comparação (por exemplo, colunas que mudam todo dia)
   e ver ou remover os processos monitorados.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Guardar o valor anterior de cada coluna alterada (cifrado, só neste dispositivo) para mostrá-lo ao passar o mouse | desligada | Ao passar o mouse sobre a marca "NOVO", mostra o valor de antes. Desligada, o eploc guarda só uma impressão digital (hash) de cada valor, nunca o conteúdo. |

## Observações

- O acompanhamento é separado por perfil/unidade do eproc.
- Com a opção do valor anterior desligada, não há como saber qual era o valor antigo, só que ele
  mudou.
- O valor anterior fica cifrado e só neste computador. Ele não entra no backup, então não aparece em
  outro computador.
- Na coluna de localizadores, mudar só a ordem dos localizadores não conta como alteração.

<!-- DEMO: eproc-monitor-relatorio -->
