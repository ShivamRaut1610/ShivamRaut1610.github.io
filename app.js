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
      tag: 'MODE: GTM & GROWTH OBSESSED',
      heading: 'Where <span class="highlight-gtm">GTM Velocity</span> meets <span class="highlight-design">Thoughtful Design</span> and <span class="highlight-ai">Deterministic AI</span>.',
      desc: 'I am a <strong>GTM & Design Engineer</strong> with a deep obsession with product distribution, self-serve funnels, and high-craft UI/UX. I build software that converts at first glance, feels buttery smooth, and solves critical real-world friction.',
      ascii: `  ____  _     _                     ____             _   
 / ___|| |__ (_)_   ____ _ _ __ ___ |  _ \\ __ _ _   _| |_ 
 \\___ \\| '_ \\| \\ \\ / / _\` | '_ \` _ \\| |_) / _\` | | | | __|
  ___) | | | | |\\ V / (_| | | | | | |  _ < (_| | |_| | |_ 
 |____/|_| |_|_| \\_/ \\__,_|_| |_| |_|_| \\_\\__,_|\\__,_|\\__|
 ========================================================
 [★] FOCUS    : GTM Engineering × High-Craft Product Design
 [★] FUNNELS  : Self-Serve Onramps · Conversion · Viral Loops
 [★] AI STACK : FastAPI · LangChain · Nemotron · Deterministic Core
 [★] LOCATION : Pune, India // Open for Forward Deployed Roles`
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
  });

  // 4. Interactive Design Lab Engine
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
    help: `Available commands:
  • <span class="highlight">gtm</span>       : Why I'm obsessed with GTM engineering & distribution
  • <span class="highlight">design</span>    : My Product Design & UI/UX principles
  • <span class="highlight">projects</span>  : Direct links to my 5 flagship architectures
  • <span class="highlight">whoami</span>    : Background, education & hackathon ranking
  • <span class="highlight">contact</span>   : Signal transmission coordinates
  • <span class="highlight">clear</span>     : Wipe terminal buffer`,

    gtm: `[GTM ENGINEERING PHILOSOPHY]
-------------------------------------------------------
Code without adoption is zero-yield. I build at the revenue
boundary: self-serve activation loops, viral campus referrals,
and product analytics that drop onboarding friction to zero.
Proven in PensionQuest (AIR #2) where gamified funnels solved
a national 92% youth abandonment problem.`,

    design: `[PRODUCT DESIGN & UI/UX MANIFESTO]
-------------------------------------------------------
Taste is the ultimate moat. 
1. Frictionless Onboarding: Explain value in < 3 seconds.
2. Tactile Ergonomics: 60fps micro-animations, obsidian glass.
3. Zero Translation Loss: I design in Figma and code directly
   into clean, performant CSS/React.`,

    projects: `[FLAGSHIP ARCHITECTURES]
-------------------------------------------------------
1. PensionQuest : AIR #2 PFRDA Winner · github.com/ShivamRaut1610/PensionQuest
2. Arthvo       : Gamified Wealth · github.com/ShivamRaut1610/Arthvo
3. CampusKart   : Live on Pages · shivamraut1610.github.io/CampusKart/
4. TokenSense   : Open Source DX · github.com/ShivamRaut1610/tokensense
5. Portfolio    : Live Showcase · shivamraut1610.github.io`,

    whoami: `[DOSSIER: SHIVAM RAUT]
-------------------------------------------------------
• Roles      : GTM & Design Engineer | AI Systems Builder
• Education  : Computer Engineering @ MIT AOE Pune
• Hackathons : All India Rank #2 @ PFRDA National Hackathon
• Certs      : Oracle Certified Associate SQL | IIT Ropar AI Minor
• OpenSource : SSoC Season 5 Contributor (LocalMind)`,

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
          resLine.innerHTML = `command not recognized: <strong>${escapeHtml(inputVal)}</strong>. Type <span class="highlight">help</span> for available commands.`;
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

  function escapeHtml(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

});
