---
title: "Mostrar nível de sigilo dos documentos"
id: eproc-nivel-sigilo-documentos
plataforma: eproc
grupo: "Eventos"
plano: free
desde: "1.10.0"
padrao: ligado
---

# Mostrar nível de sigilo dos documentos

## O que faz

O eproc só informa o sigilo de um documento no balão que aparece ao passar o mouse sobre ele. Este
recurso põe, ao lado de cada documento sigiloso da tabela de eventos, um pequeno selo com o nível de
sigilo, para você identificar de relance os documentos que as partes não veem.

## Onde aparece

**eproc**, página do processo, tabela de eventos.

## Passo a passo

Abra um processo:

1. Os documentos sigilosos ganham, logo depois do nome, um selo com o ícone de olho riscado e o
   número do nível (por exemplo, **1** para "Segredo de Justiça").
2. Passe o mouse sobre o selo para ver o nome completo do nível.
3. Para trocar o nível, clique no selo e escolha **Sem sigilo**, **Segredo de justiça** ou
   **Sigiloso interno**. O eploc faz a alteração em segundo plano, confere o nível gravado, e o selo
   fica verde com o novo nível. Para os demais níveis, use **Abrir a tela de sigilo deste
   documento**, no mesmo menu.

A cor do selo acompanha o nível: azul para o nível 1, laranja para os níveis 2 e 3 e vermelho para
os níveis 4 e 5.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Mostrar o selo a partir do | Nível 1 | Esconde os selos dos níveis mais baixos. Escolha "Nível 2", por exemplo, para não marcar os documentos em segredo de justiça. |

## Observações

- Documentos sem sigilo (nível 0) não ganham selo.
- O nível é lido do próprio balão do eproc, sem consultas extras ao sistema.
- Se a troca em segundo plano não der certo, a tela de sigilo do eproc é aberta para você
  concluir.
- A troca rápida só oferece os níveis 0 a 2, por segurança.
- Com o recurso "Apontar documentos com sigilo nível 3 em processos migrados (TJMG)" ligado, os
  documentos que já têm a marca dele não recebem um segundo selo.

<!-- DEMO: eproc-nivel-sigilo-documentos -->
