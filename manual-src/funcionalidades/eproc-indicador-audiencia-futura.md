---
title: "Indicar audiência futura na capa"
id: eproc-indicador-audiencia-futura
plataforma: eproc
grupo: "Eventos"
plano: free
desde: "1.7.0"
padrao: ligado
---

# Indicar audiência futura na capa

## O que faz

Quando o processo tem audiência designada com data futura, este recurso mostra na capa uma linha
por audiência, com o evento, o local e a data, e um link para o evento. Também avisa, em tom de
alerta, sobre audiência com data passada sem registro de realização.

## Onde aparece

**eproc**, página do processo, na capa, logo acima da linha "Localizador(es)".

## Passo a passo

1. Abra um processo com audiência designada.
2. Na capa aparece uma linha como "Evento 12: Audiência de conciliação designada - Local ... -
   20/11/2026 14:00".
3. Clique em "Evento 12" para ir até o evento na tabela. Ele fica destacado por alguns instantes, e o
   botão Voltar do navegador retorna ao ponto anterior.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Avisar também sobre audiência com data passada sem registro de realização | ligada | Mostra em tom de alerta as audiências passadas sem evento posterior de realização, cancelamento ou redesignação. |

## Observações

- Os dados vêm só da tabela de eventos já carregada. Se a audiência estiver numa página de eventos
  ainda não carregada, ela não aparece.
- Se o evento já está à vista, o link só destaca a linha, sem rolar a página.
- Audiências de eventos migrados do PJe sem registro de realização não podem ser lançadas nem
  canceladas no eproc. Na linha delas há um botão (sino riscado) para não sinalizá-las mais naquele
  processo. A escolha vale só neste computador.

<!-- DEMO: eproc-indicador-audiencia-futura -->
