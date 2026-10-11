---
title: "Painel fixo do processo"
id: eproc-painel-fixo-processo
plataforma: eproc
grupo: "Painel do processo"
plano: free
desde: "1.0.2"
padrao: ligado
---

# Painel fixo do processo

## O que faz

Mostra, num painel sempre visível, um resumo do processo: número, classe, assuntos, partes com
CPF/CNPJ, advogados com OAB e os campos de Informações Adicionais que você escolher. Cada dado pode
ser copiado com um clique, e o painel se atualiza sozinho quando a página muda.

## Onde aparece

**eproc**, página do processo, cadastro de minuta e página de intimação. Por padrão, o painel fica
preso junto ao menu lateral, sob o título "Resumo do Processo".

## Passo a passo

1. Abra um processo. O painel aparece ao lado do menu lateral.
2. Clique num dado (número, CPF, CNPJ, OAB, nome etc.) para copiá-lo.
3. Recolha ou expanda cada seção do painel pelo título dela. A escolha é lembrada entre processos.
4. Para escolher os campos de Informações Adicionais exibidos, abra a seção Informações Adicionais da
   página e use o botão **+i** ao lado de cada campo ("Adicionar ao painel fixo do processo"). Clique
   de novo para remover.
5. Para soltar o painel, desafixe-o: ele passa a flutuar e pode ser arrastado e redimensionado. A
   posição e o tamanho são lembrados.
6. Se o painel for recolhido ou ficar oculto, use o botão circular "Mostrar painel do processo" para
   trazê-lo de volta.

Outros sinais do painel:

- Os assuntos ganham um selo de validado ou não validado. O selo de não validado abre a retificação
  de assuntos.
- As partes ativas no Domicílio Judicial Eletrônico exibem o selo do DJE, com os prazos no balão.
- O painel segue o tema claro ou escuro escolhido nas configurações do eploc.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Carregar automaticamente os campos de Informações Adicionais exibidos no painel que o eproc só carrega sob demanda (contadores, chave do processo) | desligada | Desligada, esses campos mostram um link "carregar" no painel. Ligada, são carregados ao abrir o processo. |

Para ocultar o número do processo no painel quando ele já aparece no menu superior, veja
[Número do processo no menu superior](./eproc-numero-processo-navbar).

## Limitações e problemas conhecidos

- Preso ao menu lateral, o painel se oculta quando o menu é recolhido ou quando você usa a busca do
  menu. O botão circular o reexibe até o menu voltar a abrir ou a página recarregar.
- Campos de Informações Adicionais sem valor exibível não oferecem o botão **+i**.
- A posição e o tamanho do painel solto ficam guardados no navegador, para cada endereço do eproc,
  e não entram no backup.

<!-- DEMO: eproc-painel-fixo-processo -->
