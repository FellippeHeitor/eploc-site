---
title: "Restaurar descrição de eventos migrados"
id: eproc-restaurar-descricao-eventos-migrados
plataforma: eproc
tribunal: TJMG
grupo: "Migração PJe (TJMG)"
plano: free
desde: "1.3.0"
padrao: ligado
---

# Restaurar descrição de eventos migrados

## O que faz

Em processos migrados do PJe, vários seletores de evento do eproc mostram só "PETIÇÃO" ou
"Juntado(a)" no lugar da descrição real. Este recurso memoriza a descrição real a partir da tabela
de eventos e a coloca nesses seletores. Na tela de envio de e-mail, também mostra o ID no PJe de
cada documento.

## Onde aparece

**eproc do TJMG**, em processos migrados:

- seletores de evento de outras telas, como a de anexar/vincular documento e a de cadastro de
  minuta;
- lista de documentos da tela de envio de e-mail.

## Passo a passo

1. Abra a página do processo migrado. O eploc lê a descrição dos eventos da tabela.
2. Em seguida, abra a tela desejada (anexar documento, cadastrar minuta, enviar e-mail). Os
   seletores mostram a descrição real no lugar de "PETIÇÃO" ou "Juntado(a)".
3. Na tela de envio de e-mail, cada documento importado ganha a nota "ID no PJe: <número>", que pode
   ser encontrada com Ctrl+F.

## Configurações e opções

Não há opções além de ligar e desligar.

## Observações

- É preciso abrir a página do processo antes. As descrições memorizadas valem por 30 minutos.
- Com vários processos abertos em abas, a substituição só acontece nas telas do último processo cuja
  página foi aberta.

<!-- DEMO: eproc-restaurar-descricao-eventos-migrados -->
