// ==========================================================================
// SHIVAM RAUT PORTFOLIO - LOGIC & CASE STUDY DATA
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // 2. Project Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease-in-out';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Architecture Showcase Tabs
  const archTabs = document.querySelectorAll('.arch-tab');
  const archContents = document.querySelectorAll('.arch-tab-content');

  archTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      archTabs.forEach(t => t.classList.remove('active'));
      archContents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const targetId = 'tab-' + tab.getAttribute('data-tab');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // 4. Case Studies Detailed Data
  const caseStudies = {
    pensionquest: {
      title: "PensionQuest — Gamified NPS Financial Platform",
      badge: "All India 2nd Rank | PFRDA Hackathon 2026",
      problem: "Young Indians find retirement planning and National Pension System (NPS) regulations overly complex, dense, and unengaging, leading to massive financial under-preparedness among Gen-Z and millennial professionals.",
      solution: "Engineered a multilingual, gamified mobile and web experience that turns pension awareness into simulated life decisions. Integrates interactive compound growth calculators, risk-appetite profiling, and vernacular conversational AI.",
      architecture: [
        "FastAPI Backend: High-speed asynchronous Python API serving calculation engines, auth, and state.",
        "React Native (Expo) & React Web: Cross-platform frontend for frictionless onboarding.",
        "ML & Vernacular Engine: Multilingual speech and text guidance for tier-2/3 young earners.",
        "Infra & Orchestration: Fully containerized using Docker and Docker Compose."
      ],
      impact: "Ranked #2 nationally by the Pension Fund Regulatory and Development Authority (PFRDA) jury among thousands of engineering teams across India."
    },
    nishchay: {
      title: "Nishchay (Neev) — Hyper-Local Rural Micro-Enterprise Advisory",
      badge: "Smart India Hackathon 2026 (SIH26091)",
      problem: "Rural micro-entrepreneurs face severe lack of structured financial guidance and local market intelligence, making formal government credit schemes inaccessible.",
      solution: "Built an AI-powered advisory platform for the Ministry of Social Justice and Empowerment built on a strict zero-hallucination paradigm.",
      architecture: [
        "Deterministic Computing Core: Pure Python rules engine computing all loan eligibility, subsidies, and financial metrics.",
        "AST CI/CD Lint Boundary: Automated pull-request guard enforcing zero LLM imports inside the core calculation modules.",
        "Voice-First Narration: Sarvam AI and Bhashini translating verified numerical reports into natural voice responses in local dialects.",
        "Geospatial Context: OSM Overpass queries analyzing micro-market density and raw material proximity."
      ],
      impact: "100% elimination of financial hallucination risk with full mathematical explainability and regulatory audit trails."
    },
    itcwms: {
      title: "ITCWMS — Intelligent IT Compliance & Workflow Monitoring",
      badge: "Autonomous Multi-Agent Architecture",
      problem: "Modern SDLC and operational workflows suffer from silent compliance breaches, SLA delays, and manual review bottlenecks between product specs and code delivery.",
      solution: "Designed an autonomous multi-agent monitoring platform that watches incoming Git commits, requirement documents, and test logs, scoring compliance before code merges.",
      architecture: [
        "RequirementAgent: Parses PRDs and user stories for ambiguity, acceptance criteria, and security needs.",
        "DevelopmentAgent: Inspects diffs, commit standards, and lint thresholds using NVIDIA Nemotron.",
        "Confidence Gating: Decisions scoring >85% confidence auto-advance the pipeline; lower confidence routes alerts to engineering leads via n8n."
      ],
      impact: "Continuous automated SDLC compliance verification with verifiable audit trails and near-instant violation alerts."
    },
    disha: {
      title: "Disha Pariwar Scholarship Portal",
      badge: "Production Hardened (v43) | Live NGO Deployment",
      problem: "The charitable trust relied on manual paper-based applications, resulting in lost student records, delayed scholarship disbursements, and severe coordination overhead across rural Maharashtra.",
      solution: "Designed and deployed a resilient, zero-cost production portal optimized for non-technical NGO coordinators and Marathi-speaking applicants.",
      architecture: [
        "Frontend: High-speed responsive form hosted on Netlify.",
        "Serverless Engine: Google Apps Script with automated session authentication and rate-limited OTP flows.",
        "Document & Database Layer: Google Sheets and Google Drive acting as relational data and file vault.",
        "Engineering Hardening: Overcame PropertiesService storage limits and solved complex PDF generation edge cases across 43 release iterations."
      ],
      impact: "Successfully processes scholarship applications across Maharashtra with comprehensive Marathi documentation and 100+ integrated schemes."
    },
    arthvo: {
      title: "Arthvo — Intelligent Wealth & Advisory Infrastructure",
      badge: "Fintech Application",
      problem: "Fragmented financial tracking tools fail to provide actionable, context-aware financial advice for modern digital earners.",
      solution: "Constructed an end-to-end fintech platform focused on automated portfolio health checks, systematic investment plans (SIP), and interactive risk profiling.",
      architecture: [
        "Frontend: Modern responsive React UI with interactive data charts.",
        "Backend: Modular RESTful services with relational PostgreSQL storage.",
        "Advisory Flow: Transparent asset distribution recommendation logic."
      ],
      impact: "End-to-end working prototype demonstrating full-stack fintech architecture and clean modular code separation."
    },
    campuskart: {
      title: "CampusKart — Peer-to-Peer Student Marketplace",
      badge: "Student Commerce Platform",
      problem: "College students lack a localized, secure marketplace to buy, sell, or exchange textbooks, stationery, and lab equipment at affordable prices.",
      solution: "Built a dedicated multi-page campus marketplace featuring catalog browsing, category filters, product comparison, dynamic cart, and secure checkout simulation.",
      architecture: [
        "Multi-page Architecture: 15+ dedicated HTML5/CSS3/ES6+ pages.",
        "Client-Side State: Fast search and responsive filter state without external library bloat.",
        "Responsive UX: Optimized for mobile viewing during campus hours."
      ],
      impact: "Clean, frictionless student marketplace UX connecting peers within university boundaries."
    }
  };

  // 5. Case Study Modal Handlers
  const modal = document.getElementById('case-study-modal');
  const modalClose = document.getElementById('modal-close');
  const modalContent = document.getElementById('modal-content');
  const caseStudyTriggers = document.querySelectorAll('.open-case-study');

  function openModal(projectId) {
    const data = caseStudies[projectId];
    if (!data) return;

    let archHtml = '';
    if (data.architecture && data.architecture.length > 0) {
      archHtml = `
        <h4 style="margin: 16px 0 8px 0; color: var(--accent-cyan);">Key Architecture & Engineering:</h4>
        <ul style="padding-left: 20px; color: var(--text-muted); line-height: 1.7;">
          ${data.architecture.map(item => `<li>${item}</li>`).join('')}
        </ul>
      `;
    }

    modalContent.innerHTML = `
      <div style="margin-bottom: 16px;">
        <span class="project-badge award-badge">${data.badge}</span>
      </div>
      <h2 style="font-size: 1.8rem; margin-bottom: 12px; color: #fff;">${data.title}</h2>
      
      <div style="margin-bottom: 18px;">
        <h4 style="color: var(--accent-cyan); margin-bottom: 4px;">Problem Context:</h4>
        <p style="color: var(--text-muted); font-size: 0.95rem;">${data.problem}</p>
      </div>

      <div style="margin-bottom: 18px;">
        <h4 style="color: var(--accent-cyan); margin-bottom: 4px;">Solution:</h4>
        <p style="color: var(--text-muted); font-size: 0.95rem;">${data.solution}</p>
      </div>

      ${archHtml}

      <div style="margin-top: 20px; padding: 14px; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px;">
        <strong style="color: var(--accent-emerald);"><i class="fa-solid fa-trophy"></i> Measurable Impact:</strong>
        <p style="color: #e2e8f0; margin-top: 4px; font-size: 0.92rem;">${data.impact}</p>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  caseStudyTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      openModal(projectId);
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // 6. Copy Email Button
  const copyBtn = document.getElementById('copy-email-btn');
  const emailText = document.getElementById('email-text');
  const copyIcon = document.getElementById('copy-icon');

  if (copyBtn && emailText) {
    copyBtn.addEventListener('click', () => {
      const email = emailText.textContent.trim();
      navigator.clipboard.writeText(email).then(() => {
        copyIcon.className = 'fa-solid fa-check';
        copyIcon.style.color = 'var(--accent-emerald)';
        setTimeout(() => {
          copyIcon.className = 'fa-solid fa-copy';
          copyIcon.style.color = '';
        }, 2000);
      });
    });
  }

  // 7. Navbar Scroll Blur Elevation
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.15)';
      navbar.style.background = 'rgba(7, 9, 14, 0.95)';
    } else {
      navbar.style.borderBottomColor = 'var(--border-subtle)';
      navbar.style.background = 'rgba(7, 9, 14, 0.8)';
    }
  });
});
