/**
 * Script principal - eploc Landing Page
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('eploc landing page inicializada com sucesso.');

    // Detecção de navegador para personalizar o botão de instalação
    const userAgent = navigator.userAgent;
    let buttonText = "Instalar no Chrome"; // Texto padrão

    if (userAgent.includes("Edg")) {
        buttonText = "Instalar no Edge";
    } else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
        buttonText = "Instalar no Opera";
    }

    // Aplica o texto correto em todos os botões com a classe cta-button
    document.querySelectorAll('.cta-button').forEach(button => {
        button.textContent = buttonText;
    });

    // =====================================================================
    // INSTRUÇÕES PARA REVELAR A SEÇÃO DE VÍDEO E SCREENSHOTS FUTURAMENTE:
    // =====================================================================
    // 1. Abra o arquivo index.html.
    // 2. Localize a tag: <section id="media-section" class="media-section hidden">
    // 3. Remova a palavra "hidden" da propriedade class.
    // 4. Insira o iframe do YouTube e as tags <img> nos lugares indicados.

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