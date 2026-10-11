---
title: "Exibir nomes dos usuários nos eventos"
id: eproc-exibir-nomes-usuarios
plataforma: eproc
grupo: "Eventos"
plano: free
desde: "1.0.2"
padrao: ligado
---

# Exibir nomes dos usuários nos eventos

## O que faz

O eproc identifica quem lançou cada evento ou minuta só pela matrícula. Este recurso mostra o nome
completo ao lado da matrícula. Também mostra o nome do advogado ao lado da OAB citada na descrição
de um evento.

## Onde aparece

**eproc**:

- página do processo: eventos, observações "Criado por/Editado por" e lembretes;
- área de trabalho de minutas e cadastro de minuta: tabela de minutas, inclusive "Assinante
  indicado" e rótulos como "Para assinar (f0000000)".

## Passo a passo

1. Abra um processo. Ao lado de cada matrícula aparece o nome do usuário.
2. As OABs citadas na descrição dos eventos ganham o nome do advogado ao lado.

Os nomes ficam guardados neste navegador, para aparecerem também em outras telas do eproc.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Desativar o balão que aparece ao passar o mouse sobre a matrícula | desligada | Esconde o balão nativo do eproc, já que o nome passa a aparecer na tela. |

## Limitações e problemas conhecidos

- O nome vem das informações que o próprio eproc mostra (o balão da matrícula nos eventos e a
  tabela de partes). Uma matrícula que o eploc ainda não viu em nenhuma dessas telas continua só com
  o número.
- Os advogados entram pela tabela de partes, mesmo que ainda não tenham se manifestado no processo.

<!-- DEMO: eproc-exibir-nomes-usuarios -->
