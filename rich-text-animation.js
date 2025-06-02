gsap.registerPlugin(ScrollTrigger);

function animateRichTextLines() {
  const richTexts = document.querySelectorAll('.text-rich-text');

  richTexts.forEach(container => {
    // Evita dividir texto si ya se hizo
    if (container.dataset.splitDone === "true") return;

    // Asegura que el contenedor está visible (por si está dentro de un tab/slider)
    if (container.offsetParent === null) return;

    const typeSplit = new SplitType(container, {
      types: 'lines',
      tagName: 'span'
    });

    gsap.from(container.querySelectorAll('.line'), {
      yPercent: 100,
      opacity: 0,
      duration: 0.9,
      ease: 'power1.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        once: true
      }
    });

    container.dataset.splitDone = "true";
  });
}

// Espera a que todo esté listo
window.addEventListener('load', () => {
  animateRichTextLines();

  // Reaplica en interacción con Webflow
  const triggers = document.querySelectorAll('[data-w-tab], .w-slider-arrow, .w-dropdown-toggle');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      setTimeout(() => {
        animateRichTextLines();
      }, 300); // Espera más larga para que el contenido esté visible
    });
  });
});
