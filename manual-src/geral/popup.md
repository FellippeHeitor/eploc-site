---
title: "Popup e ícone da barra"
---

# Popup e ícone da barra

O ícone do eploc na barra do navegador mostra o estado da extensão e abre o **popup**, um painel
rápido para ligar e desligar funcionalidades da página em que você está.

## Ícone da barra

| Aparência | Significado |
|---|---|
| Ícone em cinza | A extensão está desativada. |
| Ponto verde | Há funcionalidades do eploc ativas na aba atual. |
| "!" laranja | O backup no Google Drive precisa ser reconectado. |

## O que o popup mostra

- **Extensão ativa / Extensão desativada**: interruptor geral. Desligado, nenhuma funcionalidade
  roda. Para ligar pela primeira vez, é preciso aceitar os termos de uso (o popup abre as
  configurações para isso).
- **Funcionalidades nesta página**: as funcionalidades que valem para a aba atual, cada uma com seu
  interruptor e um link para o card dela nas configurações. Um contador indica quantas estão em
  execução na página agora.
- **Buscar funcionalidades...**: filtra a lista pelo nome ou pela descrição.
- Atalhos para **Contatos salvos**, **Modelos de mensagem**, **Destaques** e **Processos
  monitorados**, que abrem o gerenciador correspondente nas configurações.
- **Configurações**: abre a página de configurações.
- Botão de tema: alterna entre seguir o sistema, claro e escuro.
- Aviso de reconexão, quando a sincronização com o Google Drive para porque a conexão expirou, com o
  botão **Reconectar**.

## Passo a passo

1. Abra uma página do eproc, SEI ou RUPE.
2. Clique no ícone do eploc.
3. Ligue ou desligue funcionalidades pelos interruptores. A mudança vale na hora, sem recarregar a
   página.

Para importar um backup, você também pode arrastar o arquivo JSON para o popup: ele abre a revisão da
importação nas configurações (veja [Backup em arquivo](./backup-arquivo)).

## Limitações e problemas conhecidos

- O popup só lista as funcionalidades que se aplicam à página atual. Para ver todas, use a
  [página de configurações](./configuracoes).
