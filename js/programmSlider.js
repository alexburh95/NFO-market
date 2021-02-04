var mySwiper3 = new Swiper('.swiper8', {
  direction: `horizontal`,
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-nexti',
    prevEl: '.swiper-button-previ',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})
