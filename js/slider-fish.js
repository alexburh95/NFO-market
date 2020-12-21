// var mySwiper = new Swiper('.swiper-container', {
//     // slidesPerView: 3,
//     spaceBetween: 140,
//     width: '100%',

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// })

const slider = new Splide('#fish-slider', {
    perPage: 2,
    autoWidth: true,
    pagination: false,
    perMove: 1,
})
slider.mount()

const fishSlide = document.querySelector('.splide__slide.slide-with-fish');
const fish = document.querySelector('.splide__slide.slide-with-fish svg');

console.log(fish);

slider.on('move', index => {
    if (index >= 2 && !fishSlide.classList.contains('animated-fish')) {
        fishSlide.classList.add('animated-fish');
        
        fish.animate([
            {
                transform: 'translateX(0px)'
            },
            {
                transform: 'translateX(500px)'
            }
        ], {
            duration: 1500,
            easing: 'ease-in-out',
            delay: 300,
            fill: 'forwards',
            direction: 'alternate'
        })
    }
})
