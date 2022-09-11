$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("#header").addClass("fixed-top");
  } else {
    $("#header").removeClass("fixed-top");
  }
});

AOS.init();

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: true,
  // },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  keyboard: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
});
