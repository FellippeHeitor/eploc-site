---
title: "Colapsar e fixar seções do Painel do Servidor"
id: eproc-icones-secoes-colapsadas-painel
plataforma: eproc
grupo: "Geral do eproc"
plano: free
desde: "1.1.4"
padrao: ligado
---

# Colapsar e fixar seções do Painel do Servidor

## O que faz

No Painel do Servidor, as seções recolhidas ocupam espaço. Este recurso transforma cada seção
recolhida num ícone compacto, como um aplicativo, que a reabre com um clique. Também permite
recolher qualquer seção, reordená-las e fixar uma delas com destaque visual.

## Onde aparece

**eproc**, Painel do Servidor e Painel de Plantão.

## Passo a passo

1. Abra o Painel do Servidor.
2. Para recolher uma seção, clique no botão de recolher no título dela ("Recolher seção"). Ela vira
   um ícone.
3. Para reabrir, clique no ícone ("Mostrar ..."). A seção volta ao fim da sequência das seções
   abertas.
4. Para mudar a ordem, use as setas no título ("Mover seção para cima" / "Mover seção para baixo").
5. Para fixar uma seção, clique no alfinete ("Destacar esta seção"). Ela ganha borda e brilho e, ao
   carregar a página, a tela rola até ela. Só uma seção fica fixada por vez.

Tudo é lembrado separadamente para cada perfil/unidade do eproc.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Atualizar dados da seção automaticamente (ao carregar já aberta ou ao reabrir) | ligada | Atualiza o conteúdo da seção quando ela é aberta. |
| Aplicar destaque visual à seção fixada | ligada | Borda na seção fixada. |
| Cor da borda do destaque | #007bff | Só com o destaque ligado. |
| Aplicar efeito glow | ligada | Brilho em volta da seção fixada. Só com o destaque ligado. |
| Cor do glow | #00d9ff | Só com o glow ligado. |
| Centralizar rolagem até a seção fixada ao carregar a página | ligada | Leva a tela até a seção fixada. |

## Observações

- Sem nenhuma seção fixada ainda, o Relatório Geral é fixado por padrão.
- Para as seções que o eproc já permite recolher, o estado aberto/recolhido continua sendo guardado
  pelo próprio eproc ("Aberto ao acessar painel").

<!-- DEMO: eproc-icones-secoes-colapsadas-painel -->
