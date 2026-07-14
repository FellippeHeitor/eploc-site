document.addEventListener('DOMContentLoaded', () => {

    // Lógica para alternar as abas (Tabs) com acessibilidade
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    function activateTab(button) {
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        });

        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');

        const targetId = button.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);

        if (targetContent) {
            targetContent.classList.add('active');
        }
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            activateTab(button);
        });
    });

    // Links do rodapé que apontam para uma aba específica dentro de #docs
    document.querySelectorAll('[data-tab-link]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetButton = document.getElementById(`tab-${link.dataset.tabLink}`);
            if (targetButton) {
                activateTab(targetButton);
                targetButton.closest('section').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Reproduz os vídeos da galeria apenas quando visíveis, e pausa fora da tela
    // (evita download/CPU desnecessários e respeita prefers-reduced-motion)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const galleryVideos = document.querySelectorAll('.g-card video');

    if (galleryVideos.length && !prefersReducedMotion && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target;
                if (entry.isIntersecting) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.35 });

        galleryVideos.forEach(video => observer.observe(video));
    }

});
