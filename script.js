// Dark Mode Toggle e Funcionalidades do Site
document.addEventListener('DOMContentLoaded', function() {
    // ===== DARK MODE TOGGLE =====
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Verificar preferência salva ou do sistema
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (currentTheme === 'light') {
        document.body.classList.remove('dark-mode');
    } else if (prefersDarkScheme.matches) {
        document.body.classList.add('dark-mode');
    }

    // Clique no botão de tema
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Não aplicar smooth scroll para links externos ou âncoras inexistentes
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                // Calcular offset considerando o header fixo
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== MENU MOBILE =====
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    // Verificar se os elementos existem (para evitar erros)
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            
            // Alterar ícone do menu (opcional)
            if (navList.classList.contains('active')) {
                menuToggle.textContent = '✕'; // Ícone X quando aberto
            } else {
                menuToggle.textContent = '☰'; // Ícone hamburger quando fechado
            }
        });

        // Fechar menu ao clicar em link
        document.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener('click', function() {
                navList.classList.remove('active');
                menuToggle.textContent = '☰'; // Resetar ícone
            });
        });

        // Fechar menu ao clicar fora dele
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.header nav')) {
                navList.classList.remove('active');
                menuToggle.textContent = '☰';
            }
        });

        // Fechar menu ao redimensionar para desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768) {
                navList.classList.remove('active');
                menuToggle.textContent = '☰';
            }
        });
    }

    // ===== ANIMAÇÕES AO SCROLL =====
    function handleScrollAnimations() {
        const elements = document.querySelectorAll('.animate-fade-in-up, .animate-scale-in');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) scale(1)';
            }
        });
    }

    // Disparar animações no carregamento e no scroll
    window.addEventListener('load', handleScrollAnimations);
    window.addEventListener('scroll', handleScrollAnimations);

    // ===== PREVENIR COMPORTAMENTOS INDESEJADOS =====
    
    // Prevenir zoom em inputs no iOS
    document.addEventListener('touchstart', function() {}, { passive: true });
    
    // Melhorar performance em mobile
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, { passive: false });

    // ===== CONTROLE DE PERFORMANCE =====
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Ações após o redimensionamento parar
            handleScrollAnimations();
        }, 250);
    });
});

// ===== FUNÇÕES AUXILIARES =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== DETECÇÃO DE DISPOSITIVO MÓVEL =====
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Aplicar classes específicas para mobile
if (isMobileDevice()) {
    document.body.classList.add('mobile-device');
} else {
    document.body.classList.add('desktop-device');
}