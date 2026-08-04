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

  // custom audio players — flat design, only one plays at a time
  const players = document.querySelectorAll('.player');
  if (players.length) {
    const PLAY_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8V4z"/></svg>';
    const PAUSE_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>';
    const fmt = (s) => {
      if (!isFinite(s) || s < 0) return '0:00';
      const m = Math.floor(s / 60);
      const sec = Math.floor(s % 60).toString().padStart(2, '0');
      return `${m}:${sec}`;
    };

    players.forEach((player) => {
      const audio = player.querySelector('audio');
      const btn = player.querySelector('.player-btn');
      const seek = player.querySelector('.player-seek');
      const time = player.querySelector('.player-time');
      let seeking = false;

      btn.addEventListener('click', () => {
        if (audio.paused) {
          players.forEach((other) => {
            const otherAudio = other.querySelector('audio');
            if (otherAudio !== audio && !otherAudio.paused) otherAudio.pause();
          });
          audio.play();
        } else {
          audio.pause();
        }
      });

      audio.addEventListener('play', () => { btn.innerHTML = PAUSE_ICON; btn.setAttribute('aria-label', 'Pause'); });
      audio.addEventListener('pause', () => { btn.innerHTML = PLAY_ICON; btn.setAttribute('aria-label', 'Play'); });
      audio.addEventListener('ended', () => { btn.innerHTML = PLAY_ICON; btn.setAttribute('aria-label', 'Play'); seek.value = 0; time.textContent = fmt(0); });

      audio.addEventListener('timeupdate', () => {
        if (seeking || !audio.duration) return;
        seek.value = (audio.currentTime / audio.duration) * 100;
        time.textContent = fmt(audio.currentTime);
      });
      audio.addEventListener('loadedmetadata', () => { time.textContent = fmt(audio.currentTime); });

      seek.addEventListener('input', () => {
        seeking = true;
        if (audio.duration) time.textContent = fmt((seek.value / 100) * audio.duration);
      });
      seek.addEventListener('change', () => {
        if (audio.duration) audio.currentTime = (seek.value / 100) * audio.duration;
        seeking = false;
      });
    });
  }

  // page jump nav — highlight the section currently in view
  const jumpNav = document.querySelector('.page-jump');
  if (jumpNav) {
    const links = [...jumpNav.querySelectorAll('a')];
    const sections = links
      .map(link => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);

    const setActive = (section) => {
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${section.id}`));
    };

    const visible = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id));
      const topmost = sections.find(section => visible.has(section.id));
      if (topmost) setActive(topmost);
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(section => observer.observe(section));

    // resolve the correct section immediately (observer's first callback can lag
    // behind a same-page hash landing, e.g. loading /about.html#stage-credits directly)
    const syncToScroll = () => {
      const markerY = window.innerHeight * 0.3;
      const current = [...sections].reverse().find(section => section.getBoundingClientRect().top <= markerY) || sections[0];
      setActive(current);
    };
    syncToScroll();
    window.addEventListener('hashchange', syncToScroll);
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
