import { createContentLoader } from "vitepress";

export interface ResumoFuncionalidade {
  url: string;
  title: string;
  plataforma: string;
  grupo: string;
  plano: string;
  desde: string;
  resumo: string;
}

declare const data: ResumoFuncionalidade[];
export { data };

export default createContentLoader("funcionalidades/*.md", {
  includeSrc: true,
  transform(paginas): ResumoFuncionalidade[] {
    return paginas
      .filter((p) => p.frontmatter.id)
      .map((p) => {
        // Primeiro parágrafo de "O que faz", sem marcação.
        const secao = p.src?.split(/^## O que faz\s*$/m)[1] ?? "";
        const paragrafo = secao.trim().split(/\n\s*\n/)[0] ?? "";
        const resumo = paragrafo.startsWith("#")
          ? ""
          : paragrafo.replace(/[*_`]/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
        return {
          url: p.url,
          title: p.frontmatter.title,
          plataforma: p.frontmatter.plataforma,
          grupo: p.frontmatter.grupo,
          plano: p.frontmatter.plano,
          desde: p.frontmatter.desde,
          resumo,
        };
      });
  },
});
