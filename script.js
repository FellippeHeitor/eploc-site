const yearNode = document.getElementById('year');
if (yearNode) yearNode.textContent = String(new Date().getFullYear());

const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
    }
  });
}, observerOptions);

function observeElements() {
  const revealNodes = document.querySelectorAll('.reveal:not(.in)');
  revealNodes.forEach((node) => observer.observe(node));
}
observeElements();
