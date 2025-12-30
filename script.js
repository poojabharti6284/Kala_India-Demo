(function ($) {
  'use strict';

  $(document).ready(function () {

    $('.slider-right').owlCarousel({
      loop: true,
      autoplay: true,
      autoplaySpeed: 5000,
      rtl: true,
      margin: 40,
      nav: false,
      dots: false,
      responsive: {
        0: { items: 1, margin: 20 },
        480: { items: 1, margin: 20 },
        600: { items: 4, margin: 20 },
        500: { items: 4 },
        500: { items: 4 }
      }
    });

  });

})(jQuery);


const slides = document.querySelectorAll(".hero-slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);

