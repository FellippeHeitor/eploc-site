---
title: "Criar Novo Lembrete rápido"
id: eproc-lembrete-prefill
plataforma: eproc
grupo: "Destaques e lembretes"
plano: free
desde: "1.1.2"
padrao: ligado
---

# Criar Novo Lembrete rápido

## O que faz

Cria um lembrete do processo a partir de um trecho da descrição de um evento. Você seleciona o
texto, clica no botão de lembrete e a tela de Novo Lembrete já abre com a descrição preenchida.

## Onde aparece

**eproc**, página do processo: descrição dos eventos e balões de informação de documentos. O
lembrete é criado na tela de Novo Lembrete do próprio eproc.

## Passo a passo

1. Selecione um trecho da descrição de um evento (ou passe o mouse sobre ele sem selecionar).
2. Na pequena barra que aparece ao lado, clique no botão de lembrete ("Criar lembrete").
3. A tela de Novo Lembrete abre com a descrição preenchida, por exemplo "Evento 12: prazo para
   manifestação".
4. Complete os demais campos e salve como de costume.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Oferecer botão de Novo Lembrete rápido ao passar o mouse sem selecionar texto | ligada | Desligada, o botão só aparece quando você seleciona um trecho. |
| Prefixar a descrição sugerida com "Evento N: " | ligada | Começa a descrição com o número do evento de onde o texto veio. |

## Limitações e problemas conhecidos

- O botão de lembrete faz parte do mesmo conjunto de botões dos
  [Destaques de trecho](./eproc-destaques-trecho). Os dois recursos funcionam juntos: com qualquer um
  deles ligado, o botão aparece.
- Se a página não tiver o link "Novo Lembrete", o eploc avisa que não conseguiu abri-lo.

<!-- DEMO: eproc-lembrete-prefill -->
