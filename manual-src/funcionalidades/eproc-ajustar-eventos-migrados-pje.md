---
title: "Ajustar eventos de processos migrados do PJe (TJMG)"
id: eproc-ajustar-eventos-migrados-pje
plataforma: eproc
tribunal: TJMG
grupo: "Migração PJe (TJMG)"
plano: free
desde: "1.1.0"
padrao: ligado
---

# Ajustar eventos de processos migrados do PJe (TJMG)

## O que faz

Nos processos migrados do PJe para o eproc, os eventos importados "Juntado(a)" trazem a descrição
real solta, fora do rótulo, o que dificulta a leitura. Este recurso põe a descrição dentro do rótulo,
deixa de fora só o "ID no PJe" e corrige o erro "Publicado Intimação" para "Publicada Intimação".
Também reúne eventos do mesmo ID no PJe que a migração espalhou.

## Onde aparece

**eproc do TJMG**, página do processo, tabela de eventos, em processos com a etiqueta "Processo
Migrado".

## Passo a passo

Não é preciso fazer nada. Em processos migrados:

1. Os eventos "Juntado(a)" importados mostram a descrição real no rótulo, e o "ID no PJe: ..." fica
   ao lado, em texto discreto.
2. Eventos do mesmo ID no PJe lançados no mesmo instante, mas intercalados com outros, aparecem numa
   só linha, com os números listados (por exemplo, "29, 31"). Isso depende de
   [Agrupar eventos relacionados](./eproc-agrupar-eventos-relacionados) estar ligado.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Mesclar eventos com o mesmo ID no PJe lançados no mesmo instante, mesmo que intercalados com outros eventos (requer "Agrupar eventos relacionados") | ligada | Junta numa linha os eventos do mesmo ID no PJe. |
| Deixar um marcador na posição original dos eventos mesclados fora de sequência | ligada | Mostra, no lugar de onde o evento saiu, um marcador que aponta para a linha mesclada. Só aparece com a opção anterior ligada. |

## Observações

- O processo é reconhecido como migrado pela etiqueta "Processo Migrado" do topo da página.
- Só eventos com data e hora idênticas são mesclados. Os demais não mudam de lugar.
- Nenhuma informação é apagada: o conteúdo original volta ao desligar o recurso.

<!-- DEMO: eproc-ajustar-eventos-migrados-pje -->
