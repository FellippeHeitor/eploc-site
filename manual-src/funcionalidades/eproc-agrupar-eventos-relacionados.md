---
title: "Agrupar eventos relacionados"
id: eproc-agrupar-eventos-relacionados
plataforma: eproc
grupo: "Eventos"
plano: free
desde: "1.1.0"
padrao: ligado
---

# Agrupar eventos relacionados

## O que faz

Deixa a tabela de eventos mais curta e legível, reunindo eventos que formam uma coisa só: intimações
expedidas em lote, eventos que apontam para o mesmo documento e eventos que só confirmam ou
complementam o anterior. Também sinaliza quando o mesmo documento aparece em eventos distantes.

## Onde aparece

**eproc**, página do processo, tabela de eventos.

## Passo a passo

Não é preciso fazer nada: a tabela já aparece agrupada. O que muda:

- **Eventos repetidos de um mesmo comando** (por exemplo, uma intimação para cada destinatário)
  viram uma linha-resumo expansível, com o intervalo de eventos, a data e o usuário. Clique na linha
  para ver cada evento, com o destinatário e o prazo de cada um.
- **Eventos seguidos com o mesmo documento** viram uma linha só, com as descrições em lista e um
  único link para o documento.
- **Eventos que se confirmam ou se complementam** (por exemplo, "Expedida/certificada a intimação
  eletrônica" e "Confirmada a intimação eletrônica", expedição e recebimento de mandado, publicação
  no DJEN, remessa e recebimento de autos, ou uma decisão "Complementar ao evento nº X") são
  recolhidos juntos na mesma linha-resumo.
- **Mesmo documento em eventos distantes**: um pequeno ícone colorido aparece ao lado de cada
  ocorrência. Passe o mouse para destacar, nessa cor, todas as linhas onde o documento aparece.
  Clique para ir até a outra ocorrência.
- **Processos migrados do PJe**: eventos do mesmo ID no PJe lançados no mesmo instante são reunidos
  (veja [Ajustar eventos de processos migrados do PJe](./eproc-ajustar-eventos-migrados-pje)), e as
  "certidões de erro de migração" em sequência ficam recolhidas numa linha cinza.

## Configurações e opções

Não há opções neste card. As opções de mesclagem de eventos migrados do PJe ficam em
[Ajustar eventos de processos migrados do PJe (TJMG)](./eproc-ajustar-eventos-migrados-pje).

## Limitações e problemas conhecidos

- Nenhum evento é apagado: as linhas originais só ficam ocultas e reaparecem ao expandir o grupo ou
  ao desligar o recurso.
- Os pares de eventos reconhecidos são uma lista fixa. Pares que não estão nela continuam
  separados.
- Eventos de "mesmo documento à distância" não são movidos, só sinalizados.

<!-- DEMO: eproc-agrupar-eventos-relacionados -->
