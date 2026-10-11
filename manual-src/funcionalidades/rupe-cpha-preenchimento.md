---
title: "Preenchimento automático de CPHA"
id: rupe-cpha-preenchimento
plataforma: RUPE
grupo: "RUPE"
plano: free
desde: "1.2.0"
padrao: ligado
---

# Preenchimento automático de CPHA

## O que faz

No cadastro de CPHA do RUPE, preenche o formulário a partir de um texto com os dados do advogado
(nome, CPF, OAB, e-mail, NIT, banco, agência, conta e outros), copiado do processo. Um painel mostra
o que foi reconhecido, para você conferir e corrigir. O eploc aprende com as correções para as
próximas vezes.

## Onde aparece

**RUPE** (`rupe.tjmg.jus.br`), formulário de cadastro de CPHA. Os rótulos aprendidos ficam nas
configurações do eploc, no card do recurso ("Gerenciar rótulos aprendidos").

## Passo a passo

1. No processo, copie de uma vez o trecho com os dados informados pelo advogado.
2. Volte ao cadastro de CPHA e cole (Ctrl+V) em qualquer campo do formulário, ou clique em
   **Preencher com dados copiados**.
3. Os campos reconhecidos são preenchidos, e o painel "Dados detectados" mostra o texto colado com
   cada dado reconhecido destacado como uma etiqueta. Passe o mouse sobre uma etiqueta para ver em
   que campo ela entrou.
4. Para corrigir, clique numa etiqueta ou selecione um trecho do texto e escolha, no menu "Este dado
   é…", o campo certo. Para desfazer o reconhecimento de um trecho, use "Desfazer — volta a ser texto
   simples".
5. Quando você indica o campo de um dado, o eploc aprende o rótulo que vinha antes dele no texto (por
   exemplo, "Nº OAB") e, nas próximas colagens, leva o dado direto para esse campo.
6. Confira o formulário e salve como de costume. O painel fecha sozinho quando o cadastro é fechado.

Os campos de seleção do formulário (banco, juiz etc.) também ganham busca por digitação.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Lembrar o último juiz selecionado e pré-selecioná-lo automaticamente | ligada | O juiz escolhido no último cadastro já vem selecionado. |

No card, **Gerenciar rótulos aprendidos** lista os rótulos que o eploc aprendeu e permite apagá-los.

## Limitações e problemas conhecidos

- O reconhecimento depende de como o advogado escreveu os dados. Sempre confira o formulário antes
  de salvar.
- O botão **Preencher com dados copiados** lê a área de transferência. Se o navegador não permitir
  essa leitura, o eploc avisa: nesse caso, cole o texto (Ctrl+V) em qualquer campo do formulário.

<!-- DEMO: rupe-cpha-preenchimento -->
