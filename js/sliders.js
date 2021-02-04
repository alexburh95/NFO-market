var mySwiper = new Swiper('.swiper1', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

window.mySwiper2 = new Swiper('.swiper2', {
  direction: `horizontal`,
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
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
      slidesPerView: 1,
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

var mySwiper4 = new Swiper('.swiper4', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 25000000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
var mySwiper5 = new Swiper('.swiper5', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 25000000,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: '.swiper-button-nexti',
    prevEl: '.swiper-button-previ',
  },
})
