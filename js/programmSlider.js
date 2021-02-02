var mySwiper3 = new Swiper('.swiper8', {
    // Optional parameters
    direction: 	`horizontal`,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,

      
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