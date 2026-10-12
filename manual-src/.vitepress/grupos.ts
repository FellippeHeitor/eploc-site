// Ordem dos grupos de funcionalidades: a mesma da página de configurações da
// extensão. Usada pela barra lateral (config.mts) e pela lista da página
// /funcionalidades/ (ListaFuncionalidades.vue).
export const ORDEM_GRUPOS: [plataforma: string, grupo: string][] = [
  ["eproc", "Menu superior"],
  ["eproc", "Painel do processo"],
  ["eproc", "Eventos"],
  ["eproc", "Árvore e minuta"],
  ["eproc", "Pesquisa e filtros"],
  ["eproc", "Relatórios"],
  ["eproc", "Destaques e lembretes"],
  ["eproc", "E-mail"],
  ["eproc", "Monitoramento"],
  ["eproc", "Migração PJe (TJMG)"],
  ["eproc", "Geral do eproc"],
  ["RUPE", "RUPE"],
  ["SEI", "SEI"],
  ["TJMG", "TJMG"],
];

export const rotuloGrupo = (plataforma: string, grupo: string) =>
  plataforma === grupo ? plataforma : `${plataforma} · ${grupo}`;
