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

document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector("[data-js-burger-button]");
  const navMenu = document.querySelector("[data-js-nav-menu]");

  // Обработчик клика по бургер-кнопке
  burgerButton.addEventListener("click", function () {
    // Переключаем класс is-active у бургер-кнопки
    burgerButton.classList.toggle("is-active");
    // Переключаем класс is-active у меню
    navMenu.classList.toggle("is-active");
    // Блокируем/разблокируем скролл страницы
    document.body.classList.toggle("no-scroll");
  });

  // Закрытие меню при клике вне меню
  navMenu.addEventListener("click", function (event) {
    if (event.target === navMenu) {
      burgerButton.classList.remove("is-active");
      navMenu.classList.remove("is-active");
      document.body.classList.remove("no-scroll");
    }
  });
});