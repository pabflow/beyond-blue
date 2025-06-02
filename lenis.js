import 'https://cdn.jsdelivr.net/gh/studio-freight/lenis@v0.2.26/bundled/lenis.js';

if (!document.documentElement.classList.contains('w-editor')) {
  const lenis = new Lenis({
    duration: 1.6,
    easing: (t) => 1 - Math.pow(1 - t, 4),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: true,
    touchMultiplier: 1.2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  document.querySelectorAll('[data-target]').forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault();
      const targetId = button.dataset.target.replace('#', '');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        lenis.scrollTo(targetEl, {
          offset: 0,
          duration: 2,
          easing: (x) => 1 - Math.pow(1 - x, 4),
        });
      }
    });
  });

  requestAnimationFrame(raf);
}
