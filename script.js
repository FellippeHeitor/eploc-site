const revealNodes = document.querySelectorAll('.reveal');
const statNodes = document.querySelectorAll('.stat-number');
const yearNode = document.getElementById('year');

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: '0px 0px -40px 0px'
  }
);

revealNodes.forEach((node, index) => {
  node.style.animationDelay = `${Math.min(index * 0.06, 0.4)}s`;
  observer.observe(node);
});

const runCounter = (node) => {
  const target = Number(node.dataset.target || 0);
  const suffix = node.dataset.suffix || '';
  const durationMs = 1200;
  const startAt = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - startAt) / durationMs, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);

    node.textContent = `${value}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
};

const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        runCounter(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.6 }
);

statNodes.forEach((node) => statObserver.observe(node));

// --- Melhoria de Navegabilidade: Indicador de Secção Ativa (Scrollspy) ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.menu a');

const scrollSpyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove a classe ativa de todos os links
        navLinks.forEach((link) => link.classList.remove('active'));
        
        // Adiciona a classe ativa ao link correspondente à secção em visualização
        const activeLink = document.querySelector(`.menu a[href="#${entry.target.id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  },
  {
    // A margem ajusta quando a mudança visual de secção ocorre no ecrã
    rootMargin: '-40% 0px -60% 0px' 
  }
);

sections.forEach((section) => scrollSpyObserver.observe(section));

// --- Menu Hambúrguer Responsivo ---
const menuToggle = document.getElementById('menuToggle');
const topbar = document.getElementById('topbar');
const menuLinks = document.querySelectorAll('.menu a');

if (menuToggle && topbar) {
  menuToggle.addEventListener('click', () => {
    const isOpen = topbar.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Fecha o menu ao clicar em qualquer link (âncora)
  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      topbar.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// --- Efeito Shrink no Header (Scroll) ---
window.addEventListener('scroll', () => {
  if (topbar) {
    if (window.scrollY > 20) {
      topbar.classList.add('topbar-scrolled');
    } else {
      topbar.classList.remove('topbar-scrolled');
    }
  }
});

// --- Barra de Progresso de Rolagem & Botão Voltar ao Topo ---
const scrollProgress = document.getElementById('scrollProgress');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  // Barra de progresso
  if (scrollProgress) {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    scrollProgress.style.width = `${progress}%`;
  }

  // Botão voltar ao topo
  if (backToTop) {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
});

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// --- Simulador Antes/Depois Interativo ---
const tabSemEploc = document.getElementById('tabSemEploc');
const tabComEploc = document.getElementById('tabComEploc');
const simWindow = document.getElementById('simWindow');
const simTooltipBadge = document.getElementById('simTooltipBadge');
const simTooltipText = document.getElementById('simTooltipText');
const simCopyBadge = document.getElementById('simCopyBadge');

if (tabSemEploc && tabComEploc && simWindow) {
  const setSimulatorState = (isActiveEploc) => {
    if (isActiveEploc) {
      tabSemEploc.classList.remove('active');
      tabComEploc.classList.add('active');
      simWindow.classList.add('com-eploc');
      if (simTooltipBadge) simTooltipBadge.textContent = 'Otimizado';
      if (simTooltipText) {
        simTooltipText.textContent = 'Com o eploc ativo, o número CNJ ganha um botão de cópia rápida, o menu lateral é limpo, alertas ganham clareza e um painel de ações rápidas surge no topo do processo.';
      }
    } else {
      tabComEploc.classList.remove('active');
      tabSemEploc.classList.add('active');
      simWindow.classList.remove('com-eploc');
      if (simTooltipBadge) simTooltipBadge.textContent = 'Original';
      if (simTooltipText) {
        simTooltipText.textContent = 'Esta é a visualização padrão do tribunal: fontes pequenas, interface poluída com menus que você não usa no dia a dia e sem atalhos rápidos.';
      }
    }
  };

  tabSemEploc.addEventListener('click', () => setSimulatorState(false));
  tabComEploc.addEventListener('click', () => setSimulatorState(true));

  // Funcionalidade real de copiar CNJ
  if (simCopyBadge) {
    simCopyBadge.addEventListener('click', () => {
      const cnjNumber = "5004321-88.2026.8.24.0023";
      navigator.clipboard.writeText(cnjNumber).then(() => {
        const originalText = simCopyBadge.textContent;
        simCopyBadge.textContent = "Copiado! ✓";
        simCopyBadge.style.background = "#27c93f";
        simCopyBadge.style.boxShadow = "0 2px 10px rgba(39, 201, 63, 0.35)";
        
        setTimeout(() => {
          simCopyBadge.textContent = originalText;
          simCopyBadge.style.background = "";
          simCopyBadge.style.boxShadow = "";
        }, 1500);
      }).catch(err => {
        console.error("Falha ao copiar CNJ: ", err);
      });
    });
  }
}