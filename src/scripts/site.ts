/**
 * MITCE AI — Client-side interaction & animations.
 * Sticky header · mobile navigation · scroll reveal · hero parallax · accessible form handler
 */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/* ---------- Sticky header: floats once hero scrolls past threshold ---------- */
const header = document.getElementById('hdr');
const hero = document.querySelector<HTMLElement>('[data-hero]');

if (header) {
  let ticking = false;
  const update = () => {
    const threshold = hero ? hero.offsetHeight - 120 : 120;
    header.classList.toggle('float', window.scrollY > threshold);
    ticking = false;
  };
  update();
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  window.addEventListener('resize', update);
}

/* ---------- Mobile menu with keyboard focus trap ---------- */
const menu = document.getElementById('mob');
const burger = document.getElementById('burger');
const closeBtn = document.getElementById('mobX');

if (menu && burger && closeBtn) {
  const focusables = () =>
    Array.from(menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')).filter((el) => el.offsetParent !== null);

  let hideTimer: number | undefined;

  const open = () => {
    window.clearTimeout(hideTimer);
    menu.hidden = false;
    void menu.offsetWidth;
    menu.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
    closeBtn.focus();
  };

  const close = (returnFocus = true) => {
    if (menu.hidden) return;
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    hideTimer = window.setTimeout(() => (menu.hidden = true), reduceMotion.matches ? 0 : 350);
    if (returnFocus) burger.focus();
  };

  burger.addEventListener('click', open);
  closeBtn.addEventListener('click', () => close());
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => close(false)));

  document.addEventListener('keydown', (e) => {
    if (menu.hidden) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
      return;
    }
    if (e.key === 'Tab') {
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  window.matchMedia('(min-width: 1201px)').addEventListener('change', (mq) => mq.matches && close(false));
}

/* ---------- Intersection Observer Scroll Reveal ---------- */
const reveal = document.querySelectorAll<HTMLElement>('.rv');
if ('IntersectionObserver' in window && !reduceMotion.matches) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
  );
  reveal.forEach((el) => io.observe(el));
} else {
  reveal.forEach((el) => el.classList.add('in'));
}

/* ---------- Smooth parallax drift on hero visual ---------- */
const drift = document.querySelector<HTMLImageElement>('.hero__media img');
if (drift) {
  let queued = false;
  const parallax = () => {
    queued = false;
    if (reduceMotion.matches || window.innerWidth <= 820) {
      drift.style.transform = 'scale(1.04)';
      return;
    }
    const y = Math.min(window.scrollY, 800);
    drift.style.transform = `scale(1.04) translateY(${y * 0.07}px)`;
  };
  const queue = () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(parallax);
    }
  };
  parallax();
  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue);
}

/* ---------- Form handler ---------- */
document.querySelectorAll<HTMLFormElement>('form.js-form').forEach((form) => {
  const status = form.querySelector<HTMLElement>('.form__status');
  form.addEventListener('submit', (e) => {
    if (form.dataset.demo !== 'true') return;
    e.preventDefault();
    if (status) {
      status.textContent =
        'Thank you for your enquiry. We will review your request and get back to you shortly.';
    }
  });
});
