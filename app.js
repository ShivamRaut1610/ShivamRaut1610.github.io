/* ============================================================
   SHIVAM RAUT PORTFOLIO — app.js
   Custom cursor · Nav hide/show · Theme toggle · Scroll reveal
   Magnetic buttons · Project filters · Keyboard nav
   ============================================================ */

(function () {
  'use strict';

  /* ─────────────── HELPERS ─────────────── */
  const qs  = (sel, root = document) => root.querySelector(sel);
  const qsa = (sel, root = document) => [...root.querySelectorAll(sel)];

  /* ─────────────── SCROLL PROGRESS ─────────────── */
  const progressBar = qs('#scrollProgress');
  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + '%';
  }

  /* ─────────────── CUSTOM CURSOR ─────────────── */
  const cursor      = qs('#cursor');
  const cursorInner = qs('#cursorInner');
  const cursorLabel = qs('#cursorLabel');

  if (cursor && window.innerWidth > 900) {
    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;
    let label = '';

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Lerp loop for smooth cursor following
    function lerp(a, b, t) { return a + (b - a) * t; }
    function animateCursor() {
      curX = lerp(curX, mouseX, 0.12);
      curY = lerp(curY, mouseY, 0.12);
      cursor.style.transform = `translate(${curX}px, ${curY}px)`;
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Cursor state on different element types
    const hoverEls = qsa('a, button, [data-magnetic], .focus-card, .project, .wf-btn, .stack-col-items span, .social-link');
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('is-hovering');
        label = el.dataset.cursorLabel || '';
        if (label) {
          cursor.classList.add('has-label');
          if (cursorLabel) cursorLabel.textContent = label;
        }
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('is-hovering', 'has-label');
        if (cursorLabel) cursorLabel.textContent = '';
      });
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; });
  }

  /* ─────────────── MAGNETIC BUTTONS ─────────────── */
  qsa('[data-magnetic]').forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.35;
      const dy = (e.clientY - cy) * 0.35;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });

  /* ─────────────── NAV — HIDE ON SCROLL DOWN / SHOW ON UP ─────────────── */
  const nav = qs('#nav');
  let lastY = 0;
  let scrollTicking = false;

  function handleNavScroll() {
    const y = window.scrollY;
    if (nav) {
      nav.classList.toggle('scrolled', y > 30);
      if (y > 80) {
        nav.classList.toggle('hidden', y > lastY);
      } else {
        nav.classList.remove('hidden');
      }
    }
    lastY = y;
    updateScrollProgress();
    scrollTicking = false;
  }

  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(handleNavScroll);
      scrollTicking = true;
    }
  }, { passive: true });

  /* ─────────────── HAMBURGER MENU ─────────────── */
  const hamburger = qs('#hamburger');
  const navDrawer = qs('#navDrawer');

  if (hamburger && navDrawer) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      navDrawer.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
    });
    qsa('[data-close-drawer]').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navDrawer.classList.remove('open');
      });
    });
  }

  /* ─────────────── DARK / LIGHT THEME ─────────────── */
  const themeBtn   = qs('#themeBtn');
  const themeIcon  = qs('#themeIcon');
  const themeLabel = qs('#themeLabel');
  const htmlEl     = document.documentElement;

  // Load saved preference
  const savedTheme = localStorage.getItem('sr-theme') || 'dark';
  htmlEl.dataset.theme = savedTheme;
  syncThemeUI(savedTheme);

  function syncThemeUI(theme) {
    if (!themeIcon || !themeLabel) return;
    if (theme === 'light') {
      themeIcon.className  = 'fa-solid fa-moon';
      themeLabel.textContent = 'Dark';
    } else {
      themeIcon.className  = 'fa-solid fa-sun';
      themeLabel.textContent = 'Light';
    }
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = htmlEl.dataset.theme === 'dark' ? 'light' : 'dark';
      htmlEl.dataset.theme = next;
      localStorage.setItem('sr-theme', next);
      syncThemeUI(next);
    });
  }

  /* ─────────────── SCROLL REVEAL ─────────────── */
  const revealEls = qsa('.reveal-up');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || 0, 10);
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, delay);
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObs.observe(el));

  /* ─────────────── PROJECT FILTERS ─────────────── */
  const filterBtns = qsa('.wf-btn');
  const projects   = qsa('.project[data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      const dividers = qsa('.project-divider');

      projects.forEach((proj, i) => {
        const cats = proj.dataset.category.split(' ');
        const show = filter === 'all' || cats.includes(filter);

        if (show) {
          proj.style.display = '';
          proj.style.animation = 'fadeIn 0.4s ease both';
          proj.style.animationDelay = (i * 50) + 'ms';
        } else {
          proj.style.display = 'none';
        }
      });

      // Hide orphan dividers (simple: just hide all, then show the ones between visible projects)
      const visibleProjects = projects.filter(p => p.style.display !== 'none');
      dividers.forEach((div, i) => {
        // Divider i sits between project i and i+1
        const nextProject = projects[i + 1];
        if (nextProject && nextProject.style.display !== 'none' && visibleProjects.includes(projects[i])) {
          div.style.display = '';
        } else {
          div.style.display = 'none';
        }
      });
    });
  });

  // Inject keyframe if not there
  if (!document.querySelector('#sr-keyframes')) {
    const style = document.createElement('style');
    style.id = 'sr-keyframes';
    style.textContent = `@keyframes fadeIn { from { opacity:0; transform:translateY(16px);} to { opacity:1; transform:translateY(0); } }`;
    document.head.appendChild(style);
  }

  /* ─────────────── SMOOTH NAV LINK ACTIVE HIGHLIGHTING ─────────────── */
  const sections  = qsa('section[id]');
  const navLinks  = qsa('.nav-link');

  const sectionObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(s => sectionObs.observe(s));

  /* ─────────────── TOAST ─────────────── */
  function showToast(msg, duration = 2800) {
    const toast = qs('#toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
  }

  /* ─────────────── COPY EMAIL ON CLICK ─────────────── */
  const emailLink = qs('a[href^="mailto:"]');
  if (emailLink) {
    emailLink.addEventListener('click', e => {
      // Only copy on middle/ctrl click, let normal click open mail client
      if (e.ctrlKey || e.metaKey || e.button === 1) {
        e.preventDefault();
        const email = emailLink.getAttribute('href').replace('mailto:', '');
        navigator.clipboard?.writeText(email).then(() => {
          showToast('📋 Email copied to clipboard');
        });
      }
    });
  }

  /* ─────────────── KEYBOARD NAV SHORTCUT ─────────────── */
  document.addEventListener('keydown', e => {
    if (e.key === 't' && !e.ctrlKey && !e.metaKey && !e.altKey) {
      const active = document.activeElement;
      if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) return;
      themeBtn && themeBtn.click();
    }
  });

  /* ─────────────── ACTIVE NAV LINK STYLE ─────────────── */
  const activeStyle = document.createElement('style');
  activeStyle.textContent = `.nav-link.active { color: var(--text); } .nav-link.active::after { width: 100%; }`;
  document.head.appendChild(activeStyle);

  /* ─────────────── INIT ─────────────── */
  updateScrollProgress();
  console.log('%c Shivam Raut — Portfolio v2.0 ', 'background:#e8b86d;color:#0e0e0c;font-family:monospace;font-weight:bold;padding:4px 10px;border-radius:4px;');

})();
