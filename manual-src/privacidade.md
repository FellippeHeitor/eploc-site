---
title: "Privacidade e tratamento de dados"
---

# Privacidade e tratamento de dados

Esta página explica, em linguagem direta, o que o eploc faz com os dados que passam pela sua tela. O
documento oficial é a [Política de privacidade do eploc](https://eploc.com.br/privacidade); em caso
de dúvida, vale o que está nela.

## Resumo

- O eploc roda **inteiramente no seu navegador**. O desenvolvedor não opera servidor e não recebe
  nenhum dado de processo, de parte, de usuário ou de configuração.
- Não há publicidade, rastreamento nem venda de dados.
- O único envio de dados para fora do navegador que depende de você é o
  [backup no Google Drive](./geral/backup-google-drive), que é **opcional** e vem **desligado**.

## O que o eploc lê

Para funcionar, o eploc lê o conteúdo das páginas do eproc, SEI, RUPE e TJMG **enquanto você as usa**
(números de processo, nomes de partes, eventos, documentos listados etc.), só para organizar e
exibir essas informações na sua tela. Ele não lê páginas de outros sites.

## O que nunca sai do seu navegador

| Dado | Onde fica |
|---|---|
| Conteúdo das páginas do eproc, SEI, RUPE e TJMG | Só na página aberta. Não é copiado para lugar nenhum. |
| Dados de processos lidos para os [modelos de mensagem](./funcionalidades/eproc-modelos-mensagem) (número, classe, nomes das partes) | Neste computador, por até 24 horas, fora dos backups. |
| Descrições de eventos de processos migrados ([Restaurar descrição](./funcionalidades/eproc-restaurar-descricao-eventos-migrados)) | Neste computador, por 30 minutos, fora dos backups. |
| Nomes de usuários associados a matrículas ([Exibir nomes](./funcionalidades/eproc-exibir-nomes-usuarios)) | Neste computador, fora dos backups. |
| Histórico de alertas ([Alertas menos intrusivos](./funcionalidades/eproc-alertas-inline)) | Neste computador, últimos 7 dias, fora dos backups. |
| Valor anterior das colunas do [Monitor de Relatórios](./funcionalidades/eproc-monitor-relatorio) | Cifrado, só neste computador, nunca em backups. Desligado por padrão: sem essa opção, o eploc guarda só uma impressão digital (hash) dos valores. |
| Configuração de múltiplos monitores | Neste computador. |
| Senhas | O eploc não lê nem guarda senhas. O recurso [Permitir credenciais salvas](./funcionalidades/eproc-login-gerenciador-senhas) só deixa o gerenciador de senhas do próprio navegador funcionar. |

## O que fica guardado nas configurações do navegador

Suas configurações e os dados que você mesmo cria no eploc (contatos de e-mail, modelos de mensagem,
destaques, processos monitorados, pastas, favoritos, perfil favorito do login, rótulos aprendidos do
CPHA etc.) ficam no armazenamento da extensão, no seu perfil do Chrome ou do Edge.

Parte das configurações usa o armazenamento **sincronizado** do navegador. Se a sincronização do
Chrome ou do Edge estiver ligada no seu perfil, o próprio navegador leva essas configurações para os
outros computadores em que você usa a mesma conta do navegador (Google ou Microsoft), como faz com as
configurações de qualquer extensão.

Você pode apagar tudo a qualquer momento removendo a extensão.

## Quando algum dado sai do navegador

| Situação | O que é enviado | Para onde |
|---|---|---|
| [Backup no Google Drive](./geral/backup-google-drive) (opcional, desligado por padrão) | Cópia das configurações e dados do eploc (o mesmo conteúdo do [backup em arquivo](./geral/backup-arquivo)) | Pasta de dados do aplicativo na **sua** conta Google, direto do navegador para o Google. |
| [Atalho PJe Mídias](./funcionalidades/eproc-midias-link) (ligado por padrão) | O número do processo aberto, numa consulta como a que você faria à mão | `midias.pje.jus.br`, usando a sua sessão. |
| Sincronização do navegador (se ligada no seu Chrome/Edge) | Configurações guardadas no armazenamento sincronizado | Conta do navegador (Google ou Microsoft). |
| [Backup em arquivo](./geral/backup-arquivo) | O arquivo que você mesmo baixa | Seu computador. |

## Google Drive e "Uso limitado"

Ao conectar o Google Drive, o eploc pede só o escopo `drive.appdata`: acesso a uma pasta oculta,
reservada ao próprio eploc, separada dos seus arquivos. A tela de consentimento do Google identifica
o aplicativo como **eploc**. O uso dos dados recebidos das APIs do Google segue a Política de dados
do usuário dos serviços de API do Google, incluindo os requisitos de Uso Limitado: os dados servem
apenas ao backup e à sincronização, não são transferidos a terceiros, não são usados para
publicidade, não são lidos por pessoas e não são usados para treinar modelos de inteligência
artificial.

Você pode desconectar a conta nas configurações do eploc e revogar o acesso em
[myaccount.google.com/permissions](https://myaccount.google.com/permissions).

## O aviso "Ler e alterar todos os seus dados"

O eploc só atua nos sites do eproc, SEI, RUPE e páginas do TJMG listados em
[Compatibilidade](./compatibilidade). O navegador resume a lista longa de endereços `jus.br` nessa
frase genérica. Ela pode reaparecer quando uma atualização inclui um novo tribunal, pedindo que você
reative a extensão.

## Seus direitos (LGPD)

Como o eploc não envia seus dados ao desenvolvedor, você exerce diretamente, nas configurações da
extensão e na sua conta Google, o acesso, a correção e a eliminação dos seus dados. Pedidos e dúvidas
sobre privacidade: veja [Contato](./contato).
