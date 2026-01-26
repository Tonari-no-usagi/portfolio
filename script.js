const translations = {
    ja: {
        nav_about: "About",
        nav_services: "Services",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_greeting: "Welcome to my",
        hero_title: "PORTFOLIO",
        hero_role: "Webアプリケーション & システム開発エンジニア",
        hero_bio: "モダンなフロントエンド構築から、堅牢なバックエンド、業務効率化ツールの開発まで。幅広い技術スタックで、あなたのビジネス課題をエンジニアリングで解決します。",
        btn_work: "実績を見る",
        btn_contact: "お問い合わせ",

        // Sections
        sect_about: "01. About Me",
        about_p1: "こんにちは。私は技術による課題解決に情熱を注ぐエンジニアです。",
        about_p2: "Web開発の全レイヤー（フロントエンドからバックエンド、インフラ）を横断的に理解し、最適な技術選定と実装を行います。特にパフォーマンスと保守性を重視したシステム設計が得意です。",
        about_p3: "常に最新の技術トレンド（Rust, WebAssembly等）をキャッチアップし、それを実用的なビジネスソリューションとして還元することを目指しています。",

        sect_services: "02. Services",
        serv_web_title: "Web Development",
        serv_web_desc: "React/Next.js等を用いたモダンで高速なWebサイト・Webアプリケーション開発。モバイル対応からSEO最適化までサポートします。",
        serv_sys_title: "System & Tools",
        serv_sys_desc: "業務効率化のための自動化ツール、CLIツール、デスクトップアプリ開発。RustやPython等の適材適所な技術選定で課題を解決します。",
        serv_consult_title: "Technical Consultation",
        serv_consult_desc: "技術選定、既存コードのパフォーマンス改善、モダン技術の導入支援など。開発プロセスの改善提案も行います。",

        sect_skills: "03. Technical Skills",
        cat_lang: "Languages",
        cat_tools: "Technologies & Tools",
        sect_projects: "04. Featured Projects",

        // Projects
        desc_oidc4vc_action: "OIDC4VCI / SD-JWT VC / did:web に対応したサーバーレスな証明書発行（VC）デモサイトを自動生成する GitHub Action。",
        desc_oidc4vc_resol: "OpenID4VCI/VP準拠のメタデータとSD-JWT VCを生成し、GitHub Pages上に発行デモサイトを5分で構築するCLIツール。",
        desc_gh_did: "GitHub Pagesを活用したdid:webvhの自動運用・管理ツール。",
        desc_py_concurrency: "スレッド、プロセス、非同期、分散実行をインテリジェントに管理する、Python用の統合タスクベース並行処理ランタイム。",
        desc_qir: "Rust製の軽量な量子中間表現（QIR）エミュレータ。",
        desc_nano_flow: "フローベースの生成モデルに焦点を当てた音声合成（TTS）関連プロジェクト。",
        desc_git_switcher: "WindowsでGitアカウントをフォルダごとに自動切り替えするCLIツール。仕事用と個人用のプロファイル管理を簡素化します。",
        desc_wasm_life: "RustとWasm製のインタラクティブなライフゲーム。ブラウザでの高性能コンピューティングをデモします。",

        sect_contact: "05. Contact",
        contact_msg: "新しい機会やコラボレーションを常に歓迎しています。質問から些細な挨拶まで、お気軽にご連絡ください！",
        contact_btn: "X (Twitter) で挨拶する",
        footer: "Designed & Built by Tonari-no-usagi"
    },
    en: {
        nav_about: "About",
        nav_services: "Services",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_greeting: "Welcome to my",
        hero_title: "PORTFOLIO",
        hero_role: "Web Application & Systems Engineer",
        hero_bio: "From modern frontend experiences to robust backend systems and automation tools. I engineer solutions across the full stack to accelerate your business.",
        btn_work: "View My Work",
        btn_contact: "Contact Me",

        // Sections
        sect_about: "01. About Me",
        about_p1: "Hello! I am an engineer passionate about solving problems through technology.",
        about_p2: "I have cross-functional understanding of web development layers (Frontend, Backend, Infra) to deliver optimal implementation. I specialize in system design focused on performance and maintainability.",
        about_p3: "I constantly catch up with the latest tech trends (Rust, WebAssembly, etc.) and aim to translate them into practical business solutions.",

        sect_services: "02. Services",
        serv_web_title: "Web Development",
        serv_web_desc: "Building modern, fast websites and web apps using React/Next.js. Supporting mobile responsiveness and SEO optimization.",
        serv_sys_title: "System & Tools",
        serv_sys_desc: "Developing automation tools, CLI tools, and desktop apps for business efficiency. Solving problems with the right tools like Rust and Python.",
        serv_consult_title: "Technical Consultation",
        serv_consult_desc: "Tech stack selection, performance improvement of existing code, and support for adopting modern technologies.",

        sect_skills: "03. Technical Skills",
        cat_lang: "Languages",
        cat_tools: "Technologies & Tools",
        sect_projects: "04. Featured Projects",

        // Projects
        desc_oidc4vc_action: "GitHub Actions to generate a serverless VC issuance demo site supporting OIDC4VCI, SD-JWT VC, and did:web.",
        desc_oidc4vc_resol: "oidc4gen: Build a serverless OpenID4VCI/VP demo site with SD-JWT VCs on GitHub Pages in 5 minutes.",
        desc_gh_did: "Zero-infrastructure did:webvh lifecycle management on GitHub Pages.",
        desc_py_concurrency: "A unified, task-based concurrency runtime for Python. Intelligently manages Threads, Processes, Async, and Distributed execution.",
        desc_qir: "A lightweight Quantum Intermediate Representation (QIR) emulator built in Rust.",
        desc_nano_flow: "A Text-to-Speech related project focusing on flow-based generative models.",
        desc_git_switcher: "A CLI tool to automatically switch Git accounts on Windows. Simplifies managing multiple work and personal profiles.",
        desc_wasm_life: "Interactive Game of Life web app powered by Rust and Wasm. Demonstrates high-performance computing in the browser.",

        sect_contact: "05. Contact",
        contact_msg: "I'm always open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!",
        contact_btn: "Say Hello on X",
        footer: "Designed & Built by Tonari-no-usagi"
    }
};

