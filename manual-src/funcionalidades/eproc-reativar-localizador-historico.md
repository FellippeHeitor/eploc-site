---
title: "Reativar localizadores pelo histórico"
id: eproc-reativar-localizador-historico
plataforma: eproc
grupo: "Painel do processo"
plano: free
desde: "1.8.0"
padrao: ligado
---

# Reativar localizadores pelo histórico

## O que faz

No histórico de localizadores do processo, os localizadores já excluídos aparecem riscados, sem
forma de devolvê-los ao processo. Este recurso permite selecionar esses localizadores e reativá-los:
o editor de localizadores da capa abre com eles já incluídos, para você conferir e salvar.

## Onde aparece

**eproc**, "Histórico de Localizadores do Processo", aberto a partir da capa do processo.

## Passo a passo

1. Na capa do processo, abra o histórico de localizadores.
2. Clique nos localizadores excluídos (riscados) que quer devolver. Eles ficam marcados, e uma barra
   aparece com o botão **Reativar**. Você também pode clicar com o botão direito num localizador e
   escolher "Reativar".
3. Clique em **Reativar**. O histórico se fecha e o editor de localizadores da capa abre com os
   selecionados incluídos como localizadores **secundários**.
4. Confira e salve no editor. Nada é gravado antes disso.

Para desfazer a seleção antes de reativar, use o botão "Limpar seleção" da barra.

## Configurações e opções

Não há opções além de ligar e desligar.

## Limitações e problemas conhecidos

- Localizadores excluídos que já estão ativos de novo não são clicáveis. Ao passar o mouse sobre
  eles, o localizador ativo de mesmo nome fica destacado.
- Com "Mostrar localizadores de todos os órgãos" ligado no histórico, a reativação não é oferecida,
  porque localizadores de outros órgãos não estão disponíveis no editor.

<!-- DEMO: eproc-reativar-localizador-historico -->
