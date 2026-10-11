---
title: "Pesquisa rápida por nome ou CPF/CNPJ"
id: eproc-pesquisa-rapida-avancada
plataforma: eproc
grupo: "Pesquisa e filtros"
plano: free
desde: "1.1.0"
padrao: ligado
---

# Pesquisa rápida por nome ou CPF/CNPJ

## O que faz

O campo de pesquisa rápida do menu lateral do eproc só aceita número de processo. Com este recurso,
ele também aceita o nome da parte ou o CPF/CNPJ: o eploc leva a pesquisa para a consulta processual
e já a executa.

## Onde aparece

**eproc**, campo de pesquisa rápida do menu lateral.

## Passo a passo

1. Digite no campo de pesquisa rápida:
   - um número de processo, para pesquisar como sempre;
   - um CPF ou CNPJ (com ou sem pontuação), por exemplo `000.000.000-00`;
   - ou um nome, por exemplo `Maria da Silva`.
2. Tecle Enter ou clique na lupa.
3. O eploc abre a consulta processual, escolhe o tipo de pesquisa certo, preenche o campo e clica em
   Consultar.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Na pesquisa por nome, marcar automaticamente "Selecionar todos" no filtro de tipo de parte | desligada | A pesquisa por nome procura em todos os tipos de parte. |
| Repetir automaticamente a pesquisa quando o eproc a cancelar por "mudança no perfil do usuário" (ex.: logo após migrar processos) | ligada | Quando o eproc cancela a pesquisa com esse aviso, o eploc a refaz sozinho. |

## Limitações e problemas conhecidos

- O formato "número/ano" (como `1000713/26`) é tratado pelo
  [Completar número do processo CNJ automaticamente](./eproc-autocomplete-cnj), e não como nome.
- A pesquisa usa a página de consulta processual configurada como padrão no seu eproc.

<!-- DEMO: eproc-pesquisa-rapida-avancada -->
