var mySwiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 	`horizontal`,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    
  })

  window.mySwiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 	`horizontal`,
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
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



  var mySwiper3 = new Swiper('.swiper3', {
    // Optional parameters
    direction: 	`horizontal`,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
   autoplay: {
        delay: 5000,
      },
      
    // If we need pagination
   
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-nexti',
      prevEl: '.swiper-button-previ',
    },
  
    // And if we need scrollbar
    
  });


  const tik = document.querySelector('.sort_title');
  const arrow = document.querySelector('.down');
  const chtcks = document.querySelector('.checkin')
  console.log(tik);
const popup = document.querySelector('.hidden_menu')
  tik.addEventListener('click', function() {

      chtcks.classList.toggle('invisible_div')
popup.classList.toggle('hidden');
arrow.classList.toggle('up');
  });

const slash =(evt, choosenClass ) =>{
    evt.addEventListener('click', function() {

      
 choosenClass.classList.toggle('hidden');
 const arrow = evt.querySelector('.down');
  arrow.classList.toggle('up');
    });
}
const first = document.querySelector('.first_sort');
const firstMenu = document.querySelector('.include_form')

const second = document.querySelector('.second_sort');
const secondMenu = document.querySelector('.include_form2')
const third = document.querySelector('.third_sort');
const thirdMenu = document.querySelector('.include_form3')

slash(first, firstMenu);
slash(second, secondMenu)
slash(third, thirdMenu)