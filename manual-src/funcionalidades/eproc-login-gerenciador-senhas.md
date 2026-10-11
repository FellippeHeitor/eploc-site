---
title: "Permitir credenciais salvas na tela de login"
id: eproc-login-gerenciador-senhas
plataforma: eproc
grupo: "Geral do eproc"
plano: free
desde: "1.0.7"
padrao: ligado
---

# Permitir credenciais salvas na tela de login

## O que faz

O campo de senha da tela de login do eproc é feito de um jeito que impede o navegador de reconhecê-lo,
então o gerenciador de senhas não oferece salvar nem preencher. Este recurso corrige o campo para que
o navegador possa salvar e preencher usuário e senha.

## Onde aparece

**eproc**, tela de login.

## Passo a passo

1. Entre no eproc digitando usuário e senha.
2. O navegador oferece salvar a senha. Aceite, se quiser.
3. Nas próximas vezes, o navegador preenche os campos.

## Configurações e opções

Não há opções além de ligar e desligar.

## Limitações e problemas conhecidos

- A senha é guardada pelo gerenciador de senhas do navegador (Chrome ou Edge), não pelo eploc. O
  eploc não lê nem armazena senhas.
- Só atua no formulário de login. Campos de senha de confirmação (como na assinatura de documentos)
  não são alterados.

<!-- DEMO: eproc-login-gerenciador-senhas -->
