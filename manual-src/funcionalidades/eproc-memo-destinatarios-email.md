---
title: "Destinatários do e-mail no memo"
id: eproc-memo-destinatarios-email
plataforma: eproc
grupo: "E-mail"
plano: free
desde: "1.9.0"
padrao: ligado
---

# Destinatários do e-mail no memo

## O que faz

Depois que você envia um e-mail pela tela do processo, o eproc lança um evento com o documento
**EMAIL1**, sem memo. A extensão preenche o memo desse documento com a linha **Para:** do e-mail.
Assim, a tabela de eventos mostra para quem o e-mail foi, sem precisar abri-lo.

## Onde aparece

**eproc**, tela do processo, no memo do documento EMAIL do evento criado pelo envio.

## Passo a passo

1. Abra um processo e vá à tela de envio de e-mail.
2. Escreva e envie o e-mail normalmente.
3. Volte à tela do processo. Quando o novo evento aparece, a extensão grava o memo em segundo plano.
   Um pequeno ícone de arroba ao lado do documento indica que o memo foi preenchido.
4. Recarregue a página para ver o memo exibido pelo próprio eproc.

## Configurações e opções

Não há opções além de ligar e desligar.

## Observações

- Só os e-mails enviados por você, neste navegador, nos últimos 30 minutos são tratados. Memos de
  e-mails antigos ou enviados por outras pessoas não são alterados.
- Se o documento já tiver memo, ele é mantido como está.
