// ============================================
// FULL MULTILINGUAL SUPPORT: EN / AR / DE
// ============================================

const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.work": "What I Do",
        "nav.projects": "Projects",
        "nav.iot": "IoT & Hardware",
        "nav.certificates": "Certificates",
        "nav.contact": "Contact",

        "hero.title": "Bilal Zamil Ahmed",
        "hero.subtitle": "Third-year Computer Science student building practical software, AI-assisted tools, and hands-on tech projects.",
        "hero.description": "I build real student-focused projects such as Telegram bots, web tools, mobile apps, and IoT prototypes. I care about practical systems that solve clear problems.",
        "hero.viewProjects": "View Projects",
        "hero.contactMe": "Contact Me",
        "hero.downloadCv": "Download CV",
        "hero.cvNote": "CV will be added soon.",

        "about.title": "About Me",
        "about.p1": "I am a third-year Computer Science student at the University of Anbar, interested in building practical software tools and learning through real projects.",
        "about.p2": "I use AI-assisted development as part of my learning process. I focus on turning ideas into working projects, understanding and improving generated code, testing features, fixing problems, writing documentation, and publishing usable tools.",
        "about.p3": "I also enjoy hands-on technology projects, including IoT systems, hardware experiments, electronic components, and educational visualizations.",

        "work.title": "What I Work On",
        "work.ai": "AI-Assisted Software",
        "work.telegram": "Telegram Bots",
        "work.web": "Web Applications",
        "work.desktop": "Desktop Tools",
        "work.android": "Android Apps",
        "work.iot": "IoT & Embedded",
        "work.educational": "Educational Tools",
        "work.arabic": "Arabic Learning",
        "work.serverless": "Serverless Backends",
        "work.hardware": "Hardware Experiments",

        "software.title": "Featured Software Projects",
        "project.uoadrop.status": "Desktop Application",
        "project.uoadrop.description": "A desktop-first, local-first print request management system for university print shops, built with Electron, Fastify, SQLite, React, Next.js, and Supabase.",
        "project.deutschdrop.status": "Telegram Bot",
        "project.deutschdrop.description": "Telegram bot for learning German vocabulary with SRS, CSV import, XP, challenges, daily tasks, achievements, and a Cloudflare Workers/D1 backend.",
        "project.gymtech.status": "Mobile App",
        "project.gymtech.description": "AI-powered Arabic fitness Android app built with Kotlin, Jetpack Compose, Clean Architecture, Room, Hilt, and OpenAI.",
        "project.garden.status": "Educational Website",
        "project.garden.description": "Arabic environmental educational website connected to a printed QR code for the Student Activities Garden at the College of Computer Science, University of Anbar.",
        "project.achievements.status": "Web Application",
        "project.achievements.description": "Arabic student achievements wall for Anbar CS students, with login, weekly tasks, progress tracking, admin task management, and Google Sheets backend.",
        "project.matrix.status": "Interactive Tool",
        "project.matrix.description": "Interactive C++ matrix simulator with visual grid, online code execution, and matrix output visualization using HTML, CSS, JavaScript, and Wandbox API.",

        "iot.title": "IoT & Hardware Projects",
        "iot.fingerprint.title": "Fingerprint-Based Attendance System",
        "iot.fingerprint.category": "Biometric IoT System",
        "iot.fingerprint.description": "A biometric attendance system built with ESP32, AS608 fingerprint sensor, DS3231 real-time clock, OLED display, Google Sheets integration, and a custom web dashboard.",
        "iot.features.title": "Key Features",
        "iot.features.f1": "Fingerprint-based identity verification",
        "iot.features.f2": "Real-time attendance logging",
        "iot.features.f3": "Date and time tracking",
        "iot.features.f4": "Google Sheets cloud logging",
        "iot.features.f5": "OLED feedback display",
        "iot.features.f6": "Web dashboard for user management",
        "iot.features.f7": "Remote register, update, and delete actions",
        "iot.gallery.title": "Project Gallery",
        "iot.gallery.demo": "System Demo",
        "iot.gallery.hardware": "Device Hardware",
        "iot.why.title": "Why It Matters",
        "iot.why.text": "This project combines hardware and software to solve a real problem: reducing manual attendance and preventing proxy attendance. It demonstrates IoT integration, cloud connectivity, and practical system design—all important skills for real-world development.",

        "activities.title": "Hands-On Creative Tech Activities",
        "activities.cpp.title": "C++ / Computer Science Wooden Display",
        "activities.cpp.category": "Creative Tech / Handmade",
        "activities.cpp.description": "A handmade wooden display inspired by C++ and Computer Science, created as a hands-on creative tech activity.",
        "activities.iphone.title": "iPhone 6 Teardown & Component Display",
        "activities.iphone.category": "Hardware / Electronics / Component Study",
        "activities.iphone.description": "A hardware teardown and component display project using an iPhone 6, arranged inside a framed board to show internal phone components in an educational way.",

        "certificates.title": "Certificates",
        "certificates.huawei.name": "Issued to: Bilal Zamil",
        "certificates.huawei.date": "Issue Date: April 26, 2026",
        "certificates.huawei.code": "Certificate Code: ICT20260426000046",
        "certificates.huawei.description": "Certificate of Completion for successfully completing the study and exam of openGauss Database Technology and Applications through Huawei ICT Academy. This is a course completion certificate, not a professional Huawei certification exam.",
        "certificates.student.issuer": "University of Anbar",
        "certificates.student.title": "Student Activities Appreciation Certificate",
        "certificates.student.name": "Awarded to: Bilal Zamil Ahmed",
        "certificates.student.date": "Date: December 24, 2025",
        "certificates.student.code": "Issued by: College of Computer Science and Information Technology",
        "certificates.student.description": "A certificate of appreciation awarded for participation and distinguished efforts in Student Activities Division activities and during the preparation period of the Student Activities Garden.",

        "education.title": "Educational Visualizations",
        "education.seg.title": "Segmentation in the 8086 Processor",
        "education.seg.description": "Interactive Arabic educational page explaining 8086 memory segmentation and physical address calculation.",
        "education.addr.title": "Logical and Physical Address in 8086",
        "education.addr.description": "Interactive Arabic tutorial explaining logical and physical addresses in the 8086 processor, with Segment:Offset calculation and visual memory examples.",
        "common.view": "View",

        "tech.title": "Tech Stack",
        "contact.title": "Contact & Links",
        "contact.text": "Feel free to reach out or explore my work through these links.",
        "contact.location": "Iraq, Anbar",
        "footer.text": "© 2026 Bilal Zamil Ahmed. All rights reserved."
    },

    ar: {
        "nav.home": "الرئيسية",
        "nav.about": "عني",
        "nav.work": "مجالاتي",
        "nav.projects": "المشاريع",
        "nav.iot": "إنترنت الأشياء والهاردوير",
        "nav.certificates": "الشهادات",
        "nav.contact": "التواصل",

        "hero.title": "بلال زامل أحمد",
        "hero.subtitle": "طالب علوم حاسوب في المرحلة الثالثة، أبني برمجيات عملية وأدوات مدعومة بالذكاء الاصطناعي ومشاريع تقنية تطبيقية.",
        "hero.description": "أبني مشاريع حقيقية تركز على الطلاب مثل بوتات تيليجرام وأدوات ويب وتطبيقات موبايل ونماذج إنترنت الأشياء (IoT). أهتم بالأنظمة العملية التي تحل مشاكل واضحة.",
        "hero.viewProjects": "عرض المشاريع",
        "hero.contactMe": "تواصل معي",
        "hero.downloadCv": "تحميل السيرة الذاتية",
        "hero.cvNote": "سيتم إضافة السيرة الذاتية قريباً.",

        "about.title": "عني",
        "about.p1": "أنا طالب مرحلة ثالثة في قسم علوم الحاسوب بجامعة الأنبار، مهتم ببناء أدوات برمجية عملية والتعلم من خلال مشاريع حقيقية.",
        "about.p2": "أستخدم التطوير بمساعدة الذكاء الاصطناعي كجزء من عملية التعلم. أركز على تحويل الأفكار إلى مشاريع تعمل، وفهم الكود الناتج وتحسينه، واختبار الميزات، وإصلاح المشاكل، وكتابة التوثيق، ونشر أدوات مفيدة.",
        "about.p3": "أهتم أيضًا بالمشاريع التقنية العملية مثل أنظمة إنترنت الأشياء، تجارب الهاردوير، المكونات الإلكترونية، والصفحات التعليمية التفاعلية.",

        "work.title": "ما أعمل عليه",
        "work.ai": "مشاريع برمجية بمساعدة الذكاء الاصطناعي",
        "work.telegram": "بوتات تيليجرام",
        "work.web": "تطبيقات ويب",
        "work.desktop": "أدوات ديسكتوب",
        "work.android": "تطبيقات أندرويد",
        "work.iot": "إنترنت الأشياء والأنظمة المدمجة",
        "work.educational": "أدوات تعليمية",
        "work.arabic": "تعلم عربي وأدوات جامعية",
        "work.serverless": "خلفيات سيرفرلس",
        "work.hardware": "تجارب هاردوير",

        "software.title": "مشاريع برمجية مميزة",
        "project.uoadrop.status": "تطبيق ديسكتوب",
        "project.uoadrop.description": "نظام لإدارة طلبات الطباعة لمكاتب الطباعة الجامعية، يعمل أولًا محليًا وعلى الديسكتوب، ومبني باستخدام Electron وFastify وSQLite وReact وNext.js وSupabase.",
        "project.deutschdrop.status": "بوت تيليجرام",
        "project.deutschdrop.description": "بوت تيليجرام لتعلم مفردات اللغة الألمانية باستخدام التكرار المتباعد SRS ورفع CSV ونقاط XP وتحديات ومهام يومية وإنجازات، مع Backend على Cloudflare Workers وD1.",
        "project.gymtech.status": "تطبيق موبايل",
        "project.gymtech.description": "تطبيق أندرويد عربي للياقة البدنية مدعوم بالذكاء الاصطناعي، مبني باستخدام Kotlin وJetpack Compose وClean Architecture وRoom وHilt وOpenAI.",
        "project.garden.status": "موقع تعليمي",
        "project.garden.description": "موقع عربي تعليمي بيئي مرتبط بباركود مطبوع لحديقة النشاطات الطلابية في كلية علوم الحاسوب بجامعة الأنبار.",
        "project.achievements.status": "تطبيق ويب",
        "project.achievements.description": "حائط إنجازات عربي لطلبة علوم الحاسوب في الأنبار، يحتوي تسجيل دخول ومهام أسبوعية وتتبع تقدم وإدارة مهام، مع Google Sheets كخلفية.",
        "project.matrix.status": "أداة تفاعلية",
        "project.matrix.description": "محاكي تفاعلي لمصفوفات C++ مع شبكة مرئية وتشغيل كود أونلاين وعرض ناتج المصفوفات باستخدام HTML وCSS وJavaScript وWandbox API.",

        "iot.title": "مشاريع إنترنت الأشياء والهاردوير",
        "iot.fingerprint.title": "نظام حضور بالبصمة",
        "iot.fingerprint.category": "نظام IoT بايومتري",
        "iot.fingerprint.description": "نظام حضور بايومتري مبني باستخدام ESP32 وحساس بصمة AS608 وساعة حقيقية DS3231 وشاشة OLED وتكامل مع Google Sheets ولوحة تحكم ويب مخصصة.",
        "iot.features.title": "الميزات الأساسية",
        "iot.features.f1": "تحقق من الهوية باستخدام البصمة",
        "iot.features.f2": "تسجيل حضور بالوقت الحقيقي",
        "iot.features.f3": "تتبع التاريخ والوقت",
        "iot.features.f4": "تسجيل سحابي في Google Sheets",
        "iot.features.f5": "عرض ملاحظات مباشرة على شاشة OLED",
        "iot.features.f6": "لوحة ويب لإدارة المستخدمين",
        "iot.features.f7": "إضافة وتعديل وحذف البصمات عن بعد",
        "iot.gallery.title": "معرض المشروع",
        "iot.gallery.demo": "عرض النظام",
        "iot.gallery.hardware": "الهاردوير",
        "iot.why.title": "أهمية المشروع",
        "iot.why.text": "يجمع هذا المشروع بين الهاردوير والسوفتوير لحل مشكلة واقعية: تقليل الحضور اليدوي والحد من الحضور بالنيابة. يوضح المشروع مهارات التكامل مع IoT والاتصال السحابي وتصميم الأنظمة العملية.",

        "activities.title": "أنشطة تقنية عملية وإبداعية",
        "activities.cpp.title": "مجسم خشبي لـ C++ وعلوم الحاسوب",
        "activities.cpp.category": "تقنية إبداعية / عمل يدوي",
        "activities.cpp.description": "مجسم خشبي مصنوع يدويًا ومستوحى من C++ وعلوم الحاسوب، كفعالية تقنية إبداعية عملية.",
        "activities.iphone.title": "تفكيك iPhone 6 وعرض مكوناته",
        "activities.iphone.category": "هاردوير / إلكترونيات / دراسة مكونات",
        "activities.iphone.description": "مشروع تفكيك وعرض مكونات جهاز iPhone 6 داخل لوحة مؤطرة، لعرض مكونات الهاتف الداخلية بطريقة تعليمية.",

        "certificates.title": "الشهادات",
        "certificates.huawei.name": "صادرة إلى: بلال زامل",
        "certificates.huawei.date": "تاريخ الإصدار: 26 نيسان 2026",
        "certificates.huawei.code": "رمز الشهادة: ICT20260426000046",
        "certificates.huawei.description": "شهادة إكمال بعد إتمام دراسة واختبار openGauss Database Technology and Applications عبر Huawei ICT Academy. هذه شهادة إكمال دورة وليست امتحان شهادة احترافية من هواوي.",
        "certificates.student.issuer": "جامعة الأنبار",
        "certificates.student.title": "شهادة شكر وتقدير للنشاطات الطلابية",
        "certificates.student.name": "مقدمة إلى: بلال زامل أحمد",
        "certificates.student.date": "التاريخ: 24 كانون الأول 2025",
        "certificates.student.code": "صادرة من: كلية علوم الحاسوب وتكنولوجيا المعلومات",
        "certificates.student.description": "شهادة تقدير للمشاركة والجهود المتميزة في أنشطة شعبة النشاطات الطلابية وخلال فترة إعداد ميدان النشاطات الطلابية.",

        "education.title": "تصورات تعليمية تفاعلية",
        "education.seg.title": "التقسيم في معالج 8086",
        "education.seg.description": "صفحة تعليمية عربية تفاعلية تشرح Memory Segmentation في معالج 8086 وحساب العنوان الفيزيائي.",
        "education.addr.title": "العنوان المنطقي والفيزيائي في 8086",
        "education.addr.description": "شرح عربي تفاعلي للعنوان المنطقي والفيزيائي في معالج 8086 مع حساب Segment:Offset وأمثلة بصرية للذاكرة.",
        "common.view": "عرض",

        "tech.title": "التقنيات",
        "contact.title": "التواصل والروابط",
        "contact.text": "يمكنك التواصل معي أو استكشاف أعمالي من خلال هذه الروابط.",
        "contact.location": "العراق، الأنبار",
        "footer.text": "© 2026 بلال زامل أحمد. جميع الحقوق محفوظة."
    },

    de: {
        "nav.home": "Start",
        "nav.about": "Über mich",
        "nav.work": "Schwerpunkte",
        "nav.projects": "Projekte",
        "nav.iot": "IoT & Hardware",
        "nav.certificates": "Zertifikate",
        "nav.contact": "Kontakt",

        "hero.title": "Bilal Zamil Ahmed",
        "hero.subtitle": "Informatikstudent im dritten Studienjahr. Ich entwickle praktische Software, KI-gestützte Tools und praxisnahe Technikprojekte.",
        "hero.description": "Ich baue echte, studentenorientierte Projekte wie Telegram-Bots, Web-Tools, mobile Apps und IoT-Prototypen. Mir sind praktische Systeme wichtig, die klare Probleme lösen.",
        "hero.viewProjects": "Projekte ansehen",
        "hero.contactMe": "Kontaktieren Sie mich",
        "hero.downloadCv": "Lebenslauf herunterladen",
        "hero.cvNote": "Lebenslauf wird bald hinzugefügt.",

        "about.title": "Über mich",
        "about.p1": "Ich bin Informatikstudent im dritten Studienjahr an der Universität Anbar und interessiere mich dafür, praktische Software-Tools zu bauen und durch reale Projekte zu lernen.",
        "about.p2": "Ich nutze KI-unterstützte Entwicklung als Teil meines Lernprozesses. Ich konzentriere mich darauf, Ideen in funktionierende Projekte umzusetzen, generierten Code zu verstehen und zu verbessern, Funktionen zu testen, Probleme zu lösen, Dokumentation zu schreiben und nutzbare Tools zu veröffentlichen.",
        "about.p3": "Außerdem interessiere ich mich für praktische Technikprojekte wie IoT-Systeme, Hardware-Experimente, elektronische Komponenten und interaktive Lernvisualisierungen.",

        "work.title": "Woran ich arbeite",
        "work.ai": "KI-unterstützte Software",
        "work.telegram": "Telegram-Bots",
        "work.web": "Webanwendungen",
        "work.desktop": "Desktop-Tools",
        "work.android": "Android-Apps",
        "work.iot": "IoT & Embedded",
        "work.educational": "Lern-Tools",
        "work.arabic": "Arabische Lern- und Uni-Tools",
        "work.serverless": "Serverless Backends",
        "work.hardware": "Hardware-Experimente",

        "software.title": "Ausgewählte Softwareprojekte",
        "project.uoadrop.status": "Desktop-Anwendung",
        "project.uoadrop.description": "Ein desktop-first und local-first System zur Verwaltung von Druckaufträgen für universitäre Druckshops, entwickelt mit Electron, Fastify, SQLite, React, Next.js und Supabase.",
        "project.deutschdrop.status": "Telegram-Bot",
        "project.deutschdrop.description": "Telegram-Bot zum Lernen deutscher Vokabeln mit SRS, CSV-Import, XP, Challenges, täglichen Aufgaben, Erfolgen und einem Cloudflare Workers/D1 Backend.",
        "project.gymtech.status": "Mobile App",
        "project.gymtech.description": "Eine KI-gestützte arabische Fitness-App für Android, entwickelt mit Kotlin, Jetpack Compose, Clean Architecture, Room, Hilt und OpenAI.",
        "project.garden.status": "Lernwebsite",
        "project.garden.description": "Eine arabische Umwelt-Lernwebsite, verbunden mit einem gedruckten QR-Code für den Student Activities Garden am College of Computer Science der Universität Anbar.",
        "project.achievements.status": "Webanwendung",
        "project.achievements.description": "Eine arabische Achievement-Wall für Informatikstudierende in Anbar mit Login, wöchentlichen Aufgaben, Fortschrittsverfolgung, Admin-Aufgabenverwaltung und Google-Sheets-Backend.",
        "project.matrix.status": "Interaktives Tool",
        "project.matrix.description": "Interaktiver C++ Matrix-Simulator mit visueller Matrix, Online-Codeausführung und Ausgabedarstellung mithilfe von HTML, CSS, JavaScript und der Wandbox API.",

        "iot.title": "IoT- und Hardwareprojekte",
        "iot.fingerprint.title": "Fingerprint-Based Attendance System",
        "iot.fingerprint.category": "Biometrisches IoT-System",
        "iot.fingerprint.description": "Ein biometrisches Anwesenheitssystem mit ESP32, AS608-Fingerabdrucksensor, DS3231-Echtzeituhr, OLED-Display, Google-Sheets-Integration und eigenem Web-Dashboard.",
        "iot.features.title": "Hauptfunktionen",
        "iot.features.f1": "Identitätsprüfung per Fingerabdruck",
        "iot.features.f2": "Anwesenheitsprotokollierung in Echtzeit",
        "iot.features.f3": "Datum- und Zeitverfolgung",
        "iot.features.f4": "Cloud-Protokollierung in Google Sheets",
        "iot.features.f5": "Direkte Rückmeldung auf einem OLED-Display",
        "iot.features.f6": "Web-Dashboard zur Benutzerverwaltung",
        "iot.features.f7": "Remote-Registrierung, Aktualisierung und Löschung",
        "iot.gallery.title": "Projektgalerie",
        "iot.gallery.demo": "System-Demo",
        "iot.gallery.hardware": "Hardware",
        "iot.why.title": "Warum es wichtig ist",
        "iot.why.text": "Dieses Projekt verbindet Hardware und Software, um ein reales Problem zu lösen: manuelle Anwesenheit zu reduzieren und Stellvertreter-Anwesenheit zu verhindern. Es zeigt IoT-Integration, Cloud-Anbindung und praktisches Systemdesign.",

        "activities.title": "Praktische kreative Technikaktivitäten",
        "activities.cpp.title": "C++ / Computer Science Holzdisplay",
        "activities.cpp.category": "Creative Tech / Handarbeit",
        "activities.cpp.description": "Ein handgefertigtes Holzdisplay, inspiriert von C++ und Informatik, als praktische kreative Technikaktivität.",
        "activities.iphone.title": "iPhone 6 Teardown & Komponentenanzeige",
        "activities.iphone.category": "Hardware / Elektronik / Komponentenstudie",
        "activities.iphone.description": "Ein Hardware-Teardown- und Komponentenprojekt mit einem iPhone 6, arrangiert in einem gerahmten Board, um interne Smartphone-Komponenten auf eine lehrreiche Weise zu zeigen.",

        "certificates.title": "Zertifikate",
        "certificates.huawei.name": "Ausgestellt für: Bilal Zamil",
        "certificates.huawei.date": "Ausstellungsdatum: 26. April 2026",
        "certificates.huawei.code": "Zertifikatscode: ICT20260426000046",
        "certificates.huawei.description": "Certificate of Completion für den erfolgreichen Abschluss des Studiums und der Prüfung zu openGauss Database Technology and Applications über die Huawei ICT Academy. Dies ist ein Kursabschlusszertifikat und keine professionelle Huawei-Zertifizierungsprüfung.",
        "certificates.student.issuer": "Universität Anbar",
        "certificates.student.title": "Anerkennungszertifikat für studentische Aktivitäten",
        "certificates.student.name": "Verliehen an: Bilal Zamil Ahmed",
        "certificates.student.date": "Datum: 24. Dezember 2025",
        "certificates.student.code": "Ausgestellt von: College of Computer Science and Information Technology",
        "certificates.student.description": "Ein Anerkennungszertifikat für Teilnahme und besondere Leistungen bei Aktivitäten der Student Activities Division und während der Vorbereitungsphase des Student Activities Garden.",

        "education.title": "Interaktive Lernvisualisierungen",
        "education.seg.title": "Segmentation im 8086-Prozessor",
        "education.seg.description": "Interaktive arabische Lernseite zur Erklärung der Speichersegmentierung im 8086-Prozessor und der Berechnung physischer Adressen.",
        "education.addr.title": "Logische und physische Adresse im 8086",
        "education.addr.description": "Interaktives arabisches Tutorial zu logischen und physischen Adressen im 8086-Prozessor mit Segment:Offset-Berechnung und visuellen Speicherbeispielen.",
        "common.view": "Ansehen",

        "tech.title": "Tech Stack",
        "contact.title": "Kontakt & Links",
        "contact.text": "Du kannst mich kontaktieren oder meine Arbeit über diese Links ansehen.",
        "contact.location": "Irak, Anbar",
        "footer.text": "© 2026 Bilal Zamil Ahmed. Alle Rechte vorbehalten."
    }
};

