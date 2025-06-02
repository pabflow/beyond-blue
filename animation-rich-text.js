function animateRichTextLines() {
  const richTexts = document.querySelectorAll('.text-rich-text');

  richTexts.forEach(container => {
    if (container.dataset.splitDone === "true") return;

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

window.addEventListener('load', () => {
  animateRichTextLines();

  // Reaplicar si cambia contenido (tabs, sliders, dropdowns de Webflow)
  const triggers = document.querySelectorAll('[data-w-tab], .w-slider-arrow, .w-dropdown-toggle');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      setTimeout(() => {
        animateRichTextLines();
      }, 250); // Espera para que se actualice el DOM
    });
  });
});
