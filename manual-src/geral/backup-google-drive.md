---
title: "Backup no Google Drive"
---

# Backup no Google Drive

Guarda cópias das suas configurações e dados do eploc na sua própria conta Google e, se você quiser,
mantém vários computadores sincronizados. É **opcional** e vem **desligado**.

## Como funciona

- Os backups ficam na **pasta de dados do aplicativo** do seu Google Drive (escopo `drive.appdata`):
  uma área oculta, reservada ao eploc, que não aparece entre seus arquivos. O eploc não tem acesso
  aos demais arquivos do seu Drive.
- Cada envio cria um arquivo novo, com data e hora no nome. Nenhum backup é sobrescrito. Ficam os
  **20 mais recentes**; os mais antigos são apagados automaticamente.
- O conteúdo é o mesmo do [backup em arquivo](./backup-arquivo).
- Os dados vão direto do seu navegador para a sua conta Google. Não passam por servidor do
  desenvolvedor.

## Conectar

1. Configurações → aba **Ajustes gerais e Backup** → card **Backup no Google Drive**.
2. Ligue **Habilitar backup no Google Drive**.
3. Na janela do Google, escolha a conta e autorize o aplicativo **eploc**.
4. Se a conta já tiver backups do eploc, o eploc pergunta se você quer revisá-los e restaurar algum
   agora (**Revisar backup** ou **Agora não**).

A autorização só é pedida na primeira conexão e quando você desconecta e conecta de novo.

## Usar

| Botão ou opção | O que faz |
|---|---|
| Fazer backup agora | Envia um backup na hora. |
| Restaurar o backup mais recente | Abre a revisão do backup mais recente para escolher o que restaurar. |
| Restaurar uma versão mais antiga | Lista os backups da conta. Cada um pode ser restaurado, baixado como arquivo ou excluído. |
| Procurar dados ausentes em backups antigos | Procura em backups antigos itens que sumiram do backup atual (por exemplo, um modelo apagado sem querer) e permite importá-los um a um. |
| Manter sincronizado automaticamente entre dispositivos | Envia as mudanças cerca de 1 minuto depois de acontecerem e verifica novidades dos outros computadores a cada 15 minutos, mais ou menos. |

## Sincronização entre computadores

Com a sincronização automática ligada em dois ou mais computadores (com a mesma conta Google
conectada):

- os dados (contatos de e-mail, modelos de mensagem e modelo padrão, destaques, processos
  monitorados, pastas de preferências) são **somados**: o que é criado num computador aparece nos
  outros, e nada é apagado por causa da sincronização;
- edições do mesmo item seguem a mais recente;
- os interruptores e opções das funcionalidades **não** são sincronizados, porque podem ser escolhas
  diferentes em cada computador. Para levá-los, use **Restaurar o backup mais recente**.

## Desconectar

Desligue **Habilitar backup no Google Drive**. Os backups já enviados continuam na sua conta. Para
apagá-los, exclua-os antes em **Restaurar uma versão mais antiga**. No próprio Google Drive, em
Configurações → Gerenciar apps, também é possível excluir os dados ocultos do aplicativo eploc.

## Limitações e problemas conhecidos

- Se a autorização expirar, o ícone do eploc mostra um "!" laranja e o popup oferece **Reconectar**.
  Uma falha de rede passageira não desconecta a conta.
- O valor anterior cifrado do Monitor de Relatórios nunca vai para o Drive.
