---
title: "Filtro nas listas de preferências do processo"
id: eproc-filtro-preferencias-processo
plataforma: eproc
grupo: "Painel do processo"
plano: free
desde: "1.4.0"
padrao: ligado
---

# Filtro nas listas de preferências do processo

## O que faz

Os painéis de preferências da página do processo (Minutas, Movimentação, Intimação e
Automatizações) podem ter dezenas de itens. Este recurso coloca um campo de busca em cada painel,
que filtra os itens enquanto você digita. Também permite guardar um filtro como pasta e ocultar
preferências da unidade que você não usa.

## Onde aparece

**eproc**, página do processo, painéis de Preferências de Minutas, Movimentação, Intimação e
Automatizações, ao lado do título da lista de itens (o campo traz o logo do eploc).

## Passo a passo

**Filtrar**

1. Abra o painel de preferências desejado.
2. Digite no campo de busca. Você pode usar várias palavras, em qualquer ordem: "mand cita" encontra
   "Mandado de Citação". Os trechos encontrados ficam destacados.
3. Apague o texto para voltar a ver todos os itens.

**Criar uma pasta**

1. Digite um filtro e clique em **Criar pasta**. Ao passar o mouse sobre o botão, os itens que
   entrarão na pasta ficam realçados.
2. Dê um nome à pasta. Ela aparece numa faixa logo abaixo do título do painel e reúne os itens que
   combinam com o filtro, inclusive os que forem criados depois.
3. As pastas podem ser reordenadas arrastando e editadas pelo botão direito. Pelo botão direito em
   um item, você também pode movê-lo para outra pasta ou tirá-lo da pasta.

**Ocultar preferências da unidade**

1. Clique com o botão direito numa preferência da unidade e escolha ocultá-la.
2. Ela vai para a pasta **Ocultadas**, sempre a última da faixa, de onde pode ser reexibida.

As pastas valem para todos os processos.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Permitir agrupar itens em pastas ("Criar pasta" a partir do filtro) e ocultar preferências da unidade | ligada | Desligada, fica só o campo de busca. |

## Limitações e problemas conhecidos

- Só as preferências da unidade podem ser ocultadas. As individuais você mesmo pode excluir no
  eproc.
- Cada item fica em no máximo uma pasta.
- Enquanto há um filtro digitado, as pastas com itens encontrados aparecem abertas e as demais
  somem. Os itens da pasta "Ocultadas" não aparecem na busca.

<!-- DEMO: eproc-filtro-preferencias-processo -->
