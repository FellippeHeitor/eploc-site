---
title: "Lembrar lei de regência da RPV por devedor"
id: rupe-rpv-lei-devedor
plataforma: RUPE
grupo: "RUPE"
plano: free
desde: "1.10.0"
padrao: ligado
---

# Lembrar lei de regência da RPV por devedor

## O que faz

No cadastro de RPV do RUPE, a seção "Lei de Regência da Obrigação de Pequeno Valor do Devedor" pede
sempre os mesmos dados para o mesmo devedor: se ele possui lei própria e, se possuir, o número, o ano
e a data de publicação da lei. O eploc lembra essa resposta para cada devedor e a preenche sozinho
nas próximas RPVs dele.

## Onde aparece

**RUPE** (`rupe.tjmg.jus.br`), tela de cadastro de RPV. As leis guardadas ficam nas configurações do
eploc, no card do recurso ("Gerenciar leis por devedor").

## Passo a passo

1. Cadastre uma RPV normalmente, preenchendo a seção da lei de regência do devedor (ou respondendo
   que ele não possui lei própria), e clique em **Salvar**.
2. Na próxima RPV do mesmo devedor, assim que ele for selecionado, a seção já vem preenchida. Os
   campos preenchidos pelo eploc ficam destacados em azul; passe o mouse sobre eles para ver de qual
   devedor veio a lei.
3. Se a lei mudou, corrija os campos e salve a RPV: o eploc passa a usar os dados novos.

## Configurações e opções

Não há opções além de ligar e desligar.

No card, **Gerenciar leis por devedor** lista os devedores guardados e permite corrigir a lei de cada
um ou esquecê-lo. No topo dele, dá para incluir a lei de um devedor habitual antes mesmo da primeira
RPV: informe o nome, o CPF/CNPJ (opcional, mas recomendado), se ele possui lei própria e, se possuir,
número, ano e data de publicação, e clique em **Incluir**.

## Observações

- O devedor é reconhecido pelo CPF ou CNPJ. Sem documento, pelo nome.
- O eploc só guarda a lei quando a RPV é salva com a seção completa (número, ano com quatro dígitos e
  data no formato dd/mm/aaaa), ou com a resposta de que o devedor não possui lei própria.
- Campos que já tinham valor, como os de uma RPV salva antes, não são alterados.
- Confira a seção antes de salvar, como em qualquer preenchimento automático.

<!-- DEMO: rupe-rpv-lei-devedor -->
