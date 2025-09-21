// Very small language toggle and dynamic year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const btns = document.querySelectorAll('.lang-toggle button');
btns.forEach(btn => btn.addEventListener('click', () => {
  const lang = btn.getAttribute('data-lang');
  btns.forEach(b => b.classList.toggle('active', b === btn));
  // toggle all i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key.endsWith('_ja')) {
      el.classList.toggle('hidden', lang !== 'ja');
    } else if (key.endsWith('_en')) {
      el.classList.toggle('hidden', lang !== 'en');
    }
  });
  // CTA button pair handling on top page
  const jaBtn = document.getElementById('appstore-link');
  const enBtn = document.getElementById('appstore-link-en');
  if (jaBtn && enBtn) {
    jaBtn.classList.toggle('hidden', lang !== 'ja');
    enBtn.classList.toggle('hidden', lang !== 'en');
  }
}));
