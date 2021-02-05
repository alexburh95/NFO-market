;(() => {
  new Swiper('.promo-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    breakpoints: {
      600: {
        slidesPerView: 1,
      },
    },
  })
})()
