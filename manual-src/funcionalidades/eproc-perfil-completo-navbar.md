---
title: "Ajustar largura do seletor de perfil na barra superior"
id: eproc-perfil-completo-navbar
plataforma: eproc
grupo: "Menu superior"
plano: free
desde: "1.4.0"
padrao: ligado
---

# Ajustar largura do seletor de perfil na barra superior

## O que faz

O seletor de perfil/unidade do menu superior do eproc tem largura fixa e corta nomes de perfil
longos. Este recurso ajusta a largura do seletor ao nome do perfil selecionado, para que ele apareça
inteiro.

## Onde aparece

**eproc**, menu superior, em todas as telas.

## Passo a passo

1. Abra qualquer tela do eproc. O seletor de perfil já aparece na largura do nome selecionado.
2. Ao trocar de perfil, a largura se ajusta ao novo nome.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Simplificar nomes de perfil (remove a palavra "USUÁRIO" quando repetida) | desligada | Encurta nomes como "EEP V.UNICA/USUÁRIO EPROC" para "EEP V.UNICA/EPROC", no seletor e na lista de perfis. |

## Observações

- A largura mínima é de 170 pixels, a mesma do eproc.
- Quando falta espaço no menu (janela estreita), o seletor encolhe como os demais itens e o nome
  pode voltar a ser cortado.

<!-- DEMO: eproc-perfil-completo-navbar -->
