// ============================================
// LANGUAGE SUPPORT
// ============================================

const translations = {
    en: {
        home: "Home",
        about: "About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        heroSubtitle: "Third-year Computer Science Student at University of Anbar",
        heroDescription: "I build practical, AI-assisted software projects to learn programming, problem-solving, automation, and real-world development workflows. My focus is not only writing code, but also understanding ideas, testing results, improving user experience, documenting projects, and publishing usable tools.",
        viewProjects: "View Projects",
        githubProfile: "GitHub Profile",
        aboutTitle: "About Me",
        aboutText1: "I am a third-year Computer Science student at the University of Anbar, interested in building practical software tools and learning through real projects.",
        aboutText2: "I use AI-assisted development as part of my learning process. I focus on turning ideas into working projects, understanding and improving generated code, testing features, fixing problems, writing documentation, and publishing usable tools.",
        whatIWorkOn: "What I Work On",
        featuredProjects: "Featured Projects",
        educationalVisualizations: "Educational Visualizations",
        techStack: "Tech Stack",
        contactTitle: "Contact & Links",
        contactText: "Feel free to reach out or explore my work through these links.",
        location: "Iraq, Anbar",
        footer: "All rights reserved."
    },
    ar: {
        home: "الرئيسية",
        about: "عني",
        projects: "المشاريع",
        skills: "المهارات",
        contact: "التواصل",
        heroSubtitle: "طالب علوم حاسوب في السنة الثالثة بجامعة الأنبار",
        heroDescription: "أبني مشاريع برمجية عملية بمساعدة الذكاء الاصطناعي لتعلم البرمجة وحل المشاكل والأتمتة وسير العمل الفعلي. تركيزي ليس فقط على كتابة الكود، بل أيضاً على فهم الأفكار، واختبار النتائج، وتحسين تجربة المستخدم، وتوثيق المشاريع، ونشر الأدوات القابلة للاستخدام.",
        viewProjects: "عرض المشاريع",
        githubProfile: "ملف GitHub",
        aboutTitle: "عني",
        aboutText1: "أنا طالب علوم حاسوب في السنة الثالثة بجامعة الأنبار، مهتم بإنشاء أدوات برمجية عملية والتعلم من خلال المشاريع الحقيقية.",
        aboutText2: "أستخدم التطوير بمساعدة الذكاء الاصطناعي كجزء من عملية تعلمي. أركز على تحويل الأفكار إلى مشاريع فعالة، وفهم وتحسين الكود المُنتج، واختبار الميزات، وحل المشاكل، وكتابة التوثيق، ونشر الأدوات المفيدة.",
        whatIWorkOn: "ما أعمل عليه",
        featuredProjects: "المشاريع المختارة",
        educationalVisualizations: "الرسوميات التعليمية",
        techStack: "مكدس التقنيات",
        contactTitle: "التواصل والروابط",
        contactText: "لا تتردد في التواصل أو استكشاف أعمالي من خلال هذه الروابط.",
        location: "العراق، الأنبار",
        footer: "جميع الحقوق محفوظة."
    },
    de: {
        home: "Startseite",
        about: "Über",
        projects: "Projekte",
        skills: "Fähigkeiten",
        contact: "Kontakt",
        heroSubtitle: "Dritte Jahr Informatikstudent an der Universität Anbar",
        heroDescription: "Ich entwickle praktische, KI-gestützte Softwareprojekte, um Programmierung, Problemlösung, Automatisierung und echte Entwicklungs-Workflows zu lernen. Mein Fokus liegt nicht nur auf dem Schreiben von Code, sondern auch auf dem Verstehen von Ideen, dem Testen von Ergebnissen, der Verbesserung der Benutzererfahrung, der Dokumentation von Projekten und der Veröffentlichung nützlicher Tools.",
        viewProjects: "Projekte anzeigen",
        githubProfile: "GitHub-Profil",
        aboutTitle: "Über Mich",
        aboutText1: "Ich bin ein Informatikstudent im dritten Jahr an der Universität Anbar und interessiere mich für den Aufbau praktischer Softwaretools und das Lernen durch echte Projekte.",
        aboutText2: "Ich nutze KI-gestützte Entwicklung als Teil meines Lernprozesses. Ich konzentriere mich darauf, Ideen in funktionierende Projekte umzuwandeln, erzeugten Code zu verstehen und zu verbessern, Funktionen zu testen, Probleme zu beheben, Dokumentation zu schreiben und nützliche Tools zu veröffentlichen.",
        whatIWorkOn: "Womit ich arbeite",
        featuredProjects: "Ausgewählte Projekte",
        educationalVisualizations: "Lernvisualisierungen",
        techStack: "Tech-Stack",
        contactTitle: "Kontakt & Links",
        contactText: "Zögern Sie nicht, mich zu kontaktieren oder meine Arbeiten über diese Links zu erkunden.",
        location: "Irak, Anbar",
        footer: "Alle Rechte vorbehalten."
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
        const keys = ['home', 'about', 'projects', 'skills', 'contact'];
        if (keys[index]) link.textContent = t[keys[index]];
    });
    
    // Hero Section
    document.querySelector('.hero-subtitle').textContent = t.heroSubtitle;
    document.querySelector('.hero-description').textContent = t.heroDescription;
    
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons[0].textContent = t.viewProjects;
    heroButtons[1].textContent = t.githubProfile;
    
    // About Section
    document.querySelectorAll('.section-title')[0].textContent = t.aboutTitle;
    document.querySelectorAll('.about-content p')[0].textContent = t.aboutText1;
    document.querySelectorAll('.about-content p')[1].textContent = t.aboutText2;
    
    const whatIWorkOn = document.querySelector('.subsection-title');
    if (whatIWorkOn) whatIWorkOn.textContent = t.whatIWorkOn;
    
    // Projects Section
    const projectsTitle = document.querySelectorAll('.section-title')[1];
    if (projectsTitle) projectsTitle.textContent = t.featuredProjects;
    
    const eduTitle = document.querySelector('.section-subtitle');
    if (eduTitle) eduTitle.textContent = t.educationalVisualizations;
    
    // Skills Section
    const skillsTitle = document.querySelectorAll('.section-title')[2];
    if (skillsTitle) skillsTitle.textContent = t.techStack;
    
    // Contact Section
    const contactTitle = document.querySelectorAll('.section-title')[3];
    if (contactTitle) contactTitle.textContent = t.contactTitle;
    
    const contactText = document.querySelector('.contact-text');
    if (contactText) contactText.textContent = t.contactText;
    
    const contactLocation = document.querySelector('.contact-location');
    if (contactLocation) {
        contactLocation.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${t.location}`;
    }
    
    // Footer
    document.querySelector('.footer p').textContent = `© 2026 Bilal Zamil Ahmed. ${t.footer}`;
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
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
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

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
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

// Observe project cards and other elements
document.querySelectorAll('.project-card, .tech-item, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});