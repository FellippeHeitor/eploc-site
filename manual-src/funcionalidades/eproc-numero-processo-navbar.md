---
title: "Número do processo no menu superior"
id: eproc-numero-processo-navbar
plataforma: eproc
grupo: "Menu superior"
plano: free
desde: "1.3.0"
padrao: ligado
---

# Número do processo no menu superior

## O que faz

Repete o número do processo no menu superior, que fica sempre visível enquanto você rola a página.
Um clique no número o copia. Quando o processo tramita em Juizado Especial, aparece ao lado um selo
"JESP"; numa carta precatória, um selo "CP" (os dois juntos numa carta precatória de Juizado).

## Onde aparece

**eproc**, menu superior, na página do processo e no cadastro de minuta.

## Passo a passo

1. Abra um processo. O número aparece no menu superior, ao lado do seletor de perfil.
2. Clique no número para copiá-lo. Um efeito visual confirma a cópia.
3. Ao rolar a página, os avisos do topo ("Segredo de Justiça", "Doença Grave" etc.) passam para o
   menu superior como pequenas etiquetas, ao lado do número ou logo abaixo dele, conforme o espaço.
   Ao voltar ao topo, eles retornam ao lugar original.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Mover os avisos do topo ("Segredo de Justiça", "Doença Grave" etc.) para o menu superior ao rolar a página | ligada | Mantém os avisos à vista durante a rolagem. |
| Ocultar o número do processo no painel fixo do processo, deixando só a classe processual | desligada | Evita mostrar o número duas vezes quando o [Painel fixo do processo](./eproc-painel-fixo-processo) também está ligado. |

## Observações

- O selo "JESP" é deduzido da competência, da classe e do órgão julgador. Varas comuns com Juizado
  Especial anexo não recebem o selo.
- O selo "CP" aparece quando a classe do processo é carta precatória (cível, criminal ou de
  Juizado).
- Em janelas estreitas, o número pode ser cortado. Nesse caso ele volta a aparecer no painel fixo do
  processo, mesmo com a opção de ocultá-lo ligada.
- Se as etiquetas de aviso não couberem no menu, a faixa delas rola para os lados com a roda do
  mouse.

<!-- DEMO: eproc-numero-processo-navbar -->
