document.addEventListener("DOMContentLoaded", () => {
  function initCarousel({
    carouselSelector,
    btn1Selector,
    btn2Selector,
    slideSelector,
    translateValue
  }) {
    const track = document.querySelector(carouselSelector);
    const btn1 = document.querySelector(btn1Selector);
    const btn2 = document.querySelector(btn2Selector);
    const slides = document.querySelectorAll(slideSelector);

    if (!track || !btn1 || !btn2 || slides.length === 0) return;

    let index = 0;

    const updateCarousel = () => {
      track.style.transform = `translateX(-${index * translateValue}%)`;
      btn1.classList.toggle("active", index === 0);
      btn2.classList.toggle("active", index === 1);
    };

    btn1.addEventListener("click", () => {
      index = 0;
      updateCarousel();
    });

    btn2.addEventListener("click", () => {
      index = 1;
      updateCarousel();
    });

    updateCarousel();
  }

  initCarousel({
    carouselSelector: ".carousel-track",
    btn1Selector: "#btn-1",
    btn2Selector: "#btn-2",
    slideSelector: ".project-card",
    translateValue: 65
  });

  initCarousel({
    carouselSelector: ".testimonials__track",
    btn1Selector: "#square-1",
    btn2Selector: "#square-2",
    slideSelector: ".testimonial",
    translateValue: 100
  });

  const burgerButton = document.querySelector("[data-js-burger-button]");
  const navMenu = document.querySelector("[data-js-nav-menu]");

  if (burgerButton && navMenu) {
    burgerButton.addEventListener("click", () => {
      burgerButton.classList.toggle("is-active");
      navMenu.classList.toggle("is-active");
      document.body.classList.toggle("no-scroll");
    });

    navMenu.addEventListener("click", (event) => {
      if (event.target === navMenu) {
        burgerButton.classList.remove("is-active");
        navMenu.classList.remove("is-active");
        document.body.classList.remove("no-scroll");
      }
    });
  }
});
