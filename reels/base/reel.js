// Base comum dos reels: utilidades de tempo e o esqueleto da linha do tempo.
// Cada reel chama iniciarReel({...}) com as legendas, o caminho do cursor, o cartão final e
// desenhar(t), que pinta a própria cena. renderFrame(t) é determinístico: render.mjs chama
// quadro a quadro; aberta no navegador (sem ?render), a página toca em loop.

const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const prog = (t, t0, t1) => clamp((t - t0) / (t1 - t0));
const easeInOut = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
const easeOut = (x) => 1 - Math.pow(1 - x, 3);
const backOut = (x) => { const c = 1.6; return 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2); };
const lerp = (a, b, x) => a + (b - a) * x;
const $ = (id) => document.getElementById(id);
// Escrevem só quando o valor muda.
function set(el, prop, val) { if (el.style[prop] !== val) el.style[prop] = val; }
function html(el, v) { if (el.innerHTML !== v) el.innerHTML = v; }
function cls(el, c, on) { el.classList.toggle(c, on); }

/**
 * @param {object} o
 * @param {number} o.duracao — segundos
 * @param {{t0, t1, kicker, titulo, sub?}[]} o.legendas — vão no #legenda da página
 * @param {{caminho: ({t, p: [x, y]} | {t, el: () => Element, dx?, dy?})[], cliques: number[], visivel: [number, number]}} o.cursor
 *   caminho: alvos com o instante de chegada; visivel: [aparece, some]
 * @param {{t: number, nome: string, itens: string[]}} o.final — cartão final (nome em HTML)
 * @param {(t: number) => void} o.desenhar — pinta a cena no instante t
 */
function iniciarReel(o) {
  $('legenda').innerHTML = o.legendas.map((l, i) =>
    `<div class="cap" id="cap${i}"><span class="cap__kicker">${l.kicker}</span><div class="cap__titulo">${l.titulo}</div>${l.sub ? `<div class="cap__sub">${l.sub}</div>` : ''}</div>`).join('');

  document.body.insertAdjacentHTML('beforeend', `
    <div class="ripple" id="ripple"></div>
    <svg class="cursor" id="cursor" viewBox="0 0 24 24"><path d="M5 2.5v17.2l4.3-4.1 2.9 6.6 3-1.3-2.9-6.5h6z" fill="#fff" stroke="#1d2433" stroke-width="1.6" stroke-linejoin="round"/></svg>
    <div class="final" id="final">
      <div class="blob blob--a"></div>
      <div class="blob blob--b"></div>
      <img class="final__logo" src="../../assets/eploc-logo-master-1000.png" alt="eploc">
      <div class="final__nome">${o.final.nome}</div>
      <div class="final__lista">${o.final.itens.map((i) => `<div><i></i>${i}</div>`).join('')}</div>
      <div class="final__cta">Grátis para Chrome e Edge</div>
      <div class="final__url">eploc.com.br</div>
    </div>`);
  if (location.search.includes('zonas')) document.body.insertAdjacentHTML('beforeend', '<div class="zona"></div>');

  const { caminho, cliques, visivel } = o.cursor;
  const centro = (alvo) => {
    if (alvo.p) return alvo.p;
    const r = alvo.el().getBoundingClientRect();
    return [r.left + r.width / 2 + (alvo.dx || 0), r.top + r.height / 2 + (alvo.dy || 0)];
  };

  function renderFrame(t) {
    o.legendas.forEach((l, i) => {
      const el = $('cap' + i);
      const a = easeOut(prog(t, l.t0, l.t0 + 0.4)) * (1 - prog(t, l.t1 - 0.25, l.t1));
      set(el, 'opacity', String(a));
      set(el, 'transform', `translateY(${(1 - easeOut(prog(t, l.t0, l.t0 + 0.4))) * 18}px)`);
    });

    o.desenhar(t);

    // Cursor: vai de um alvo ao próximo no último 1,1 s antes da chegada.
    const cur = $('cursor');
    let pos = centro(caminho[0]);
    for (let i = 0; i < caminho.length - 1; i++) {
      const a = caminho[i], b = caminho[i + 1];
      if (t >= a.t && t < b.t) {
        const ini = Math.max(a.t, b.t - Math.min(1.1, b.t - a.t));
        const x = easeInOut(prog(t, ini, b.t));
        const pa = centro(a), pb = centro(b);
        pos = [lerp(pa[0], pb[0], x), lerp(pa[1], pb[1], x)];
        break;
      }
      if (t >= b.t) pos = centro(b);
    }
    const curVis = clamp(prog(t, visivel[0], visivel[0] + 0.4)) * (1 - prog(t, visivel[1], visivel[1] + 0.4));
    const apertando = cliques.some((c) => t >= c && t < c + 0.12);
    set(cur, 'opacity', String(curVis));
    set(cur, 'transform', `translate(${pos[0] - 4}px, ${pos[1] - 2}px) scale(${apertando ? 0.85 : 1})`);
    const ultimo = cliques.filter((c) => t >= c).pop();
    const rp = $('ripple');
    if (ultimo !== undefined && t - ultimo < 0.45) {
      const x = (t - ultimo) / 0.45;
      set(rp, 'opacity', String((1 - x) * 0.9));
      set(rp, 'left', `${pos[0]}px`); set(rp, 'top', `${pos[1]}px`);
      set(rp, 'transform', `scale(${0.3 + easeOut(x) * 1.1})`);
    } else set(rp, 'opacity', '0');

    const tf = o.final.t;
    set($('final'), 'opacity', String(easeOut(prog(t, tf, tf + 0.5))));
    const logo = $('final').querySelector('.final__logo');
    set(logo, 'transform', `scale(${lerp(0.6, 1, backOut(prog(t, tf + 0.1, tf + 0.7)))})`);
    [...$('final').querySelectorAll('.final__nome, .final__lista > div, .final__cta, .final__url')].forEach((el, i) => {
      const x = easeOut(prog(t, tf + 0.4 + i * 0.15, tf + 0.8 + i * 0.15));
      set(el, 'opacity', String(x));
      set(el, 'transform', `translateY(${(1 - x) * 16}px)`);
    });
  }

  window.DURACAO = o.duracao;
  window.renderFrame = renderFrame;
  window.pronto = document.fonts.ready.then(() => Promise.all([...document.images].map((i) => i.decode().catch(() => {}))));
  if (!location.search.includes('render')) {
    window.pronto.then(() => {
      const inicio = performance.now();
      const tick = () => { renderFrame(((performance.now() - inicio) / 1000) % (o.duracao + 1)); requestAnimationFrame(tick); };
      tick();
    });
  }
}
