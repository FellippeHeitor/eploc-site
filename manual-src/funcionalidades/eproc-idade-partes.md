---
title: "Idade das partes"
id: eproc-idade-partes
plataforma: eproc
grupo: "Painel do processo"
plano: free
desde: "1.10.0"
padrao: desligado
---

# Idade das partes

## O que faz

O eproc mostra a idade ao lado do nome de autores e réus, mas não em outros polos, como
Criança/Adolescente. Este recurso mostra a idade dessas pessoas logo após o nome, sem que você
precise clicar em cada uma para consultar a data de nascimento.

## Onde aparece

**eproc**, tela do processo, tabela "Partes e Representantes": ao lado do nome de cada pessoa física
que aparece sem idade.

## Passo a passo

1. Ligue o recurso nas configurações do eploc (ele vem desligado).
2. Abra um processo. Enquanto o eploc consulta a data de nascimento, um pequeno indicador de
   carregamento aparece ao lado do nome; em seguida ele dá lugar à idade, por exemplo "(6 anos)",
   com o logo do eploc à frente para indicar que a informação vem do eploc.
3. Passe o mouse sobre a idade para ver a data de nascimento.

## Configurações e opções

- **Destacar quem já tem 18 anos ou mais**: a idade de quem já atingiu a maioridade aparece
  realçada. Ligado por padrão.
- **Avisar quando faltarem até quantos dias para os 18 anos**: ao lado da idade aparece, por
  exemplo, "faz 18 em 12 dias". O padrão é 90 dias; use 0 para desligar o aviso.

## Observações

- A consulta é a mesma que o eproc faz quando você clica no nome da parte, feita em segundo plano,
  até três por vez. Em processos com muitas partes, as idades podem levar alguns segundos para
  aparecer todas.
- As partes que o eproc já mostra com idade não são consultadas de novo.
- As datas de nascimento não são guardadas pelo eploc: valem só enquanto a página do processo está
  aberta.

<!-- DEMO: eproc-idade-partes -->
