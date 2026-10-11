<script setup lang="ts">
import { computed } from "vue";
import { withBase } from "vitepress";
import { data } from "../funcionalidades.data";

const ORDEM_PLATAFORMAS = ["eproc", "RUPE", "SEI", "TJMG"];

const grupos = computed(() => {
  const mapa = new Map<string, typeof data>();
  for (const f of data) {
    const chave = f.plataforma === f.grupo ? f.plataforma : `${f.plataforma} · ${f.grupo}`;
    if (!mapa.has(chave)) mapa.set(chave, []);
    mapa.get(chave)!.push(f);
  }
  return [...mapa.entries()]
    .sort(
      ([a, la], [b, lb]) =>
        ORDEM_PLATAFORMAS.indexOf(la[0].plataforma) - ORDEM_PLATAFORMAS.indexOf(lb[0].plataforma) ||
        a.localeCompare(b, "pt-BR")
    )
    .map(([nome, itens]) => ({
      nome,
      itens: [...itens].sort((x, y) => x.title.localeCompare(y.title, "pt-BR")),
    }));
});
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
