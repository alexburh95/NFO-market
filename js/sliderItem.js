var mySwiper3 = new Swiper('.swiper3', {
  direction: `horizontal`,
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    autoplay: {
      delay: 5000,
    },
  },
  navigation: {
    nextEl: '.swiper-button-nexti',
    prevEl: '.swiper-button-previ',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})
