'use script';

const bigPhoto = document.querySelector('.big_photo')

console.log(bigPhoto);

const smallPhoto = document.querySelectorAll('.small_img')


smallPhoto.forEach((item) => {
    item.addEventListener('click', ()=>{
bigPhoto.src= item.src;
    });
  });

 