---
title: "Abrir processo migrado no PJe"
id: eproc-abrir-processo-pje
plataforma: eproc
tribunal: TJMG
grupo: "Migração PJe (TJMG)"
plano: free
desde: "1.15.0"
padrao: ligado
---

# Abrir processo migrado no PJe

## O que faz

Em processos migrados do PJe para o eproc, abre o mesmo processo no PJe do TJMG numa aba nova, para
consultar o histórico original. O eploc faz a consulta processual pelo número e, quando ela encontra
o processo, já abre os detalhes dele.

## Onde aparece

**eproc do TJMG**, página do processo, só em processos com o aviso "Processo Migrado" no topo: um
ícone de abrir em nova aba ao lado do número do processo. O próprio aviso "Processo Migrado" também
fica clicável e faz o mesmo.

## Passo a passo

1. Abra um processo migrado no eproc.
2. Clique no ícone ao lado do número do processo (ou no aviso "Processo Migrado").
3. Na primeira vez, o eploc abre as configurações e pede acesso ao PJe (`pje.tjmg.jus.br`).
   Clique em **Permitir**, confirme no navegador, volte ao processo e clique de novo.
4. O PJe abre numa aba ao lado, com o número pesquisado na consulta processual. Quando a consulta
   encontra exatamente esse processo, os detalhes se abrem na mesma aba.

Enquanto o PJe carrega, o ícone gira. Se algo der errado (por exemplo, a sessão do PJe expirou), o
ícone vira um alerta por alguns segundos; passe o mouse para ver o motivo.

## Configurações e opções

Não há opções além de ligar e desligar.

## Observações

- É preciso estar logado no PJe. Se a sessão tiver expirado, entre no PJe na aba que se abriu e
  clique de novo no atalho.
- A pesquisa passa pelo reCAPTCHA do próprio PJe, como uma consulta feita à mão. Se o PJe recusar,
  a aba fica na consulta para você pesquisar.
- O número do processo só vai ao PJe quando você clica no atalho. Veja
  [Privacidade e dados](../privacidade).
