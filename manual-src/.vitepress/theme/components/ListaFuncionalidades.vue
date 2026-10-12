<script setup lang="ts">
import { computed } from "vue";
import { withBase } from "vitepress";
import { data } from "../funcionalidades.data";
import { ORDEM_GRUPOS, rotuloGrupo } from "../../grupos";

const grupos = computed(() =>
  ORDEM_GRUPOS.map(([plataforma, grupo]) => ({
    nome: rotuloGrupo(plataforma, grupo),
    itens: data
      .filter((f) => f.plataforma === plataforma && f.grupo === grupo)
      .sort((x, y) => x.title.localeCompare(y.title, "pt-BR")),
  })).filter((g) => g.itens.length)
);
</script>

<template>
  <section v-for="g in grupos" :key="g.nome" class="lista-grupo">
    <h2 :id="g.nome">{{ g.nome }}</h2>
    <ul>
      <li v-for="f in g.itens" :key="f.url">
        <a :href="withBase(f.url)">{{ f.title }}</a>
        <span v-if="f.plano === 'pro'" class="selo selo-pro">Pro</span>
        <span v-if="f.resumo"> — {{ f.resumo }}</span>
      </li>
    </ul>
  </section>
</template>
