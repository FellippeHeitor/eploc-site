---
title: "Painel de resumo da minuta"
id: eproc-resumo-minuta-flutuante
plataforma: eproc
grupo: "Árvore e minuta"
plano: free
desde: "1.1.3"
padrao: ligado
---

# Painel de resumo da minuta

## O que faz

Enquanto você redige uma minuta, mostra num painel flutuante os dados escolhidos no cadastro:
localizadores, evento, intimação ou citação, destinatário, audiência, assinante e outros. Assim
você confere tudo sem voltar à tela anterior.

## Onde aparece

**eproc**, tela de edição da minuta, depois do cadastro ("Salvar e Editar") ou ao retomar uma minuta
existente.

## Passo a passo

1. Cadastre a minuta normalmente e clique em **Salvar e Editar**.
2. Na edição do documento, o painel aparece com o resumo dos dados preenchidos.
3. Arraste o painel para onde preferir, ou fixe-o à direita da tela. Cada seção pode ser recolhida.
   A posição e as preferências são lembradas.
4. Para fechar, use o botão "Fechar resumo". Para reabrir, use "Mostrar resumo da minuta".

### Documentos citados

Quando a minuta tem links para documentos do processo (como "evento 1, INIC1"), o painel ganha a
seção **Documentos citados**, com um item por documento:

- clique no nome para rolar a minuta até o trecho que o cita. Se ele aparece mais de uma vez, cada
  clique leva à próxima menção;
- clique no botão de abrir, ao lado, para abrir o documento;
- um ícone de alerta aparece quando o link aponta para um documento de outro processo, o que costuma
  acontecer quando o texto foi copiado de outra minuta.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Ao abrir a edição sem dados de resumo, carregar "Alterar Dados da Minuta" em segundo plano para preencher o painel | ligada | Permite montar o resumo de minutas já existentes, sem abrir nada na tela. |

## Observações

- O painel segue o tema claro ou escuro escolhido nas configurações do eploc.
- A posição e o tamanho do painel ficam guardados no navegador, para cada endereço do eproc, e não
  entram no backup.

<!-- DEMO: eproc-resumo-minuta-flutuante -->
