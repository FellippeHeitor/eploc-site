---
title: "Atualizar localizadores da capa após novo evento"
id: eproc-atualizar-localizadores-capa
plataforma: eproc
grupo: "Painel do processo"
plano: free
desde: "1.15.0"
padrao: ligado
---

# Atualizar localizadores da capa após novo evento

## O que faz

Algumas operações lançam um evento no processo e, com isso, mudam os localizadores, mas o eproc só
atualiza a tabela de eventos e a capa continua mostrando os localizadores anteriores. Este recurso
percebe o evento novo e atualiza a linha "Localizador(es):" da capa, sem recarregar a página.

## Onde aparece

**eproc**, página do processo, na linha "Localizador(es):" da capa.

## Passo a passo

1. Na página do processo, faça uma operação que lance um evento sem recarregar a página.
2. Quando o evento novo aparece na tabela de eventos, os localizadores da capa são atualizados
   sozinhos, cerca de um segundo depois.
3. Um pequeno brilho ao lado de "Localizador(es):" indica que a atualização foi feita pelo eploc.
   Passe o mouse sobre ele para ver o horário.

## Configurações e opções

Não há opções além de ligar ou desligar o recurso.

## Observações

- Só eventos novos disparam a atualização. Trocar de página de eventos, mudar os filtros ou carregar
  todas as páginas não dispara nada.
- Se o editor de localizadores estiver aberto, a capa não é atualizada, para não descartar o que
  você está editando.
- Se a atualização não der certo, a capa fica como estava e a página não é recarregada.
- O brilho some quando o próprio eproc redesenha a linha de localizadores, por exemplo ao salvar
  uma alteração neles.
- Com as animações desligadas (aba Geral), o brilho aparece sem animação.
