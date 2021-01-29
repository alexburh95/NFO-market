var mySwiper3 = new Swiper('.swiper3', {
    // Optional parameters
    direction: 	`horizontal`,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
   autoplay: {
        delay: 5000,
      },
    },
      
    // If we need pagination
   
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-nexti',
      prevEl: '.swiper-button-previ',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  
    // And if we need scrollbar
    
  });