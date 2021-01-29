
     var mySwiper = new Swiper('.swiper2', {
        // Optional parameters
        direction: 	`horizontal`,
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
          // when window width is >= 320px
         
          1020: {
            slidesPerView: 4,
            spaceBetween: 30
          },
         760: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 30
          },
        },
        autoplay: {
            delay: 500000000,
          },
          on: {
            init() {
              this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
              });
        
              this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
              });
            }
          },
      
        // If we need pagination
       
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-nexti',
          prevEl: '.swiper-button-previ',
        },
      
        // And if we need scrollbar
       
      })