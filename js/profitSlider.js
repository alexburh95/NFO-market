var mySwiper = new Swiper('.swiper2', {
  direction: `horizontal`,
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    1020: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    760: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
  autoplay: {
    delay: 500000000,
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop()
      })

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start()
      })
    },
  },
  navigation: {
    nextEl: '.swiper-button-nexti',
    prevEl: '.swiper-button-previ',
  },
})
