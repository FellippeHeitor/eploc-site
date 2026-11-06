---
title: "Marca-texto nos documentos"
id: eproc-marca-texto-documentos
plataforma: eproc
grupo: "Eventos"
plano: free
desde: "1.12.0"
padrao: ligado
---

# Marca-texto nos documentos

## O que faz

Em decisões longas, as ordens a cumprir nem sempre estão só no dispositivo: muitas vezes aparecem
espalhadas pelos tópicos da fundamentação. Este recurso realça essas ordens automaticamente e deixa
você marcar qualquer trecho com um marca-texto. Ordens e marcações podem ser dadas como cumpridas, e
uma barra no topo do documento mostra quantas faltam e leva de uma a outra.

## Onde aparece

**eproc**, na janela de um documento aberto pela tabela de eventos do processo:

- as ordens são realçadas em decisões, despachos e sentenças (siglas como DESP, DEC, DESPADEC e
  SENT);
- o marca-texto funciona em qualquer documento em HTML.

## Passo a passo

### Encontrar as ordens

1. Abra uma decisão, um despacho ou uma sentença pela tabela de eventos.
2. As ordens aparecem com um fundo amarelo claro e sublinhadas, do verbo até o fim da frase. Por
   exemplo: "Intime-se a parte autora para emendar a inicial."
3. No topo do documento, a barra **Marca-texto** mostra quantas ordens e marcações faltam cumprir.
   Use as setas para ir à anterior ou à próxima. O trecho pisca por um instante ao chegar nele.
   Quando há mais de um item, a barra fica presa no topo da janela enquanto você rola o documento.

O eploc reconhece verbos de comando com "-se", no singular e no plural: intime-se, cite-se,
expeça-se, oficie-se, cumpra-se, certifique-se, aguarde-se, dê-se, remetam-se, arquivem-se e outros.
Também reconhece as ordens na primeira pessoa que começam por **Determino** ou **Defiro**.
O fecho solto no fim da decisão, num parágrafo só dele (como "Intimem-se. Cumpra-se.", "P.R.I." ou
"Expeçam-se / diligencie-se o necessário."), não é realçado nem entra na conta.

### Marcar um trecho

1. Selecione o trecho no documento.
2. Clique com o botão direito e escolha uma cor: amarelo, verde, rosa ou azul.

A marcação fica salva e reaparece sempre que o documento for aberto de novo. Para trocar a cor,
selecione o mesmo trecho e escolha outra.

### Dar como cumprido

Clique com o botão direito sobre uma ordem ou uma marcação e escolha **Marcar como cumprida** (ou
**cumprido**). O trecho fica riscado, com um sinal de confirmação verde, e sai da contagem da barra.
Para desfazer, use **Desmarcar como cumprida** no mesmo menu. Nas marcações, o menu também tem
**Remover marcação**.

## Configurações e opções

- **Realçar automaticamente as ordens nas decisões, despachos e sentenças** (ligada por padrão):
  desligada, só as marcações feitas por você aparecem.

## Observações

- PDFs abertos no visualizador do navegador não podem ser marcados. Funciona nos documentos em
  HTML, como os produzidos no editor do eproc.
- As marcações valem para aquele documento. Se a decisão for retificada e juntada como um novo
  documento, as marcações não passam para ele.
- As marcações entram no backup e na sincronização com o Google Drive.
- A barra não sai na impressão do documento.

<!-- DEMO: eproc-marca-texto-documentos -->
