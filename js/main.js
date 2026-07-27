// CalicoMusic — shared behavior

document.addEventListener('DOMContentLoaded', () => {
  // mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav.primary');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // gallery lightbox
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const lbImg = lightbox.querySelector('img');
    const lbCap = lightbox.querySelector('.lb-cap');
    const closeBtn = lightbox.querySelector('.lb-close');

    document.querySelectorAll('.gallery-grid a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        lbImg.src = link.getAttribute('href');
        lbCap.textContent = link.dataset.caption || '';
        lightbox.classList.add('open');
      });
    });
    const close = () => lightbox.classList.remove('open');
    closeBtn.addEventListener('click', close);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  // contact form (static hosting: wire to Netlify Forms — see form's data-netlify attr)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', () => {
      // Netlify Forms handles submission natively via the data-netlify attribute
      // and the hidden form-name field — no JS fetch needed for basic setup.
    });
  }
});
