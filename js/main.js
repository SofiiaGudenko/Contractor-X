document.addEventListener("DOMContentLoaded", function () {
  function initCarousel(
    carouselSelector,
    btn1Selector,
    btn2Selector,
    slideSelector,
    translateValue
  ) {
    const track = document.querySelector(carouselSelector);
    const btn1 = document.querySelector(btn1Selector);
    const btn2 = document.querySelector(btn2Selector);

    let index = 0;
    const totalSlides = document.querySelectorAll(slideSelector).length;

    function updateCarousel() {
      track.style.transform = `translateX(-${index * translateValue}%)`;
      btn1.classList.toggle("active", index === 0);
      btn2.classList.toggle("active", index === 1);
    }

    btn1.addEventListener("click", () => {
      index = 0;
      updateCarousel();
    });

    btn2.addEventListener("click", () => {
      index = 1;
      updateCarousel();
    });
  }

  initCarousel(".carousel-track", "#btn-1", "#btn-2", ".project-card", 65);

  initCarousel(
    ".testimonials__track",
    "#square-1",
    "#square-2",
    ".testimonial",
    100
  );
});
