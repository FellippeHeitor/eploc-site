---
title: "Alertas menos intrusivos"
id: eproc-alertas-inline
plataforma: eproc
grupo: "Geral do eproc"
plano: free
desde: "1.2.0"
padrao: desligado
---

# Alertas menos intrusivos

## O que faz

Substitui as caixas de mensagem do eproc (como "Utilize o botão 'Sair do Sistema' caso queira
efetuar um novo login"), que travam a navegação até você clicar em OK, por um aviso discreto no topo
da janela. O aviso fecha sozinho, e os alertas ficam num histórico para consulta.

## Onde aparece

**eproc**, em todas as telas: aviso centralizado no topo da janela e, quando há alertas fechados sem
confirmação, um ícone com contador no menu superior.

## Passo a passo

1. Ligue o recurso nas configurações do eploc (ele vem desligado).
2. Quando o eproc emitir um alerta, ele aparece como aviso no topo. Clique em **OK** para fechá-lo, ou
   aguarde: uma barra mostra o tempo restante, que pausa enquanto o mouse está sobre o aviso ou a aba
   está em segundo plano.
3. Se algum alerta fechar sozinho, aparece no menu superior um ícone com contador. Clique nele (ou
   clique com o botão direito em qualquer aviso) para abrir o histórico dos últimos 7 dias. Ali você
   pode copiar o texto de cada alerta e abrir a página de origem.
4. Para que um tipo de aviso pare de ir para o histórico, use **Rotineiro...** no histórico e escolha
   o trecho que identifica aquele aviso (use `*` nas partes que mudam). O aviso continua aparecendo,
   mas não é mais registrado.
5. Para não ver mais um tipo de aviso, clique no botão ▾ ao lado do OK ("Mais opções") e escolha o
   trecho que o identifica. Avisos com esse trecho deixam de aparecer.

Os avisos rotineiros e ocultos podem ser revistos e desfeitos nas configurações do eploc, no card do
recurso, em **Gerenciar avisos rotineiros e ocultos**.

## Configurações e opções

| Opção | Padrão | Efeito |
|---|---|---|
| Fechar automaticamente o banner após | 15 segundos | De 5 a 60 segundos. |
| Manter histórico dos últimos alertas (avisa sobre os fechados sem clicar em OK) | ligada | Desligada, não há histórico nem ícone no menu. |

## Limitações e problemas conhecidos

- **Atenção:** com o alerta nativo, o eproc espera o clique em OK antes de continuar a tarefa. Com
  este recurso, o eproc segue imediatamente, sem esperar. Por isso o recurso vem desligado.
- Um aviso oculto some sem deixar rastro. O gerenciador mostra quantas vezes cada trecho ocultou
  avisos, para você conferir se ele não está pegando mais do que devia.
- Avisos que o eproc manda com o texto repetido aparecem uma vez só.

<!-- DEMO: eproc-alertas-inline -->
