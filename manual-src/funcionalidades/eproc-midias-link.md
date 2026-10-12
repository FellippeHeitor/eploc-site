---
title: "Atalho PJe Mídias"
id: eproc-midias-link
plataforma: eproc
grupo: "Menu superior"
plano: free
desde: "1.0.9"
padrao: ligado
---

# Atalho PJe Mídias

## O que faz

Coloca um ícone de câmera ao lado do número do processo que abre o PJe Mídias, já pesquisando o
processo, em nova aba. Assim você chega às gravações de audiência sem copiar e colar o número.

## Onde aparece

**eproc**, página do processo, ao lado do número do processo.

## Passo a passo

1. Abra um processo no eproc.
2. Em segundo plano, o eploc consulta o PJe Mídias para saber se há gravações daquele processo.
3. Se houver, o ícone de câmera mostra a quantidade de audiências. Passe o mouse para ver o
   resumo ("Acessar 2 audiências no PJe Mídias", por exemplo).
4. Clique no ícone: o PJe Mídias abre numa nova aba, com o processo pesquisado.

Quando a consulta não consegue confirmar a quantidade, o ícone aparece sem número e o balão convida
a verificar ("Verificar se há audiências no PJe Mídias"). Quando a consulta confirma que não há
gravações, o ícone não aparece.

## Configurações e opções

Não há opções além de ligar e desligar.

## Observações

- A consulta usa a sua sessão no PJe Mídias (`midias.pje.jus.br`). Se ela expirar, o eploc tenta
  entrar de novo automaticamente. Se não conseguir, o ícone aparece sem número.
- Para fazer essa consulta, o número do processo é enviado ao PJe Mídias, como aconteceria numa
  pesquisa feita à mão. Veja [Privacidade e dados](../privacidade).

<!-- DEMO: eproc-midias-link -->
