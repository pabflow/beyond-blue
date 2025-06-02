gsap.registerPlugin(ScrollTrigger);

function animateRichTextLines() {
  const richTexts = document.querySelectorAll('.text-rich-text');

  richTexts.forEach(container => {
    // Evita animar si ya se procesó antes
    if (container.dataset.splitDone === "true") return;

    // Divide en líneas usando SplitType
    const typeSplit = new SplitType(container, {
      types: 'lines',
      tagName: 'span'
    });

    // Animación de entrada por línea
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

    // Marca como animado
    container.dataset.splitDone = "true";
  });
}

window.addEventListener('load', () => {
  animateRichTextLines();

  // Re-aplica si se cambia contenido con tabs, sliders o dropdowns de Webflow
  const triggers = document.querySelectorAll('[data-w-tab], .w-slider-arrow, .w-dropdown-toggle');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      setTimeout(() => {
        animateRichTextLines();
      }, 250); // Tiempo para que el DOM actualice
    });
  });
});
