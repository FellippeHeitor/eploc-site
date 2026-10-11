---
title: "Espelho dos Critérios de Pesquisa de Certidão"
id: rupe-espelho-painel-pesquisa
plataforma: RUPE
grupo: "RUPE"
plano: free
desde: "1.0.2"
padrao: ligado
---

# Espelho dos Critérios de Pesquisa de Certidão

## O que faz

Na emissão de certidão positiva/negativa do RUPE, os critérios da pesquisa somem da vista quando os
resultados aparecem. Este recurso mantém os critérios num painel flutuante e destaca, na tabela de
pessoas encontradas, o que coincide com eles, inclusive nomes com pequenas variações de grafia.

## Onde aparece

**RUPE** (`rupe.tjmg.jus.br`), tela de emissão de certidão positiva/negativa.

## Passo a passo

1. Faça a pesquisa de certidão normalmente.
2. O painel "Critérios de pesquisa" mostra o que foi pesquisado. Arraste-o pelo título para onde
   preferir. O botão "–" recolhe o painel num ícone, que pode ser arrastado ou clicado para expandir.
3. Na aba "Pessoas", os valores que coincidem com os critérios ficam destacados nos dois lados, com
   uma cor para cada critério. Passe o mouse sobre um critério para destacar só ele.
4. Nomes parecidos (sem acento, com "da"/"dos", Luiz/Luis, pequenos erros) também coincidem, com o
   trecho diferente em vermelho. Um selo indica se a coincidência é perfeita ou parcial.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Destacar equivalências entre o painel e a tabela de pessoas encontradas | ligada | Liga os destaques coloridos. |
| Marcar automaticamente o registro que é sem dúvida a pessoa pesquisada (mesmo CPF/CNPJ) | desligada | Marca sozinho o registro com o mesmo CPF/CNPJ pesquisado. |

## Limitações e problemas conhecidos

- A coincidência aproximada de nomes é um auxílio. A decisão sobre a certidão continua sendo sua:
  confira sempre os dados.
- A marcação automática só acontece quando o CPF/CNPJ é exatamente o pesquisado.

<!-- DEMO: rupe-espelho-painel-pesquisa -->
