---
title: "Atalho para o dispositivo"
id: eproc-atalho-dispositivo
plataforma: eproc
grupo: "Eventos"
plano: free
desde: "1.11.0"
padrao: ligado
---

# Atalho para o dispositivo

## O que faz

Em decisões e despachos longos, o que importa costuma estar no fim. Este recurso põe no topo do
documento o link **Ir para o dispositivo**, que leva direto ao início da parte dispositiva, sem
precisar rolar o texto inteiro.

## Onde aparece

**eproc**, janela de um documento de decisão ou despacho aberto pela tabela de eventos do processo
(siglas como DESP, DEC e DESPADEC). O link fica logo no começo do documento, com o logo do eploc.

## Passo a passo

1. Na página do processo, abra uma decisão ou um despacho pela tabela de eventos.
2. No topo do documento, clique em **Ir para o dispositivo**. O documento rola até o início do
   dispositivo, que pisca em amarelo por um instante.

O eploc procura, nesta ordem:

- uma linha só com **DISPOSITIVO**;
- uma linha só com **DETERMINAÇÕES**;
- um parágrafo que começa por **Ante o exposto**.

Vale a primeira dessa lista que o documento tiver. Assim, um "Ante o exposto" no meio da
fundamentação não ganha de um "DISPOSITIVO" que vem depois. Maiúsculas, acentos e a pontuação do fim
("Ante o exposto:") não fazem diferença.

### Usar outra expressão

Se você ou o seu gabinete usam outra expressão para abrir o dispositivo (por exemplo, "Isso posto"):

1. Num documento que a tenha, selecione a expressão no começo da linha.
2. Clique com o botão direito e escolha **Usar como marcador do dispositivo**.

A expressão fica salva e o link aparece na hora. Ela vale como começo de parágrafo e é procurada
depois das três expressões padrão. Sem nada selecionado, o botão direito abre o menu normal do
navegador.

## Configurações e opções

- **Rolar automaticamente até o dispositivo ao abrir o documento** (desligada por padrão): o
  documento já abre rolado até o dispositivo. O link continua no topo, para voltar a ele.
- **Outras expressões que marcam o dispositivo (separadas por ;)**: as expressões salvas pelo botão
  direito. Dá para editar ou apagar aqui.

## Observações

- Quando o documento não tem nenhuma das expressões, o link não aparece.
- Se o documento for aberto fora da página do processo, o eploc reconhece a decisão ou o despacho
  pelo título no começo do texto ("DESPACHO/DECISÃO").
- A expressão precisa estar no começo da linha ou do parágrafo. Se o documento quebrar a expressão
  em formatações diferentes (por exemplo, só "Ante" em negrito), ela pode não ser encontrada.
- O link não sai na impressão do documento.

<!-- DEMO: eproc-atalho-dispositivo -->
