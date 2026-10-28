---
title: "Backup em arquivo"
---

# Backup em arquivo

Salva todas as configurações e dados do eploc num arquivo JSON, para guardar, levar para outro
computador ou restaurar depois. Também permite exportar só algumas bases de dados para compartilhar
com colegas.

## Onde fica

Configurações → aba **Ajustes gerais e Backup** → cards **Importar e exportar** e **Exportar bases de
dados**.

## Exportar tudo

1. Clique em **Exportar JSON**.
2. Guarde o arquivo baixado.

O arquivo inclui:

- os interruptores e opções de todas as funcionalidades e os ajustes gerais;
- os dados salvos: histórico de e-mails, modelos de mensagem, destaques de trecho e paleta de cores,
  processos monitorados e colunas excluídas do monitoramento, pastas das listas de preferências, leis
  de regência das RPVs por devedor;
- preferências lembradas pelas funcionalidades (ações favoritas e ocultas, perfil favorito do login,
  seções do Painel do Servidor, preferências e colunas fixadas, avisos rotineiros e ocultos, dicas já
  fechadas, opções favoritas dos campos de seleção, rótulos aprendidos do CPHA etc.).

## Exportar só algumas bases

1. No card **Exportar bases de dados**, marque o que quer exportar: **E-mails**, **Modelos de
   mensagem**, **Destaques**, **Processos monitorados**, **Pastas das listas de preferências do
   processo** e/ou **Leis de regência das RPVs por devedor**.
2. Clique em **Exportar selecionadas**.

Útil para passar seus modelos ou contatos a outra pessoa sem levar junto as suas preferências.

## Importar

1. Clique em **Importar JSON** e escolha o arquivo. Também é possível arrastar o arquivo para
   qualquer lugar da página de configurações ou para o [popup](./popup).
2. Na revisão da importação, escolha o que importar. Para cada base, você pode **mesclar** com o que
   já existe (padrão, nunca apaga nada) ou **substituir** pelo conteúdo do arquivo.
3. Quando um item existe dos dois lados com conteúdo diferente, escolha entre **Manter o que está
   salvo (recomendado)** e **Usar a versão do backup**.
4. Clique em **Importar selecionados**.

Se o arquivo for idêntico ao que já está salvo, o eploc avisa e não há nada a importar.

## O que não vai para o arquivo

- O valor anterior das colunas do [Monitor de Relatórios](../funcionalidades/eproc-monitor-relatorio),
  que fica cifrado só no computador onde foi guardado.
- Dados temporários ou que dependem deste computador: histórico de alertas, nomes de usuários
  memorizados, dados de processos lidos para os modelos de mensagem, descrições de eventos migrados,
  configuração de múltiplos monitores, posição dos painéis.

## Cuidados

- O arquivo contém dados que você salvou no eploc, como endereços de e-mail de contatos e textos de
  modelos. Guarde-o como guardaria qualquer documento de trabalho.
