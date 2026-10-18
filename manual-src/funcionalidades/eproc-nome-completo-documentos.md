---
title: "Nome completo dos documentos nos eventos"
id: eproc-nome-completo-documentos
plataforma: eproc
grupo: "Eventos"
plano: free
desde: "1.7.0"
padrao: ligado
---

# Nome completo dos documentos nos eventos

## O que faz

Na tabela de eventos, o eproc identifica cada documento por uma sigla, como "CCUMPMP1". Este
recurso mostra o nome completo do tipo de documento no link e deixa a sigla logo abaixo, em texto
discreto.

## Onde aparece

**eproc**, página do processo, links de documento da tabela de eventos.

## Passo a passo

Não é preciso fazer nada. Exemplo: o link "CCUMPMP1" passa a mostrar "Certidão de Cumprimento de
Mandado de Prisão 1" e, embaixo, "CCUMPMP1".

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Tirar o "\n" que o eproc deixa no fim das observações dos documentos (ex.: documentos trasladados) | ligada | A observação "Documento gerado pelo traslado de peças do processo …" deixa de terminar com um "\n" solto. Um "\n" no meio do texto vira quebra de linha. |

## Observações

- O nome completo vem das informações do próprio documento no eproc: o "Tipo Documento" do balão
  "Informações do Documento" ou, no eproc de 2º grau, a dica do link. Quando o eproc não informa o
  tipo, a sigla continua como está.
- Funciona no eproc de 1º e de 2º grau.

<!-- DEMO: eproc-nome-completo-documentos -->