let currentLanguage = localStorage.getItem("language") || "en";

function changeLanguage(lang) {
    if (!translations[lang]) return;
    currentLanguage = lang;
    localStorage.setItem("language", lang);
    updatePageContent();
    updatePageDirection();
    closeMobileMenu();
}

function updatePageContent() {
    const dictionary = translations[currentLanguage] || translations.en;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (dictionary[key]) {
            element.textContent = dictionary[key];
        }
    });

    document.title =
        currentLanguage === "ar"
            ? "بلال زامل أحمد - ملف شخصي"
            : currentLanguage === "de"
            ? "Bilal Zamil Ahmed - Studentenportfolio"
            : "Bilal Zamil Ahmed - Student Portfolio";
}

function updatePageDirection() {
    const html = document.documentElement;
    const body = document.body;

    html.setAttribute("lang", currentLanguage);
    html.setAttribute("dir", currentLanguage === "ar" ? "rtl" : "ltr");

    body.classList.toggle("rtl", currentLanguage === "ar");
    body.classList.toggle("ltr", currentLanguage !== "ar");

    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === currentLanguage);
    });
}

function closeMobileMenu() {
    const navMenu = document.querySelector(".nav-menu");
    const hamburger = document.querySelector(".hamburger");

    if (navMenu) navMenu.classList.remove("active");
    if (hamburger) hamburger.classList.remove("active");
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            const href = this.getAttribute("href");
            if (!href || href === "#") return;

            const target = document.querySelector(href);
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            closeMobileMenu();
        });
    });
}

function setupActiveNavOnScroll() {
    window.addEventListener("scroll", () => {
        let current = "";
        const sections = document.querySelectorAll("section[id]");

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 180) {
                current = section.getAttribute("id");
            }
        });

        document.querySelectorAll(".nav-link").forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
        });
    });
}

function setupMobileMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener("click", (event) => {
        event.stopPropagation();
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest(".navbar")) {
            closeMobileMenu();
        }
    });
}

function setupFadeInAnimation() {
    const elements = document.querySelectorAll(
        ".project-card, .iot-project-card, .activity-card, .certificate-card, .education-card, .tech-item, .contact-card"
    );

    if (!("IntersectionObserver" in window)) {
        elements.forEach((element) => element.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((element) => {
        element.classList.add("fade-item");
        observer.observe(element);
    });
}

window.addEventListener("DOMContentLoaded", () => {
    setupSmoothScrolling();
    setupActiveNavOnScroll();
    setupMobileMenu();
    setupFadeInAnimation();
    updatePageContent();
    updatePageDirection();
    document.body.style.opacity = "1";
});
