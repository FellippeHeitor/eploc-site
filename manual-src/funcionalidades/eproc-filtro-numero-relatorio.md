---
title: "Filtro por número no Relatório Geral"
id: eproc-filtro-numero-relatorio
plataforma: eproc
grupo: "Relatórios"
plano: free
desde: "1.10.0"
padrao: ligado
---

# Filtro por número no Relatório Geral

## O que faz

Mostra no Relatório Geral só os processos com certos dígitos no número, por exemplo os que começam
com 5 e terminam em 0, 1 ou 2. É útil para quem divide o acervo pelos dígitos do número.

## Onde aparece

**eproc**, Relatório Geral de Processos, na barra acima da tabela de resultados: o selo
**Filtrar nº**, logo depois do título "Processos". Com o filtro ativo, o selo fica azul e mostra o
filtro e quantos processos da página aparecem, por exemplo "5NNNNN[012] · 27 de 100".

## Passo a passo

1. Gere o Relatório Geral normalmente e clique em **Filtrar nº**.
2. O painel mostra o número do processo como uma fileira de caixas, agrupadas em Número,
   Verificador, Ano, J, TR e Origem. Clique na caixa da posição que quer filtrar, por exemplo o
   último dígito do número, antes do traço.
3. Abaixo, marque os dígitos aceitos nessa posição. Os botões **Pares** e **Ímpares** marcam esses
   grupos de uma vez, e **Qualquer** desmarca tudo. A caixa passa a mostrar o que aceita, como
   **[0-2]**. Onde nada estiver marcado, qualquer dígito serve.
4. O ano, a justiça (J), o tribunal (TR) e a origem (comarca, os 4 últimos dígitos do número) têm
   uma caixa cada. Clique nela e digite um ou mais valores separados por vírgula, com intervalos
   usando traço: por exemplo **2022-2025, 2019** para o ano ou **0242, 0133** para duas comarcas.
   Para o ano, há também atalhos com os últimos anos, que marcam e desmarcam cada um.
5. O rodapé mostra quantos processos da página passam no filtro. Clique em **Aplicar**.
6. Para ver tudo de novo, clique no "x" do selo, ou em **Limpar** dentro do painel e depois
   em **Aplicar**.

Pelo teclado: com uma caixa selecionada, as teclas de 0 a 9 marcam os dígitos, as setas trocam de
posição e Esc fecha o painel sem aplicar.

### Combinar critérios diferentes

Quando a divisão depende do tipo de processo, use **+ Outra regra**. O processo aparece se casar com
qualquer uma das regras. Exemplo (números fictícios):

- Regra 1: 1º dígito **5** e 7º dígito (o último do número) **0, 1 e 2** (como 5001231-10.2024…);
- Regra 2: 1º dígito **0** e 6º dígito (o penúltimo) **0, 1 e 2** (como 0012315-10.2005…).

### Editar a máscara manualmente

Quem preferir pode marcar **Editar a máscara manualmente** e digitar o filtro direto: **N** aceita
qualquer dígito e **[012]** aceita um dos dígitos entre colchetes, comparando com o começo do número.
No ano, na justiça, no tribunal e na origem, uma lista entre chaves aceita qualquer um dos valores,
como `NNNNNNN-NN.{2022-2025}.N.NN.{0242,0133}`. Regras vão separadas por vírgula. O exemplo acima
fica `5NNNNN[012], 0NNNN[012]N`.

## Configurações e opções

Não há opções além de ligar e desligar. O filtro fica guardado e volta na próxima vez que você abrir
o relatório.

## Observações

- O eproc carrega o relatório uma página por vez, e o filtro só alcança a página carregada. Se o
  relatório estiver mostrando poucos processos por página, o painel avisa e oferece o botão
  **Mostrar 100 por página**, para o filtro alcançar mais processos de uma vez.
- O filtro é guardado separadamente para cada perfil/unidade do eproc.
- Os processos ocultos pelo filtro nunca ficam marcados: se você usar o "marcar todos" do cabeçalho
  da tabela, só os processos visíveis continuam marcados. Assim, as ações em bloco do eproc e as do
  eploc (como "Monitorar todos os processos desta página") só agem sobre o que aparece.

<!-- DEMO: eproc-filtro-numero-relatorio -->
