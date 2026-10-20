// ==========================================================================
// SHIVAM RAUT PORTFOLIO - HIGH-CRAFT DESIGN & LOGIC ENGINE
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  // 1. Dynamic Cursor Glow Tracker
  const cursorGlow = document.getElementById('cursorGlow');
  if (cursorGlow) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    });
  }

  // 2. Toast Notification Utility
  const toast = document.getElementById('toast');
  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  };

  // 3. Persona Switcher Engine (GTM / Design / AI)
  const personaBtns = document.querySelectorAll('.persona-btn');
  const heroHeading = document.getElementById('heroHeading');
  const heroDesc = document.getElementById('heroDesc');
  const currentPersonaTag = document.getElementById('currentPersonaTag');
  const asciiArtBlock = document.getElementById('asciiArtBlock');

  const personaData = {
    gtm: {
      tag: 'MODE: GTM & EMPATHETIC ADOPTION',
      heading: 'Where <span class="highlight-gtm">GTM Velocity</span> meets <span class="highlight-design">Thoughtful Design</span> and <span class="highlight-ai">Deterministic AI</span>.',
      desc: 'I am a <strong>GTM &amp; Design Engineer</strong> focused on making powerful software easy to discover and love. I craft welcoming user onboarding, transparent product analytics, and high-craft UI/UX that solves critical real-world friction with zero dark patterns.',
      ascii: `  ____  _     _                     ____             _   
 / ___|| |__ (_)_   ____ _ _ __ ___ |  _ \\ __ _ _   _| |_ 
 \\___ \\| '_ \\| \\ \\ / / _\` | '_ \` _ \\| |_) / _\` | | | | __|
  ___) | | | | |\\ V / (_| | | | | | |  _ < (_| | |_| | |_ 
 |____/|_| |_|_| \\_/ \\__,_|_| |_| |_|_| \\_\\__,_|\\__,_|\\__|
 ========================================================
 [★] FOCUS    : Thoughtful Distribution × High-Craft Design
 [★] ONBOARD  : Welcoming Onramps · Real Value · Zero Dark Patterns
 [★] AI STACK : FastAPI · LangChain · Nemotron · Deterministic Core
 [★] VALUES   : Technology as a Human Right · Authentic Purpose`
    },
    design: {
      tag: 'MODE: PRODUCT DESIGN & HIGH-CRAFT UI/UX',
      heading: 'Crafting <span class="highlight-design">Buttery UI/UX</span>, Micro-Physics, and <span class="highlight-gtm">Zero-Friction Flows</span>.',
      desc: 'I understand <strong>Product Design from user psychology to pixel-level CSS</strong>. I eliminate translation loss between Figma and production code, creating software with Linear/Vercel-level visual taste and micro-interactions.',
      ascii: `  ____  _____ ____ ___ ____ _   _ 
 |  _ \\| ____/ ___|_ _/ ___| \\ | |
 | | | |  _| \\___ \\| | |  _|  \\| |
 | |_| | |___ ___) | | |_| | |\\  |
 |____/|_____|____/___\\____|_| \\_|
 ========================================================
 [★] CRAFT    : High-Craft UI/UX · Obsidian Glass · Spatial Layout
 [★] TOKENS   : Dynamic CSS Variables · Micro-Physics · 60fps
 [★] FIGMA    : Zero Translation Loss (Concept to React/CSS)
 [★] TASTE    : Dieter Rams Philosophy × Modern Cyber Aesthetic`
    },
    ai: {
      tag: 'MODE: DETERMINISTIC AI & MULTI-AGENT ARCHITECT',
      heading: 'Building <span class="highlight-ai">Zero-Hallucination AI</span> and <span class="highlight-gtm">Multi-Agent Systems</span>.',
      desc: 'Architecting critical software under the philosophy: <strong>"Deterministic Math, Probabilistic Narration"</strong>. In finance and operations, LLMs must never compute numbers—they narrate verified mathematical truth.',
      ascii: `     _    ___   ______     ______ _____ _____ __  __ ____  
    / \\  |_ _| / ___\\ \\   / / ___|_   _| ____|  \\/  / ___| 
   / _ \\  | |  \\___ \\\\ \\ / /\\___ \\ | | |  _| | |\\/| \\___ \\ 
  / ___ \\ | |   ___) |\\ V /  ___) || | | |___| |  | |___) |
 /_/   \\_\\___| |____/  \\_/  |____/ |_| |_____|_|  |_|____/ 
 ========================================================
 [★] ARCH     : FastAPI · PostgreSQL · Docker · Redis
 [★] AGENTS   : NVIDIA Nemotron-3 · LangChain · Confidence Gating
 [★] ACCURACY : Deterministic Mathematical Isolation (0% Error)
 [★] AWARD    : All India Rank #2 at PFRDA National Hackathon`
    },
    analytics: {
      tag: 'MODE: PRODUCT ANALYTICS & TELEMETRY',
      heading: 'Translating <span class="highlight-gtm">Event Telemetry</span> into <span class="highlight-design">High-Conviction Growth</span>.',
      desc: 'I instrument full-funnel product telemetry, analyze cohort drop-offs, and diagnose friction. I bridge product instrumentation and thoughtful UI/UX so software converts, activates, and retains without dark patterns.',
      ascii: `  ____  ____   ___  ____  _   _  ____ _____ 
 |  _ \\|  _ \\ / _ \\|  _ \\| | | |/ ___|_   _|
 | |_) | |_) | | | | | | | | | | |     | |  
 |  __/|  _ <| |_| | |_| | |_| | |___  | |  
 |_|   |_| \\_\\\\___/|____/ \\___/ \\____| |_|  
 ========================================================
 [★] FOCUS    : Product Telemetry · Funnel Audits · Cohorts
 [★] METRICS  : Activation Curves · LTV/CAC · Retention Loops
 [★] STACK    : PostHog · Mixpanel · Custom Event Pipelines
 [★] ETHOS    : Respectful Analytics (No Dark Patterns)`
    }
  };

  personaBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      personaBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const persona = btn.getAttribute('data-persona');
      const data = personaData[persona];

      if (data) {
        if (heroHeading) heroHeading.innerHTML = data.heading;
        if (heroDesc) heroDesc.innerHTML = data.desc;
        if (currentPersonaTag) currentPersonaTag.textContent = data.tag;
        if (asciiArtBlock) asciiArtBlock.textContent = data.ascii;
        showToast(`Switched to ${persona.toUpperCase()} View`);
      }
    });
  // 3B. Solar / Obsidian Theme Toggle Engine
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');

  const savedTheme = localStorage.getItem('sr-cyber-theme') || 'obsidian';
  if (savedTheme === 'solar') {
    document.body.classList.remove('theme-obsidian');
    document.body.classList.add('theme-solar');
    if (themeIcon) themeIcon.className = 'fa-solid fa-moon';
    if (themeText) themeText.textContent = 'Obsidian Mode';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isSolar = document.body.classList.toggle('theme-solar');
      document.body.classList.toggle('theme-obsidian', !isSolar);
      const themeName = isSolar ? 'solar' : 'obsidian';
      localStorage.setItem('sr-cyber-theme', themeName);
      if (themeIcon) themeIcon.className = isSolar ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
      if (themeText) themeText.textContent = isSolar ? 'Obsidian Mode' : 'Solar Mode';
      showToast(`Switched to ${isSolar ? 'Solar Light' : 'Obsidian Cyber'} mode`);
    });
  }
  // A. Swatches
  const swatches = document.querySelectorAll('.swatch-btn');
  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      swatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');

      const color = swatch.getAttribute('data-color');
      document.documentElement.style.setProperty('--accent-neon', color);
      document.documentElement.style.setProperty('--accent-glow', `${color}45`);
      document.documentElement.style.setProperty('--border-glow', `${color}75`);

      showToast(`Accent Token Updated: ${color}`);
    });
  });

  // B. Glassmorphism Blur Slider
  const blurSlider = document.getElementById('blurSlider');
  const blurVal = document.getElementById('blurVal');
  if (blurSlider && blurVal) {
    blurSlider.addEventListener('input', (e) => {
      const val = `${e.target.value}px`;
      document.documentElement.style.setProperty('--glass-blur', val);
      blurVal.textContent = val;
    });
  }

  // C. Scanlines & Grid Toggles
  const btnToggleScanlines = document.getElementById('btnToggleScanlines');
  const scanlineOverlay = document.getElementById('scanlineOverlay');
  if (btnToggleScanlines && scanlineOverlay) {
    btnToggleScanlines.addEventListener('click', () => {
      scanlineOverlay.classList.toggle('hidden');
      const isActive = !scanlineOverlay.classList.contains('hidden');
      btnToggleScanlines.classList.toggle('active', isActive);
      btnToggleScanlines.textContent = `Scanlines: ${isActive ? 'ON' : 'OFF'}`;
      showToast(`Scanlines ${isActive ? 'Enabled' : 'Disabled'}`);
    });
  }

  const btnToggleGrid = document.getElementById('btnToggleGrid');
  const cyberGrid = document.getElementById('cyberGrid');
  if (btnToggleGrid && cyberGrid) {
    btnToggleGrid.addEventListener('click', () => {
      cyberGrid.classList.toggle('hidden');
      const isActive = !cyberGrid.classList.contains('hidden');
      btnToggleGrid.classList.toggle('active', isActive);
      btnToggleGrid.textContent = `Matrix Grid: ${isActive ? 'ON' : 'OFF'}`;
      showToast(`Matrix Grid ${isActive ? 'Enabled' : 'Disabled'}`);
    });
  }

  // 5. Project Filtering
  const filterPills = document.querySelectorAll('.filter-pill');
  const projectCards = document.querySelectorAll('.project-master-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.3s ease-in-out';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 6. Interactive Command Terminal
  const terminalForm = document.getElementById('terminalForm');
  const terminalInput = document.getElementById('terminalInput');
  const terminalScreen = document.getElementById('terminalScreen');

  const termResponses = {
    menu: `[ SHIVAM RAUT — INTERACTIVE DOSSIER ]
-------------------------------------------------------
  • <span class="highlight">whoami</span>     : Background, education &amp; national ranking
  • <span class="highlight">gtm</span>        : GTM engineering &amp; thoughtful distribution
  • <span class="highlight">design</span>     : Product Design &amp; UI/UX philosophy
  • <span class="highlight">analytics</span>  : Product telemetry &amp; measurement
  • <span class="highlight">projects</span>   : All 6 flagship architectures
  • <span class="highlight">opensource</span> : Open source ethos &amp; volunteering conviction
  • <span class="highlight">pulses</span>     : Pulses.life healthcare platform
  • <span class="highlight">kalpataru</span>  : Kalpataru Labs AgriTech ecosystem
  • <span class="highlight">contact</span>    : Ways to connect &amp; collaborate
  • <span class="highlight">clear</span>      : Clear terminal screen`,

    explore: `[ EXPLORING SHIVAM'S DOSSIER ]
-------------------------------------------------------
  Sections available to explore:
  • <span class="highlight">whoami</span>     : Who I am — Shivam Raut, Pune
  • <span class="highlight">gtm</span>        : Thoughtful distribution &amp; GTM
  • <span class="highlight">design</span>     : High-craft UI/UX principles
  • <span class="highlight">projects</span>   : Flagship architectures (6 systems)
  • <span class="highlight">opensource</span> : Open source &amp; grassroots volunteering
  • <span class="highlight">contact</span>    : Connect and collaborate`,

    help: `[ DOSSIER DIRECTORY ]
-------------------------------------------------------
  • <span class="highlight">menu</span>       : Full topic directory
  • <span class="highlight">explore</span>    : Browse what's available
  • <span class="highlight">projects</span>   : All flagship architectures
  • <span class="highlight">opensource</span> : Open source &amp; volunteering
  • <span class="highlight">contact</span>    : Connect &amp; collaborate`,

    gtm: `[GTM & THOUGHTFUL DISTRIBUTION]
-------------------------------------------------------
Great technology deserves to reach the people who need it.
I build welcoming onramps, frictionless discovery flows,
and respectful product analytics—helping users experience
genuine value without manipulation or dark patterns.

Proven in PensionQuest (AIR #2): gamified funnels helped
92% of young Indians finally understand their NPS accounts.`,

    design: `[PRODUCT DESIGN & UI/UX MANIFESTO]
-------------------------------------------------------
Taste is the ultimate moat. 
1. Frictionless Onboarding: Explain value in < 3 seconds.
2. Tactile Ergonomics: 60fps micro-animations, obsidian glass.
3. Zero Translation Loss: I design in Figma and code directly
   into clean, performant CSS/React.`,

    projects: `[FLAGSHIP ARCHITECTURES]
-------------------------------------------------------
1. PensionQuest : AIR #2 Winner · Gamified NPS & Voice AI
2. Pulses.life  : Live Demo · Voice-First Multilingual Healthcare
3. Kalpataru    : AgriTech OS Architecture (140M Farmers)
4. Arthvo       : Gamified Wealth Universe (Next.js 16)
5. CampusKart   : Live Demo · 17-Screen P2P Marketplace
6. TokenSense   : Open Source DevTools · SSoC Season 5`,

    pulses: `[PROJECT: PULSES.LIFE]
-------------------------------------------------------
• Problem  : Language barrier to emergency healthcare in Bharat
• Solution : Voice-first triage in 22 scheduled Indian languages
• Stack    : React 18 · Sarvam AI · Groq · CGHS Hospital DB
• Status   : Live Demo at shivamraut1610.github.io/Pulses.life/`,

    kalpataru: `[PROJECT: KALPATARU LABS]
-------------------------------------------------------
• Vision   : Full-stack operating system for Indian agriculture
• Reach    : Designed for 140M smallholder farm households
• Ethos    : "If it doesn't work on 2G in Bundelkhand, redesign it"
• Moat     : Compounding data flywheel across 12 products`,

    opensource: `[OPEN SOURCE & GRASSROOTS VOLUNTEERING]
-------------------------------------------------------
• Conviction : Technology is a fundamental human right
               — belonging to everyone, whenever they need it
• Community  : SSoC Season 5 Contributor (LocalMind & TokenSense)
• Volunteer  : Mentoring student builders at grassroots scale
• Standard   : Zero faking, zero performative hype, pure craft
• Why        : Every open source contribution is shared dignity`,

    analytics: `[EXPERTISE: PRODUCT ANALYTICS]
-------------------------------------------------------
• Audits     : Drop-off diagnostics, cohort retention curves
• Loops      : Organic referral vectors & activation mechanics
• Stack      : PostHog, Mixpanel, Custom SQL telemetry
• Philosophy : Respectful measurement with zero dark patterns`,

    whoami: `[DOSSIER: SHIVAM RAUT]
-------------------------------------------------------
• Roles      : GTM & Design Engineer | AI Systems Builder
• Location   : Pune, India
• Education  : Computer Engineering @ MIT AOE Pune
• Hackathons : All India Rank #2 @ PFRDA National Hackathon
• Certs      : Oracle Certified Associate SQL | IIT Ropar AI Minor
• OpenSource : SSoC Season 5 Contributor (LocalMind & TokenSense)
• Values     : Authentic purpose, open access, zero faking`,

    contact: `[TRANSMISSION CHANNELS]
-------------------------------------------------------
• Email    : shivamraut.work@gmail.com
• LinkedIn : linkedin.com/in/shivamraut1610
• GitHub   : github.com/ShivamRaut1610
• X/Twitter: @ShivamRaut1610`
  };

  if (terminalForm && terminalInput && terminalScreen) {
    terminalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputVal = terminalInput.value.trim().toLowerCase();
      if (!inputVal) return;

      // Append user command
      const cmdLine = document.createElement('div');
      cmdLine.className = 'term-line cmd';
      cmdLine.innerHTML = `<span class="term-prompt">shivam@fde:~$</span> ${escapeHtml(inputVal)}`;
      terminalScreen.appendChild(cmdLine);

      if (inputVal === 'clear') {
        terminalScreen.innerHTML = '';
      } else {
        const resLine = document.createElement('div');
        resLine.className = 'term-line res';
        if (termResponses[inputVal]) {
          resLine.innerHTML = `<pre style="font-family: inherit; white-space: pre-wrap;">${termResponses[inputVal]}</pre>`;
        } else {
          resLine.innerHTML = `Command not found: <strong>${escapeHtml(inputVal)}</strong>. Type <span class="highlight">menu</span> or <span class="highlight">explore</span> to see what's available.`;
        }
        terminalScreen.appendChild(resLine);
      }

      terminalInput.value = '';
      terminalScreen.scrollTop = terminalScreen.scrollHeight;
    });
  }

  // 7. Clipboard Buttons
  const btnCopyAscii = document.getElementById('btnCopyAscii');
  if (btnCopyAscii && asciiArtBlock) {
    btnCopyAscii.addEventListener('click', () => {
      navigator.clipboard.writeText(asciiArtBlock.textContent);
      showToast('ASCII Dossier Copied to Clipboard!');
    });
  }

  const btnCopyEmail = document.getElementById('btnCopyEmail');
  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      navigator.clipboard.writeText('shivamraut.work@gmail.com');
      showToast('Email Copied: shivamraut.work@gmail.com');
    });
  }

  // 8. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = 'rgba(6, 8, 13, 0.98)';
        navMenu.style.padding = '20px';
        navMenu.style.borderBottom = '1px solid var(--border-glow)';
      }
    });
  }

  // 9. 3D Card Tilt & Micro-Physics on Mousemove
  const tiltCards = document.querySelectorAll('.project-master-card, .pillar-card, .lab-card, .cyber-portrait-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -4;
      const rotY = ((x - cx) / cx) * 4;
      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-3px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

});
