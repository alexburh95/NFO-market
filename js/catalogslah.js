"use strict";

const first = document.querySelector('.first_sort');
const firstMenu = document.querySelector('.include_form')

const second = document.querySelector('.second_sort');
const secondMenu = document.querySelector('.include_form2')
const third = document.querySelector('.third_sort');
const thirdMenu = document.querySelector('.include_form3')


window.slash(first, firstMenu);
window.slash(second, secondMenu)
window.slash(third, thirdMenu)

const big_photo = document.querySelector('.big_photo');


const tik = document.querySelector('.sort_title');
window.arrow = document.querySelector('.down');
const chtcks = document.querySelector('.checkin')

window.popup = document.querySelector('.hidden_menu')
tik.addEventListener('click', function() {

    chtcks.classList.toggle('invisible_div')
window.popup.classList.toggle('hidden');
window.arrow.classList.toggle('up');
});