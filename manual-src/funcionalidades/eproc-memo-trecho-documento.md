---
title: "Inserir trecho do documento no memo"
id: eproc-memo-trecho-documento
plataforma: eproc
grupo: "Eventos"
plano: free
desde: "1.13.0"
padrao: ligado
---

# Inserir trecho do documento no memo

## O que faz

Com um documento aberto, você seleciona uma frase (por exemplo, "Intimei Fulana de Tal" numa
certidão de cumprimento de mandado) e a manda para o memo desse documento pelo botão direito. Não é
preciso copiar, voltar à página do processo e colar. O memo aparece abaixo do nome do documento na
tabela de eventos.

## Onde aparece

**eproc**, no documento aberto a partir da tabela de eventos, no menu do botão direito sobre um
trecho selecionado.

<!-- DEMO: eproc-memo-trecho-documento -->

## Passo a passo

1. Na página do processo, abra o documento clicando nele na tabela de eventos.
2. Selecione o trecho que deve ir para o memo.
3. Clique com o botão direito sobre a seleção e escolha **Inserir trecho no memo**.
4. Revise o texto no diálogo. Se o documento já tiver memo, o trecho aparece depois dele, numa
   linha nova. Dá para editar à vontade.
5. Clique em **Salvar memo**. Um aviso no canto confirma a gravação, e a tabela de eventos da
   página do processo já mostra o memo novo, como quando ele é editado por lá.

## Configurações e opções

Não há opções além de ligar e desligar.

## Observações

- O memo é visível a todos os usuários que acessam o processo. O diálogo lembra isso antes de
  salvar.
- O item só funciona com a página do processo aberta, na janela que abriu o documento: é dela que a
  extensão tira o caminho para o memo. Se ela foi fechada ou recarregada noutro processo, o item
  aparece desativado. Na pré-visualização do documento, dentro da própria página do processo, ele
  funciona normalmente; na aba aberta pelo botão "Abrir documento em nova aba" da pré-visualização,
  não, porque o eproc a abre sem ligação com a página do processo.
- Shift + botão direito abre o menu normal do navegador.
- Em documentos em PDF a seleção acontece no visualizador do navegador, onde a extensão não chega.
