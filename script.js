document.addEventListener('DOMContentLoaded', () => {
    
    // Lógica para alternar as abas (Tabs) com acessibilidade
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            // Reseta todas as abas e conteúdos
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false'); // Acessibilidade
            });
            
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Ativa o botão clicado
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true'); // Acessibilidade
            
            // Busca o conteúdo correspondente
            const targetId = button.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            
            // Segurança: verifica se o ID existe antes de adicionar a classe
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Efeito de transição do cabeçalho ao rolar a página (Scroll)
    const header = document.getElementById('main-header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 60) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true }); // Otimização de performance para scroll
    }

});