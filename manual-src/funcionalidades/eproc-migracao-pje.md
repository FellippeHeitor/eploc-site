---
title: "Migração de processos PJe → eproc (TJMG)"
id: eproc-migracao-pje
plataforma: eproc
tribunal: TJMG
grupo: "Migração PJe (TJMG)"
plano: free
desde: "1.2.0"
padrao: ligado
tituloBusca: "Tela de importação do PJe no eproc (TJMG) | eploc"
description: "Recurso do eploc para a tela de importação de processos do PJe no eproc do TJMG: regras recolhidas, gráfico de progresso e o processo aberto ao concluir."
---

# Migração de processos PJe → eproc (TJMG)

::: tip Guia completo da migração PJe → eproc
Esta página trata só dos atalhos do eploc na tela de importação. O que muda nos processos migrados
(sigilo nível 3, eventos fora de ordem, rótulos "PETIÇÃO") e o passo a passo estão no
**[Guia completo da migração PJe → eproc](https://eploc.com.br/migracao-pje)**.
:::

## O que faz

Melhora a tela de importação de processos do PJe para o eproc do TJMG: resume o longo texto das
regras de migração num menu expansível, mostra um gráfico com o progresso das migrações e, ao migrar
um único processo, oferece abri-lo no eproc assim que a migração terminar.

## Onde aparece

**eproc do TJMG**, tela de importação de processos do PJe.

## Passo a passo

1. Abra a tela de importação de processos do PJe.
2. As regras de migração aparecem recolhidas num menu. Clique para expandi-las.
3. O gráfico mostra a evolução da quantidade de processos já migrados.
4. Ao informar um único processo, aparece ao lado do botão de importar a caixa "Ao concluir, abrir o
   processo no eproc". Com ela marcada, o processo é aberto pela pesquisa rápida assim que a
   migração termina, inclusive quando o eproc responde "Processo já migrado".

A escolha da caixa fica salva para as próximas migrações.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Resumir regras de migração em menu expansível | ligada | Recolhe o texto das regras. |
| Exibir gráfico de progresso da migração | ligada | Mostra o gráfico. |
| Exibir a opção "Ao concluir, abrir o processo no eproc" ao migrar um único processo | ligada | Mostra a caixa ao lado do botão de importar. |
| Deixar a opção marcada (acompanha o checkbox da tela de importação) | ligada | Mesmo valor da caixa na tela. Só aparece com a opção anterior ligada. |

## Observações

- O gráfico é montado com o que o eploc registrou nas suas visitas a essa tela, neste navegador.
- A abertura automática só é oferecida quando o lote tem um único processo.

<!-- DEMO: eproc-migracao-pje -->
