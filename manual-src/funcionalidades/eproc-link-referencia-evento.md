---
title: "Link para referência de evento"
id: eproc-link-referencia-evento
plataforma: eproc
grupo: "Eventos"
plano: free
desde: "1.0.7"
padrao: ligado
---

# Link para referência de evento

## O que faz

Transforma em links as menções a outros eventos ("Refer. ao evento 12", "Complementar ao evento 7",
"Status: FECHADO (17 - PETIÇÃO)"). Um clique leva até o evento na tabela e o destaca. Nos documentos
abertos a partir do processo, menções como "evento 31, DEC1" também viram links.

## Onde aparece

**eproc**:

- página do processo: eventos, lembretes e resumos de documentos;
- documentos HTML abertos a partir do processo (minutas, decisões etc.).

## Passo a passo

1. Na página do processo, clique numa menção sublinhada a um evento. A tabela rola até o evento e o
   destaca. O botão Voltar do navegador retorna ao ponto anterior.
2. Num documento aberto a partir do processo, clique em "evento 15", "evento 31, DEC1" ou "eventos 3
   e 5". A página do processo vem para a frente, no evento citado. Quando um documento específico é
   citado, ele também é aberto.
3. Em processos migrados do PJe, menções a IDs do PJe nos documentos (como "Id. 10000000001") levam
   ao evento com aquele ID e abrem o documento correspondente.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Em documentos abertos a partir do processo, transformar menções a eventos em links que saltam até o evento na página do processo | ligada | Desligada, os links só aparecem na própria página do processo. |

## Limitações e problemas conhecidos

- Nos documentos, os links só funcionam enquanto a página do processo que os abriu continuar aberta.
  Se ela for fechada, os links voltam a ser texto comum.
- Documentos em PDF não recebem links.
- Menções a eventos de outro processo citado ou a eventos que não existem na tabela não viram links.

<!-- DEMO: eproc-link-referencia-evento -->
