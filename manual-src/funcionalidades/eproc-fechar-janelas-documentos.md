---
title: "Fechar janelas de documentos"
id: eproc-fechar-janelas-documentos
plataforma: eproc
grupo: "Menu superior"
plano: free
desde: "1.10.0"
padrao: ligado
---

# Fechar janelas de documentos

## O que faz

O eproc fecha sozinho as janelas de documentos quando você fecha o processo. Este recurso põe um
botão ao lado do número do processo que faz o mesmo a qualquer momento: fecha de uma vez as janelas
de documentos abertas, e o processo continua aberto. Cada janela de documento também ganha um botão
que fecha ela e as demais do mesmo processo, útil quando a página do processo já foi fechada.

## Onde aparece

**eproc**, página do processo, ao lado do número do processo, e canto inferior esquerdo das janelas
de documentos.

## Passo a passo

1. Abra alguns documentos pela tabela de eventos. Ao lado do número do processo aparece um ícone
   de janela com um "x" e, com mais de uma janela aberta, a quantidade.
2. Clique no ícone. As janelas de documentos se fecham, e o ícone some.

Se você fechar alguma janela à mão, a quantidade diminui sozinha.

Pela janela de documento:

1. Com dois ou mais documentos do mesmo processo abertos, cada janela mostra no canto inferior
   esquerdo um pequeno ícone de janela com um "x". Ao passar o mouse, ele mostra **Fechar todas** e, no
   balão, quantas janelas serão fechadas.
2. Clique nele em qualquer uma delas. Ela e as demais janelas de documentos do processo se fecham,
   esteja a página do processo aberta ou não.

## Configurações e opções

Não há opções além de ligar e desligar.

## Observações

- Valem só as janelas de documentos abertas a partir da página do processo que está na tela.
- Se a página do processo for recarregada, as janelas abertas antes disso não entram na contagem e
  não são fechadas pelo botão ao lado do número. Use o botão de uma das janelas de documentos.
- O botão das janelas de documentos aparece só nas que foram abertas a partir da página do processo
  com o eploc ligado, e não aparece em documentos PDF, que o navegador exibe no próprio leitor.
- Outras janelas, como a de minutas, não são fechadas.

<!-- DEMO: eproc-fechar-janelas-documentos -->
