---
title: "Histórico de e-mails avançado"
id: eproc-historico-emails
plataforma: eproc
grupo: "E-mail"
plano: free
desde: "1.0.2"
padrao: ligado
---

# Histórico de e-mails avançado

## O que faz

Transforma o campo "Para:" do envio de e-mail do eproc num campo de etiquetas, como no Gmail: cada
destinatário vira uma etiqueta removível. O eploc lembra os endereços já usados, sugere
destinatários enquanto você digita e limpa os e-mails colados.

## Onde aparece

**eproc**, tela de envio de e-mail do processo e campos de e-mail do cadastro de minuta. O
gerenciador de contatos fica nas configurações do eploc, no card do recurso ("Gerenciar contatos
salvos"), e também pode ser aberto pelo popup.

## Passo a passo

1. Abra a tela de envio de e-mail. O campo "Para:" já recebe o foco.
2. Digite parte de um nome ou endereço. O eploc sugere contatos já usados, mesmo com abreviações,
   sem acentos ou com pequenos erros de digitação. Escolha com o mouse ou com o teclado.
3. Ao clicar no campo, aparecem também os destinatários que costumam ir junto com os já escolhidos.
4. Para colar vários endereços de uma vez, cole um bloco de texto no campo: os e-mails válidos viram
   etiquetas e o resto é descartado. Endereços no formato `Nome <email@exemplo.com>` guardam também
   o nome.
5. Para remover um destinatário, clique no "x" da etiqueta.
6. Se a mensagem mencionar anexo(s) e nenhum documento estiver marcado na tabela de anexos, o eploc
   pergunta se você quer enviar mesmo assim.

No gerenciador de contatos (configurações do eploc), você pode buscar, editar e excluir contatos e
confirmar várias edições de uma vez com **Salvar todos**.

## Configurações e opções

Não há opções além de ligar e desligar. Os contatos são gerenciados em **Gerenciar contatos
salvos**.

## Observações

- O campo original do eproc continua existindo, oculto, e é ele que o eproc envia. O eploc o mantém
  sempre preenchido com os endereços separados por ";".
- Os contatos ficam neste computador e entram no backup. Também podem ser exportados à parte para
  compartilhar com colegas (veja [Backup em arquivo](../geral/backup-arquivo)).

<!-- DEMO: eproc-historico-emails -->
