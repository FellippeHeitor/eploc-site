document.addEventListener('DOMContentLoaded', () => {

    // Menu mobile (drawer aberto/fechado via atributo hidden)
    const navToggle = document.querySelector('.nav-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (navToggle && mobileNav) {
        function openMobileNav() {
            mobileNav.hidden = false;
            navToggle.setAttribute('aria-expanded', 'true');
            mobileNav.querySelector('a').focus();
        }

        function closeMobileNav() {
            mobileNav.hidden = true;
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.focus();
        }

        navToggle.addEventListener('click', () => {
            if (mobileNav.hidden) {
                openMobileNav();
            } else {
                closeMobileNav();
            }
        });

        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileNav);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !mobileNav.hidden) {
                closeMobileNav();
            }
        });
    }

    // Esconde o skeleton do formulário embutido assim que o iframe carrega
    const formWrapper = document.querySelector('.form-wrapper');
    const formIframe = formWrapper && formWrapper.querySelector('iframe');

    if (formIframe) {
        formIframe.addEventListener('load', () => {
            formWrapper.classList.add('is-loaded');
        });
    }

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

    // Abre as imagens e vídeos da galeria em um modal, em tamanho real
    const galleryImages = document.querySelectorAll('.gallery .g-card img');
    const galleryVideoCards = document.querySelectorAll('.gallery .g-card video');
    const imgModal = document.getElementById('img-modal');
    const imgModalContent = document.getElementById('img-modal-content');
    const imgModalVideo = document.getElementById('img-modal-video');
    const imgModalClose = document.querySelector('.img-modal-close');
    let lastFocusedElement = null;

    function openImgModal(img) {
        lastFocusedElement = document.activeElement;
        imgModalVideo.pause();
        imgModalVideo.removeAttribute('src');
        imgModalVideo.innerHTML = '';
        imgModalVideo.hidden = true;
        imgModalContent.src = img.src;
        imgModalContent.alt = img.alt;
        imgModalContent.hidden = false;
        imgModal.hidden = false;
        imgModalClose.focus();
    }

    function openVideoModal(video) {
        lastFocusedElement = document.activeElement;
        video.pause();
        imgModalContent.hidden = true;
        imgModalContent.src = '';
        imgModalVideo.innerHTML = '';
        video.querySelectorAll('source').forEach(source => {
            const clone = document.createElement('source');
            clone.src = source.src;
            clone.type = source.type;
            imgModalVideo.appendChild(clone);
        });
        if (video.hasAttribute('aria-label')) {
            imgModalVideo.setAttribute('aria-label', video.getAttribute('aria-label'));
        }
        imgModalVideo.load();
        imgModalVideo.hidden = false;
        imgModal.hidden = false;
        imgModalVideo.play().catch(() => {});
        imgModalClose.focus();
    }

    function closeImgModal() {
        imgModal.hidden = true;
        imgModalContent.src = '';
        imgModalVideo.pause();
        imgModalVideo.removeAttribute('src');
        imgModalVideo.innerHTML = '';
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }

    if ((galleryImages.length || galleryVideoCards.length) && imgModal) {
        galleryImages.forEach(img => {
            img.addEventListener('click', () => openImgModal(img));
            img.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openImgModal(img);
                }
            });
        });

        galleryVideoCards.forEach(video => {
            video.addEventListener('click', () => openVideoModal(video));
            video.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openVideoModal(video);
                }
            });
        });

        imgModalClose.addEventListener('click', closeImgModal);

        imgModal.addEventListener('click', (e) => {
            if (e.target === imgModal) {
                closeImgModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !imgModal.hidden) {
                closeImgModal();
            }
        });
    }

});
