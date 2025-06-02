// Rich Text Animation

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


// Heading Animations

    
 // GSAP + Plugins
gsap.registerPlugin(SplitText, CustomEase, ScrollTrigger);

// Custom easing
CustomEase.create("osmo-ease", "0.625, 0.05, 0, 1");

// Animación al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll('[data-split="heading"]');

  headings.forEach((heading) => {
    // Dividir el texto
    const split = SplitText.create(heading, {
      type: "lines, words, chars",
      mask: "lines",
      linesClass: "line",
      wordsClass: "word",
      charsClass: "letter"
    });

    // Animar letras cuando el heading entra en vista
    gsap.fromTo(
      heading.querySelectorAll(".letter"),
      { yPercent: 110 },
      {
        yPercent: 0,
        duration: 0.4,
        stagger: 0.008,
        ease: "osmo-ease",
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          once: true
        }
      }
    );
  });
});

    
