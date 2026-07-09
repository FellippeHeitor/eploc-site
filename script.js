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
  const suffix = target === 100 ? '%' : '';
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
