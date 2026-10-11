---
title: "Perfil favorito no login"
id: eproc-perfil-favorito-login
plataforma: eproc
grupo: "Geral do eproc"
plano: free
desde: "1.5.0"
padrao: ligado
---

# Perfil favorito no login

## O que faz

Na tela de escolha de perfil do login, permite marcar um perfil como favorito com uma estrela. Nas
próximas entradas, o eploc seleciona esse perfil sozinho, sem depender do perfil padrão do eproc,
que costuma se desconfigurar.

## Onde aparece

**eproc**, tela de seleção de perfil no login. O favorito também pode ser trocado nas configurações
do eploc, no card do recurso ("Escolher perfil favorito").

## Passo a passo

1. Entre no eproc. Na lista de perfis, passe o mouse sobre o perfil desejado.
2. Clique na estrela ("Favoritar e entrar"). O perfil vira favorito e você já entra nele.
3. Nas próximas vezes, o eploc clica nesse perfil sozinho.
4. Para deixar de entrar automaticamente, clique na estrela do perfil favorito na tela de login, ou
   use **Escolher perfil favorito** nas configurações do eploc.

Depois de entrar, você troca de perfil pelo seletor do menu superior, como sempre.

## Configurações e opções

Não há opções além de ligar e desligar. O favorito é escolhido na tela de login ou em **Escolher
perfil favorito**.

## Limitações e problemas conhecidos

- O favorito é guardado por endereço do eproc e por usuário: 1º e 2º grau, ou usuários diferentes no
  mesmo navegador, têm favoritos separados.
- Com um favorito definido, a lista de perfis passa direto, sem contagem regressiva. Para usar outro
  perfil, troque pelo seletor do menu superior depois de entrar.

<!-- DEMO: eproc-perfil-favorito-login -->
