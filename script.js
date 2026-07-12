/**
 * Script principal - eploc Landing Page
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('eploc landing page inicializada com sucesso.');

    // =====================================================================
    // INSTRUÇÕES PARA REVELAR A SEÇÃO DE VÍDEO E SCREENSHOTS FUTURAMENTE:
    // =====================================================================
    // 1. Abra o arquivo index.html.
    // 2. Localize a tag: <section id="media-section" class="media-section hidden">
    // 3. Remova a palavra "hidden" da propriedade class.
    // 4. Insira o iframe do YouTube e as tags <img> nos lugares indicados.
    
    // Alternativamente, se quiser remover a classe por JavaScript no futuro:
    // const mediaSection = document.getElementById('media-section');
    // mediaSection.classList.remove('hidden');

    // Efeito suave de rolagem para links âncora (se você adicionar links internos no futuro)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});