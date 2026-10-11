---
title: "Modelos de mensagem"
id: eproc-modelos-mensagem
plataforma: eproc
grupo: "E-mail"
plano: free
desde: "1.0.10"
padrao: ligado
---

# Modelos de mensagem

## O que faz

Permite salvar textos padrão e inseri-los no campo "Mensagem" do envio de e-mail com um clique. Cada
modelo pode trazer também um assunto e usar variáveis, como o número do processo e o nome do autor,
preenchidas com os dados do processo.

## Onde aparece

**eproc**, tela de envio de e-mail do processo, num seletor entre "Assunto" e "Mensagem". Os modelos
são cadastrados nas configurações do eploc ("Gerenciar modelos de mensagem"), também acessíveis pelo
popup.

## Passo a passo

**Cadastrar um modelo**

1. Nas configurações do eploc, no card do recurso, clique em **Gerenciar modelos de mensagem**.
2. Clique em **Novo**, preencha o nome do modelo, o assunto (opcional) e o texto.
3. Para usar dados do processo, clique numa das variáveis listadas ou digite-a entre arrobas, como
   `@numerodoprocesso@`.
4. Clique em **Salvar modelo**. Marque a estrela de um modelo para torná-lo o padrão.

**Usar um modelo**

1. Abra a capa do processo antes, para o eploc ler os dados usados nas variáveis.
2. Na tela de envio de e-mail, escolha o modelo no seletor. O texto entra no campo "Mensagem" e, se o
   modelo tiver assunto, ele substitui o do campo "Assunto".
3. O modelo padrão é inserido sozinho ao abrir a tela, se o campo de mensagem estiver vazio.
4. Ao digitar "@" no assunto ou na mensagem, aparece a lista de variáveis. Escolha com as setas e
   Enter.

Variáveis disponíveis:

| Variável | Conteúdo |
|---|---|
| `@numerodoprocesso@` | Número do processo |
| `@classe@` | Classe do processo |
| `@assuntoprincipal@` | Assunto principal do processo |
| `@orgaojulgador@` | Órgão julgador |
| `@nomedoautor@` | Nome do primeiro autor (polo ativo) |
| `@nomedosautoreslista@` | Nomes de todos os autores, como "A, B e C" |
| `@nomedoreu@` | Nome do primeiro réu (polo passivo) |
| `@nomedosreuslista@` | Nomes de todos os réus, como "A, B e C" |
| `@datadehoje@` | Data de hoje (dd/mm/aaaa) |

## Configurações e opções

Não há opções além de ligar e desligar. Os modelos são gerenciados em **Gerenciar modelos de
mensagem**.

## Limitações e problemas conhecidos

- O campo de mensagem do eproc não aceita formatação (negrito, listas etc.). Os modelos são texto
  simples.
- A tela de e-mail não traz os dados do processo. Eles são lidos da capa e guardados só neste
  computador, por até 24 horas, fora dos backups. Se a capa não tiver sido aberta, o eploc avisa
  quais variáveis ficaram sem dados.

<!-- DEMO: eproc-modelos-mensagem -->
