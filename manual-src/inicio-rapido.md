---
title: "Início rápido"
---

# Início rápido

Em poucos minutos: instalar, entender as permissões, ativar a extensão e, se quiser, ligar o backup
no Google Drive.

## 1. Instalar

O eploc é distribuído pela Chrome Web Store e funciona no **Google Chrome** e no **Microsoft Edge**.

1. Abra a [página do eploc na Chrome Web Store](https://chromewebstore.google.com/detail/eploc/fkpkkenjcfpplmhlfdbabhcdhmhiojhj).
2. Clique no botão de instalar da página. No Edge, se aparecer o aviso sobre extensões de outras lojas,
   permita-as e clique de novo no botão de instalar.
3. Confirme a instalação na janela de permissões do navegador.
4. Fixe o ícone do eploc na barra do navegador (ícone de quebra-cabeça → alfinete), para ter o
   [popup](./geral/popup) sempre à mão.

## 2. Permissões solicitadas e para que servem

Ao instalar, o navegador mostra um resumo das permissões. O aviso mais chamativo costuma ser o de
**ler e alterar dados em sites**: o eploc só atua nos endereços abaixo, e o navegador resume essa
lista longa de endereços `jus.br` numa frase genérica, que pode reaparecer quando uma atualização
inclui um novo tribunal.

| Permissão | Para que o eploc usa |
|---|---|
| Acesso aos sites do eproc, SEI, RUPE e TJMG | Mostrar as melhorias nessas páginas. Endereços atendidos: eproc da JFRJ, JFES, TRF2, TRF4, JFRS, JFSC, JFPR, TRF6 (1º e 2º grau), TJRS, TJSC, TJTO, TJRJ, TJSP e TJMG (1º e 2º grau); `rupe.tjmg.jus.br`; o SEI em endereços `jus.br`; a consulta de dativos e o Meu Gabinete do TJMG (com o quadro de login `sso.cloud.pje.jus.br`). Veja [Compatibilidade](./compatibilidade). |
| Acesso a `midias.pje.jus.br` | Conferir se há gravações de audiência para o [Atalho PJe Mídias](./funcionalidades/eproc-midias-link). |
| Armazenamento (`storage`) | Guardar suas configurações e dados (contatos, modelos, destaques etc.) no próprio navegador. |
| Leitura da área de transferência (`clipboardRead`) | O botão "Preencher com dados copiados" do [Preenchimento automático de CPHA](./funcionalidades/rupe-cpha-preenchimento). |
| Aba ativa (`activeTab`) | O popup saber em que página você está, para listar as funcionalidades que valem nela. |
| Identidade (`identity`) | Conectar sua conta Google ao [backup no Google Drive](./geral/backup-google-drive), só se você ligar esse recurso. |
| Alarmes (`alarms`) | Agendar a sincronização com o Google Drive. |
| Scripts e documento auxiliar (`scripting`, `offscreen`) | Recursos técnicos do navegador que permitem à extensão realizar tarefas em segundo plano, sem abrir janelas. |

Nenhuma dessas permissões envia dados ao desenvolvedor. Detalhes em
[Privacidade e dados](./privacidade).

## 3. Ativar a extensão

Logo depois da instalação, o eploc vem **desativado** e abre sozinho a página de configurações, na
aba **Sobre**.

1. Leia os termos de uso e isenção de responsabilidade.
2. Marque **Li e aceito os termos de uso e isenção de responsabilidade acima**.
3. Clique em **Confirmar aceite**. A extensão é ativada.

Se você tentar ligar a extensão pelo popup antes de aceitar os termos, a página de configurações é
aberta para o aceite. Quando os termos mudam, o aceite é pedido de novo.

## 4. Primeira configuração

1. Abra um processo no eproc. As funcionalidades que vêm ligadas já aparecem.
2. Clique no ícone do eploc para ver, no [popup](./geral/popup), quais funcionalidades valem naquela
   página, com um interruptor para cada uma.
3. Para ajustar opções, abra a [página de configurações](./geral/configuracoes) (botão
   **Configurações** do popup). As funcionalidades estão organizadas por sistema (eproc, RUPE, SEI,
   TJMG) e por tema.
4. Algumas funcionalidades vêm desligadas e valem a pena conhecer:
   [Alertas menos intrusivos](./funcionalidades/eproc-alertas-inline),
   [Carregar todos os eventos automaticamente](./funcionalidades/eproc-auto-carregar-todos-eventos) e
   [Manter agendamento da minuta automaticamente](./funcionalidades/eproc-auto-manter-agendamento).
5. Use a busca das configurações para achar qualquer ajuste pelo nome. Basta começar a digitar.

## 5. Conectar o Google Drive (opcional)

O backup no Google Drive guarda suas configurações e dados na sua própria conta Google, numa pasta
oculta reservada ao eploc, e permite usá-los em outro computador.

1. Nas configurações, abra a aba **Ajustes gerais e Backup**.
2. No card **Backup no Google Drive**, ligue **Habilitar backup no Google Drive**.
3. Na janela do Google, escolha sua conta. A tela de consentimento identifica o aplicativo como
   **eploc** e pede acesso só aos dados de configuração do próprio aplicativo no seu Drive (escopo
   `drive.appdata`). O eploc não vê nem altera seus outros arquivos.
4. Autorize. Se a conta já tiver backups do eploc, você pode revisá-los e restaurá-los na hora.
5. Para manter vários computadores em sincronia, ligue também **Manter sincronizado automaticamente
   entre dispositivos**.

Passo a passo completo e limitações em [Backup no Google Drive](./geral/backup-google-drive).
