---
title: "Persistir preferências e painéis do processo"
id: eproc-persistir-preferencias-processo
plataforma: eproc
grupo: "Painel do processo"
plano: free
desde: "1.4.0"
padrao: ligado
---

# Persistir preferências e painéis do processo

## O que faz

Na página do processo, o eproc tem caixas como "Sempre aberto ao iniciar", "Mostrar preferências da
unidade" e "Manter aberto". Ele mesmo deveria lembrá-las, mas com frequência as reseta sozinho. Este
recurso memoriza o que você marcou e corrige o eproc quando ele volta ao padrão.

## Onde aparece

**eproc**, página do processo:

- painéis de Preferências de Minutas, Movimentação, Intimação e Automatizações (caixas "Sempre
  aberto ao iniciar" e "Mostrar preferências da unidade");
- caixas "Manter Aberto" de Minutas e de Informações Adicionais.

## Passo a passo

1. Marque ou desmarque uma dessas caixas como de costume. Um balão confirma: "O eploc vai lembrar
   desse ajuste para você".
2. Se o eproc resetar a caixa depois (ao trocar de perfil, recarregar um trecho da página etc.), o
   eploc a remarca e avisa: "O sistema resetou isso — mas o eploc já corrigiu pra você".
3. Ao abrir um processo, o que deveria começar aberto e está fechado é aberto uma vez.

## Configurações e opções

Não há opções além de ligar e desligar.

## Limitações e problemas conhecidos

- Nada é alterado antes de você mexer numa caixa pela primeira vez com o recurso ligado.
- O que você fechar à mão continua fechado até você reabrir ou recarregar a página.
- As escolhas são guardadas separadamente para cada perfil/unidade do eproc.

<!-- DEMO: eproc-persistir-preferencias-processo -->
