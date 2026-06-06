// ============================================
// LANGUAGE SUPPORT
// ============================================

const translations = {
    en: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        heroTitle: "Bilal Zamil Ahmed",
        heroSubtitle: "Computer Science Student",
        heroDescription: "Passionate about programming, technology, and understanding how software and computer systems work.",
        viewWork: "View My Work",
        getInTouch: "Get in Touch",
        aboutMe: "About Me",
        aboutText1: "I'm a Computer Science student at the University of Anbar, College of Computer Science and Information Technology. I have a strong interest in programming, software development, and understanding the fundamentals of how computer systems work.",
        aboutText2: "My passion lies in solving complex problems through code and continuously learning new technologies and programming paradigms.",
        education: "Education",
        universityName: "University of Anbar",
        college: "College of Computer Science and Information Technology",
        department: "Department of Computer Science",
        interests: "Interests",
        programming: "Programming",
        softwareDev: "Software Development",
        webTech: "Web Technologies",
        computerSystems: "Computer Systems",
        projectsTitle: "Projects",
        comingSoon: "Coming Soon",
        projectDesc: "I'm working on some exciting projects. Check back soon!",
        getInTouchText: "Feel free to reach out to me on any of these platforms:",
        github: "GitHub",
        instagram: "Instagram",
        telegram: "Telegram",
        footer: "All rights reserved."
    },
    ar: {
        home: "الرئيسية",
        about: "عني",
        projects: "المشاريع",
        contact: "التواصل",
        heroTitle: "بلال زامل أحمد",
        heroSubtitle: "طالب علوم الحاسوب",
        heroDescription: "مهتم بالبرمجة والتكنولوجيا وفهم كيفية عمل البرامج وأنظمة الحاسوب.",
        viewWork: "شاهد أعمالي",
        getInTouch: "تواصل معي",
        aboutMe: "عني",
        aboutText1: "أنا طالب علوم حاسوب في جامعة الأنبار، كلية علوم الحاسوب وتكنولوجيا المعلومات. لدي اهتمام قوي بالبرمجة وتطوير البرامج وفهم أساسيات أنظمة الحاسوب.",
        aboutText2: "شغفي يكمن في حل المشاكل المعقدة من خلال الكود والتعلم المستمر للتقنيات الجديدة وأنماط البرمجة.",
        education: "التعليم",
        universityName: "جامعة الأنبار",
        college: "كلية علوم الحاسوب وتكنولوجيا المعلومات",
        department: "قسم علوم الحاسوب",
        interests: "الاهتمامات",
        programming: "البرمجة",
        softwareDev: "تطوير البرامج",
        webTech: "تقنيات الويب",
        computerSystems: "أنظمة الحاسوب",
        projectsTitle: "المشاريع",
        comingSoon: "قريباً",
        projectDesc: "أنا أعمل على مشاريع مثيرة. عد قريباً!",
        getInTouchText: "لا تتردد في التواصل معي عبر أي من هذه المنصات:",
        github: "GitHub",
        instagram: "Instagram",
        telegram: "Telegram",
        footer: "جميع الحقوق محفوظة."
    },
    de: {
        home: "Startseite",
        about: "Über",
        projects: "Projekte",
        contact: "Kontakt",
        heroTitle: "Bilal Zamil Ahmed",
        heroSubtitle: "Informatikstudent",
        heroDescription: "Leidenschaftlich für Programmierung, Technologie und das Verständnis der Funktionsweise von Software und Computersystemen.",
        viewWork: "Meine Arbeiten anzeigen",
        getInTouch: "Kontakt aufnehmen",
        aboutMe: "Über Mich",
        aboutText1: "Ich bin ein Informatikstudent an der Universität Anbar, Fakultät für Informatik und Informationstechnologie. Ich habe ein starkes Interesse an Programmierung, Softwareentwicklung und dem Verständnis der Grundlagen von Computersystemen.",
        aboutText2: "Meine Leidenschaft liegt darin, komplexe Probleme durch Code zu lösen und ständig neue Technologien und Programmierparadigmen zu erlernen.",
        education: "Bildung",
        universityName: "Universität Anbar",
        college: "Fakultät für Informatik und Informationstechnologie",
        department: "Abteilung Informatik",
        interests: "Interessen",
        programming: "Programmierung",
        softwareDev: "Softwareentwicklung",
        webTech: "Web-Technologien",
        computerSystems: "Computersysteme",
        projectsTitle: "Projekte",
        comingSoon: "Demnächst",
        projectDesc: "Ich arbeite an einigen spannenden Projekten. Kommen Sie bald zurück!",
        getInTouchText: "Zögern Sie nicht, mich auf einer dieser Plattformen zu kontaktieren:",
        github: "GitHub",
        instagram: "Instagram",
        telegram: "Telegram",
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
        const keys = ['home', 'about', 'projects', 'contact'];
        if (keys[index]) link.textContent = t[keys[index]];
    });
    
    // Hero Section
    document.querySelector('.hero-title').textContent = t.heroTitle;
    document.querySelector('.hero-subtitle').textContent = t.heroSubtitle;
    document.querySelector('.hero-description').textContent = t.heroDescription;
    
    const buttons = document.querySelectorAll('.hero-buttons .btn');
    buttons[0].textContent = t.viewWork;
    buttons[1].textContent = t.getInTouch;
    
    // About Section
    document.querySelectorAll('.section-title')[0].textContent = t.aboutMe;
    document.querySelectorAll('.about-content p')[0].textContent = t.aboutText1;
    document.querySelectorAll('.about-content p')[1].textContent = t.aboutText2;
    
    // Education Info
    const infoItems = document.querySelectorAll('.info-item');
    infoItems[0].querySelector('h3').textContent = t.education;
    infoItems[0].querySelectorAll('p')[0].textContent = t.universityName;
    infoItems[0].querySelectorAll('p')[1].textContent = t.college;
    infoItems[0].querySelectorAll('p')[2].textContent = t.department;
    
    // Interests
    infoItems[1].querySelector('h3').textContent = t.interests;
    const interestsList = infoItems[1].querySelectorAll('.interests-list li');
    interestsList[0].textContent = t.programming;
    interestsList[1].textContent = t.softwareDev;
    interestsList[2].textContent = t.webTech;
    interestsList[3].textContent = t.computerSystems;
    
    // Projects Section
    document.querySelectorAll('.section-title')[1].textContent = t.projectsTitle;
    document.querySelector('.project-card h3').textContent = t.comingSoon;
    document.querySelector('.project-card p').textContent = t.projectDesc;
    
    // Contact Section
    document.querySelectorAll('.section-title')[2].textContent = t.contact;
    document.querySelector('.contact-content p').textContent = t.getInTouchText;
    
    // Social Links
    const socialLinks = document.querySelectorAll('.social-link span');
    const socialLabels = ['github', 'instagram', 'telegram'];
    socialLinks.forEach((link, index) => {
        if (socialLabels[index]) {
            link.textContent = t[socialLabels[index]];
        }
    });
    
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
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
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
// PAGE LOAD ANIMATION
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
document.querySelectorAll('.project-card, .info-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});