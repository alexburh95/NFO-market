"use strict";
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

const big_photo = document.querySelector('.big_photo');
console.log(big_photo);

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