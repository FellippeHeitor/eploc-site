import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import { h } from "vue";
import CabecalhoFuncionalidade from "./components/CabecalhoFuncionalidade.vue";
import ListaFuncionalidades from "./components/ListaFuncionalidades.vue";
import "./estilo.css";

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      // Selos (plataforma, Free/Pro, versão, padrão) logo abaixo do título,
      // lidos do front matter de cada página de funcionalidade.
      "doc-before": () => h(CabecalhoFuncionalidade),
    }),
  enhanceApp({ app }) {
    app.component("ListaFuncionalidades", ListaFuncionalidades);
  },
} satisfies Theme;
