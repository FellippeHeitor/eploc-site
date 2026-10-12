---
title: "Apontar documentos com sigilo nível 3 em processos migrados (TJMG)"
id: eproc-sigilo-nivel3-migrados
plataforma: eproc
tribunal: TJMG
grupo: "Migração PJe (TJMG)"
plano: free
desde: "1.8.0"
padrao: ligado
---

# Apontar documentos com sigilo nível 3 em processos migrados (TJMG)

## O que faz

A migração do PJe aplica o sigilo "Interno Nível 3" a todo documento que era sigiloso lá. Com esse
nível, as partes não veem a peça, e isso costuma passar despercebido. Este recurso aponta esses
documentos: uma faixa acima da tabela de eventos lista onde estão, e cada documento ganha uma marca.

## Onde aparece

**eproc do TJMG**, página do processo, em processos migrados do PJe: faixa acima da tabela de
eventos e marca ao lado de cada documento afetado.

## Passo a passo

1. Abra um processo migrado. Se houver documentos importados com sigilo nível 3, aparece a faixa
   "N documentos com sigilo nível 3 em eventos importados do PJe", com os eventos clicáveis.
2. Clique num evento da faixa para ir até ele.
3. Use o atalho da faixa para abrir a alteração de sigilo de vários documentos de uma vez (veja
   também [Alterar sigilo de vários documentos de uma vez](./eproc-sigilo-documentos-lote)).
4. Ao lado de cada documento afetado aparece uma marca com o número 3. Clique nela para:
   - **Confirmar nível 3 (não avisar mais)**, se o sigilo estiver correto;
   - **Alterar o sigilo deste documento**.

## Configurações e opções

Não há opções além de ligar e desligar.

## Observações

- Só são verificados os documentos dos eventos importados (anteriores ao evento de migração ou com
  "ID no PJe").
- O nível de sigilo é lido do balão de informações do documento. Documentos sem essa informação não
  são apontados.

<!-- DEMO: eproc-sigilo-nivel3-migrados -->
