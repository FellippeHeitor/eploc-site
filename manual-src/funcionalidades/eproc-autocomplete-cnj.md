---
title: "Completar número do processo CNJ automaticamente"
id: eproc-autocomplete-cnj
plataforma: eproc
grupo: "Pesquisa e filtros"
plano: free
desde: "1.0.2"
padrao: ligado
---

# Completar número do processo CNJ automaticamente

## O que faz

No campo de pesquisa rápida do menu lateral, completa o número do processo enquanto você digita:
basta o número principal e o dígito verificador para o eploc descobrir o ano e acrescentar o final
do número (o sufixo do tribunal e da comarca). Se você só lembra o número e o ano, digite-os
separados por barra e o eploc calcula o dígito verificador.

## Onde aparece

**eproc**, campo de pesquisa rápida do menu lateral.

## Passo a passo

**Com número e dígito verificador**

1. Digite os 9 primeiros dígitos (por exemplo, `000012345`, ou `0000123-45`).
2. O eploc acha o ano que combina com o dígito verificador e completa o número no formato
   `NNNNNNN-DD.AAAA.J.TR.OOOO`, com o ano e o sufixo configurado.
3. Se você digitar os 13 primeiros dígitos (com o ano), o número também é completado com o sufixo.

**Com número e ano**

1. Digite o número principal, uma barra e o ano: `1000713/2026` ou `1000713/26`.
2. O eploc mostra uma sugestão com o número completo. Confirme com um clique, Tab ou Enter. Enter
   já pesquisa o número.

**Sufixo**

Na primeira vez, o eploc tenta descobrir o sufixo (por exemplo `.8.13.0242`) nos números de
processo que aparecem nas telas do eproc. Se não conseguir, pede que você o informe numa janela.

Com a [Pesquisa rápida por nome ou CPF/CNPJ](./eproc-pesquisa-rapida-avancada) ligada, CPFs e CNPJs
válidos digitados no campo também são formatados automaticamente.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Sufixo final (ex.: .8.13.0242) | vazio | Final do número usado para completar. Em branco, é detectado automaticamente ou pedido na primeira vez. |

## Observações

- O ano é deduzido pelo dígito verificador entre os últimos 96 anos e o ano que vem, o que inclui
  processos antigos renumerados para o padrão CNJ (ex.: `0000123-12.2003.8.13.0242`). Como cada
  dígito verificador combina com um ano dessa faixa, um dígito digitado errado completa com um ano
  errado: confira o número antes de pesquisar.
- Na forma "número/ano" com dois dígitos, o ano vale 20AA até o ano que vem e 19AA acima disso
  (`123/03` é 2003; `123/95`, 1995).
- Na forma "número/ano", o eploc sempre calcula um dígito verificador. Por isso ele só sugere o
  número e espera sua confirmação: um ano digitado errado levaria a um processo errado.
- O sufixo é um só. Quem pesquisa processos de várias comarcas precisa digitar o número completo dos
  que não são da comarca configurada.
- Números inválidos são sinalizados no campo.

<!-- DEMO: eproc-autocomplete-cnj -->