let currentLang = 'ja'; // Default to Japanese as requested context implies it might be preferred, or keep mixed? User asked for toggle. 

document.addEventListener('DOMContentLoaded', () => {
    // Language Toggle Listener
    const langBtn = document.getElementById('lang-toggle');
    langBtn.textContent = 'EN'; // Initial state for JA default
    updateLanguage(currentLang); // Ensure view matches default lang

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'ja' ? 'en' : 'ja';
        updateLanguage(currentLang);
        langBtn.textContent = currentLang === 'ja' ? 'EN' : 'JP';
    });

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
    }

    // Initialize VanillaTilt for Project Cards
    VanillaTilt.init(document.querySelectorAll(".project-card"), {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.1,
        scale: 1.02
    });

    // Glitch / Typing Effect for Hero Title (Updated to "PORTFOLIO")
    const glitchElement = document.querySelector('.glitch');
    // Using simple typing for PORTFOLIO or similar
    const originalText = "PORTFOLIO";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ<>[]{}";

    let interval = null;

    const startGlitch = () => {
        let iteration = 0;
        clearInterval(interval);
        interval = setInterval(() => {
            glitchElement.innerText = originalText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) return originalText[index];
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");
            if (iteration >= originalText.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);
    };

    // Initial run
    startGlitch();
    glitchElement.addEventListener('mouseover', startGlitch);



    // Smooth Scrolling for Anchors
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

    // Navbar Scroll Effect (Glassmorphism intensity change)
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });
});
