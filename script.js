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

    // Tutoriais em vídeo: montados a partir de videos.json (mesmo arquivo que a
    // extensão lê) + videos-meta.json (títulos e temas). Só entram os ids com URL
    // preenchida; sem nenhum vídeo (ou sem rede), a seção e seus links ficam ocultos.
    const videoGrid = document.getElementById('video-grid');
    const videoFilters = document.getElementById('video-filters');
    const videoModal = document.getElementById('video-modal');
    const videoModalFrame = document.getElementById('video-modal-frame');
    const videoModalClose = videoModal && videoModal.querySelector('.video-modal-close');
    let videoTrigger = null;

    function parseYouTube(rawUrl) {
        try {
            const url = new URL(rawUrl);
            const host = url.hostname.replace(/^(www|m)\./, '');
            let id = null;
            let portrait = false;

            if (host === 'youtu.be') {
                id = url.pathname.slice(1);
            } else if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
                const match = url.pathname.match(/^\/(shorts|embed|live)\/([\w-]+)/);
                if (match) {
                    id = match[2];
                    portrait = match[1] === 'shorts';
                } else if (url.pathname === '/watch') {
                    id = url.searchParams.get('v');
                }
            }
            if (!id || !/^[\w-]{6,}$/.test(id)) return null;

            // t=90, t=90s ou t=1m30s
            let start = 0;
            const t = url.searchParams.get('t') || url.searchParams.get('start');
            const parts = t && t.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s?)?$/);
            if (parts) start = (+parts[1] || 0) * 3600 + (+parts[2] || 0) * 60 + (+parts[3] || 0);

            return { id, portrait, start };
        } catch (e) {
            return null;
        }
    }

    function openTutorialModal(video, trigger) {
        videoTrigger = trigger;
        let src = 'https://www.youtube.com/embed/' + encodeURIComponent(video.id) + '?autoplay=1&rel=0';
        if (video.start) src += '&start=' + video.start;

        const iframe = document.createElement('iframe');
        iframe.src = src;
        iframe.title = video.title;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;

        videoModalFrame.classList.toggle('is-portrait', video.portrait);
        videoModalFrame.replaceChildren(iframe);
        videoModal.hidden = false;
        videoModalClose.focus();
    }

    function closeTutorialModal() {
        videoModal.hidden = true;
        videoModalFrame.replaceChildren();
        if (videoTrigger) videoTrigger.focus();
    }

    function buildVideoCard(item) {
        const isEmbeddable = Boolean(item.yt);
        const card = document.createElement(isEmbeddable ? 'button' : 'a');
        card.className = 'tut-card';
        if (isEmbeddable) {
            card.type = 'button';
        } else {
            card.href = item.url;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
        }
        card.dataset.group = item.group;
        card.innerHTML =
            '<span class="tut-poster">' +
                '<span class="tut-tag"></span>' +
                '<span class="tut-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z"></path></svg></span>' +
            '</span>' +
            '<span class="tut-title"></span>';
        card.querySelector('.tut-tag').textContent = item.group;
        card.querySelector('.tut-title').textContent = item.title;
        card.setAttribute('aria-label', 'Assistir: ' + item.title + (isEmbeddable ? '' : ' (abre em nova aba)'));

        if (isEmbeddable) {
            card.addEventListener('click', () => openTutorialModal({ ...item.yt, title: item.title }, card));
        }
        return card;
    }

    function buildVideoFilters(groups, cards) {
        if (groups.length < 2) return;

        const chips = ['Todos', ...groups].map((label, index) => {
            const chip = document.createElement('button');
            chip.type = 'button';
            chip.className = 'filter-chip';
            chip.textContent = label;
            chip.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');
            chip.addEventListener('click', () => {
                chips.forEach(c => c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'));
                cards.forEach(card => {
                    card.hidden = index !== 0 && card.dataset.group !== label;
                });
            });
            return chip;
        });

        videoFilters.replaceChildren(...chips);
        videoFilters.hidden = false;
    }

    // Botões "Ver vídeo" nos cards de recursos e itens de detalhes que declaram
    // data-video="<id do script>": só aparecem quando o id tem URL em videos.json.
    function attachVideoLinks(items) {
        const byId = new Map(items.map(item => [item.id, item]));

        document.querySelectorAll('[data-video]').forEach(host => {
            const item = byId.get(host.dataset.video);
            if (!item) return;

            const link = document.createElement(item.yt ? 'button' : 'a');
            link.className = 'video-link';
            link.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4l14 8-14 8z"></path></svg>Ver vídeo';
            link.setAttribute('aria-label', 'Ver vídeo: ' + item.title + (item.yt ? '' : ' (abre em nova aba)'));

            if (item.yt) {
                link.type = 'button';
                link.addEventListener('click', () => openTutorialModal({ ...item.yt, title: item.title }, link));
            } else {
                link.href = item.url;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }

            (host.classList.contains('feature-card') ? host : host.querySelector('span') || host).appendChild(link);
        });
    }

    async function loadVideoGallery() {
        const [videos, meta] = await Promise.all([
            fetch('videos.json', { cache: 'no-cache' }).then(r => r.ok ? r.json() : {}),
            fetch('videos-meta.json', { cache: 'no-cache' }).then(r => r.ok ? r.json() : {}).catch(() => ({}))
        ]);

        // Ordem: a do videos-meta.json (agrupada por tema); ids sem metadados vão ao final
        const metaOrder = Object.keys(meta);
        const items = Object.entries(videos)
            .filter(([, url]) => typeof url === 'string' && url.trim())
            .map(([id, url]) => ({
                id,
                url: url.trim(),
                title: (meta[id] && meta[id].name) || id,
                group: (meta[id] && meta[id].group) || 'Outros',
                yt: parseYouTube(url.trim())
            }))
            .sort((a, b) => {
                const ia = metaOrder.indexOf(a.id);
                const ib = metaOrder.indexOf(b.id);
                return (ia < 0 ? Infinity : ia) - (ib < 0 ? Infinity : ib);
            });

        if (!items.length) return;

        attachVideoLinks(items);

        const cards = items.map(buildVideoCard);
        videoGrid.replaceChildren(...cards);
        buildVideoFilters([...new Set(items.map(item => item.group))], cards);
        document.querySelectorAll('[data-needs-videos]').forEach(el => { el.hidden = false; });
    }

    if (videoGrid && videoModal) {
        loadVideoGallery().catch(() => {});

        videoModalClose.addEventListener('click', closeTutorialModal);
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) closeTutorialModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !videoModal.hidden) closeTutorialModal();
        });
    }

});
