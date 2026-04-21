// ============================================================
// CHRONIC PAIN CONSULTATION — SCRIPTS
// Language toggle, smooth scroll, sticky nav
// ============================================================
// ── Language Toggle ──────────────────────────────────
let lang = 'en';
function toggleLang() {
  lang = lang === 'en' ? 'vi' : 'en';
  document.getElementById('langBtn').textContent = lang === 'en' ? 'VI' : 'EN';
  document.querySelectorAll('[data-en][data-vi]').forEach(el => {
    const newText = el.getAttribute('data-' + lang);
    if (newText) el.textContent = newText;
  });
  // Update href-based buttons that contain emoji
  document.querySelectorAll('[data-en][data-vi]').forEach(el => {
    const v = el.getAttribute('data-' + lang);
    if (v && el.tagName !== 'SCRIPT') el.textContent = v;
  });
}

// ── Smooth Scroll ────────────────────────────────────
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Sticky Nav ───────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Mobile Menu ──────────────────────────────────────
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
