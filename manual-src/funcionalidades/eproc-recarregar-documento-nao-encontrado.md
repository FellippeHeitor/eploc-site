---
title: "Tentar de novo documento não encontrado"
id: eproc-recarregar-documento-nao-encontrado
plataforma: eproc
grupo: "Eventos"
plano: free
desde: "1.15.0"
padrao: ligado
---

# Tentar de novo documento não encontrado

## O que faz

Às vezes, ao abrir um documento, o eproc responde "Erro acessar o documento: Documento não
encontrado." em vez de mostrar a peça. O erro é passageiro, comum em processos migrados do PJe, e
costuma sumir ao recarregar a página. Com este recurso, o eploc recarrega sozinho, até 3 vezes
seguidas.

## Onde aparece

**eproc**, na janela de documento aberta pela tabela de eventos, inclusive na pré-visualização da
página do processo.

<!-- DEMO: eproc-recarregar-documento-nao-encontrado -->

## Passo a passo

1. Abra um documento normalmente.
2. Se o eproc responder "Documento não encontrado", um aviso do eploc aparece no topo da janela,
   como "Documento não encontrado. Tentando de novo (1 de 3)…", e a página é recarregada em um
   segundo.
3. Na maioria das vezes, o documento abre numa dessas tentativas.
4. Se o erro continuar depois da terceira, o aviso diz que o documento continua não encontrado e
   oferece o botão **Tentar de novo**, que recomeça as tentativas.

## Configurações e opções

Não há opções além de ligar e desligar.

## Observações

As tentativas são contadas por documento e zeram depois de meio minuto sem erro, então abrir o
mesmo documento mais tarde volta a ter as 3 tentativas automáticas.

Só a janela do documento é recarregada, nunca a página do processo.

Se o documento realmente não existir mais, as tentativas não resolvem: o erro continua e o aviso
fica com o botão de tentar de novo.
