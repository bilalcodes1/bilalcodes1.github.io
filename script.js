// ============================================
// MULTILINGUAL SUPPORT
// ============================================

const translations = {
    en: {
        home: "Home",
        about: "About",
        work: "What I Do",
        projects: "Projects",
        iot: "IoT & Hardware",
        certificates: "Certificates",
        contact: "Contact",
        viewProjects: "View Projects",
        github: "GitHub",
        linkedin: "LinkedIn",
        youtube: "YouTube",
        instagram: "Instagram",
        website: "Website",
        footer: "All rights reserved."
    },
    ar: {
        home: "الرئيسية",
        about: "عني",
        work: "ما أعمل عليه",
        projects: "المشاريع",
        iot: "IoT والأجهزة",
        certificates: "الشهادات",
        contact: "التواصل",
        viewProjects: "عرض المشاريع",
        github: "GitHub",
        linkedin: "LinkedIn",
        youtube: "YouTube",
        instagram: "Instagram",
        website: "الموقع الإلكتروني",
        footer: "جميع الحقوق محفوظة."
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';

// ============================================
// CHANGE LANGUAGE FUNCTION
// ============================================

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageContent();
    updatePageDirection();
}

// ============================================
// UPDATE PAGE CONTENT
// ============================================

function updatePageContent() {
    const t = translations[currentLanguage];
    
    // Navigation
    document.querySelectorAll('.nav-link').forEach((link, index) => {
        const keys = ['home', 'about', 'work', 'projects', 'iot', 'certificates', 'contact'];
        if (keys[index]) link.textContent = t[keys[index]];
    });
    
    // Footer
    const footerText = document.querySelector('.footer p');
    if (footerText) {
        footerText.textContent = `© 2026 Bilal Zamil Ahmed. ${t.footer}`;
    }
}

// ============================================
// UPDATE PAGE DIRECTION (RTL/LTR)
// ============================================

function updatePageDirection() {
    const html = document.documentElement;
    const body = document.body;
    
    if (currentLanguage === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
        body.classList.add('rtl');
        body.classList.remove('ltr');
    } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', currentLanguage);
        body.classList.add('ltr');
        body.classList.remove('rtl');
    }
    
    // Update language button styling
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${currentLanguage}"]`).classList.add('active');
}

// ============================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#') && this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        }
    });
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    }
});

// ============================================
// PAGE LOAD
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    updatePageContent();
    updatePageDirection();
});

// ============================================
// INTERSECTION OBSERVER FOR FADE-IN EFFECT
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and elements
document.querySelectorAll('.project-card, .iot-project-card, .activity-card, .certificate-card, .education-card, .tech-item, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});