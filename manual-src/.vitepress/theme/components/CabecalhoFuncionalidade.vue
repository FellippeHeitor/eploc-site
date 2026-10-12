<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";

const { frontmatter } = useData();
const fm = computed(() => frontmatter.value);
const ehFuncionalidade = computed(() => Boolean(fm.value.id && fm.value.plano));
const plano = computed(() => (fm.value.plano === "pro" ? "Pro" : "Gratuito"));
</script>

<template>
  <div v-if="ehFuncionalidade" class="selos" aria-label="Resumo da funcionalidade">
    <span class="selo selo-plataforma">{{ fm.plataforma }}<template v-if="fm.tribunal"> · {{ fm.tribunal }}</template></span>
    <span class="selo" :class="fm.plano === 'pro' ? 'selo-pro' : 'selo-free'">{{ plano }}</span>
    <span v-if="fm.desde" class="selo selo-versao">Disponível desde a v{{ fm.desde }}</span>
    <span class="selo selo-padrao">{{ fm.padrao === "ligado" ? "Vem ligado" : "Vem desligado" }}</span>
  </div>
</template>
