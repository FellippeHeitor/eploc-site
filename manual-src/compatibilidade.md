---
title: "Compatibilidade"
---

# Compatibilidade

## Navegadores

| Navegador | Situação |
|---|---|
| Google Chrome | Compatível (instalação pela Chrome Web Store). |
| Microsoft Edge | Compatível (instalação pela mesma página da Chrome Web Store). |
| Outros navegadores (Firefox, Safari) | Não compatíveis. |

Mantenha o navegador atualizado. O eploc é uma extensão Manifest V3, o formato atual de extensões do
Chrome e do Edge.

O backup no Google Drive funciona nos dois navegadores, porque a conexão com a conta Google é feita
por uma janela de autorização própria, e não pela conta conectada ao navegador.

## Sistemas e endereços atendidos

### eproc

| Tribunal | Endereços |
|---|---|
| TRF2 | `eproc.trf2.jus.br`, `eproc.jfrj.jus.br`, `eproc.jfes.jus.br` |
| TRF4 | `eproc.trf4.jus.br`, `eproc.jfrs.jus.br`, `eproc.jfsc.jus.br`, `eproc.jfpr.jus.br` |
| TRF6 | `eproc1g.trf6.jus.br`, `eproc2g.trf6.jus.br` |
| TJRS | `eproc1g.tjrs.jus.br`, `eproc2g.tjrs.jus.br` |
| TJSC | `eproc1g.tjsc.jus.br`, `eproc2g.tjsc.jus.br` |
| TJTO | `eproc1.tjto.jus.br`, `eproc2.tjto.jus.br` |
| TJRJ | `eproc1g.tjrj.jus.br`, `eproc2g.tjrj.jus.br` |
| TJSP | `eproc1g.tjsp.jus.br`, `eproc2g.tjsp.jus.br` |
| TJMG | `eproc1g.tjmg.jus.br`, `eproc2g.tjmg.jus.br` |

Outros tribunais que adotam o eproc ainda não estão habilitados: cada novo endereço faz o navegador
pedir as permissões de novo, então eles são incluídos conforme a procura. Se você usa o eproc de um
tribunal que não está na lista, fale com o desenvolvedor (veja [Contato](./contato)).

Alguns tribunais personalizam o eproc (telas, campos, nomes de rotinas). Nesses casos, uma
funcionalidade do eploc pode se comportar de forma diferente da descrita neste manual. Se alguma
não funcionar como esperado no seu tribunal, avise pelo [Contato](./contato), informando o tribunal,
a tela e o que aconteceu.

### Outros sistemas

| Sistema | Endereço | Funcionalidades |
|---|---|---|
| SEI | `*.jus.br/sei/` (tela de controle de processos) | [SEI mais descritivo e horizontal](./funcionalidades/sei-mais-descritivo-horizontal) |
| RUPE (TJMG) | `rupe.tjmg.jus.br` | [Preenchimento automático de CPHA](./funcionalidades/rupe-cpha-preenchimento), [Espelho dos Critérios de Pesquisa de Certidão](./funcionalidades/rupe-espelho-painel-pesquisa) |
| Consulta de advogados dativos (TJMG) | `consulta-dativos.tjmg.jus.br` | [Melhorar consulta de advogados dativos](./funcionalidades/tjmg-dativos-pesquisa-paginacao) |
| Meu Gabinete (TJMG) | `meugabinete.tjmg.jus.br` e o quadro de login `sso.cloud.pje.jus.br` | [Corrigir a área visível para login no Meu Gabinete](./funcionalidades/tjmg-meu-gabinete-altura-login) |
| PJe Mídias | `midias.pje.jus.br` (só consulta) | [Atalho PJe Mídias](./funcionalidades/eproc-midias-link) |

## Funcionalidades específicas do TJMG

Algumas funcionalidades do eproc só fazem sentido no TJMG e trazem o selo **eproc · TJMG**: as de
processos migrados do PJe (grupo Migração PJe) e o
[Símbolo do TJMG no menu superior](./funcionalidades/eproc-logo-tjmg-navbar). Nos demais tribunais
elas simplesmente não encontram o que procuram e não alteram nada.

## Quando o sistema muda

O eproc, o SEI e o RUPE são atualizados pelos tribunais sem aviso. Uma mudança de tela pode fazer
uma funcionalidade deixar de funcionar até o eploc ser ajustado. Nesse caso, desligue a
funcionalidade no [popup](./geral/popup) e avise pelo [Contato](./contato).

Antes de abrir um chamado no suporte do tribunal sobre uma falha no sistema, desative o eploc e
tente de novo. Veja
[O sistema do tribunal apresentou um erro](./perguntas-frequentes#o-sistema-do-tribunal-apresentou-um-erro-devo-abrir-um-chamado).
