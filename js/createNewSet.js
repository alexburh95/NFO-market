"use strict";
const bottle  = document.querySelector('.animate_bottle');
const botContainer= document.querySelector('.box_animation');
const button = document.querySelector('.add_cart_button');
const choosenItem = document.querySelector('.choosen_item_to_set')
console.log(botContainer)
const item  = document.querySelector('.salehits__item')
bottle.addEventListener('click',()=>{
bottle.classList.toggle('bottle-paused');

})

item.addEventListener('click',()=>{
   botContainer.classList.add('hidden')
   button.disabled = false;
   choosenItem.classList.remove('hidden');
});
const popup = document.querySelector('.choosen_item');
popup.style.display = 'none';
button.addEventListener('click',()=>{
const popup = document.querySelector('.choosen_item');

popup.style.display="flex";
})

let content = document.querySelector('.sort_title');
const strela = document.querySelector('.sorting');
let contentText = content.textContent;
console.log(strela);


const title = document.querySelectorAll('.sort');

title.forEach(item=>{

item.addEventListener('click',()=>{
    console.log(item)
    strela.classList.toggle('up');
console.log(item.textContent)
content.textContent = item.textContent;

console.log(window.popup);
window.popup.classList.toggle('hidden');

})
})
strela.addEventListener('click',()=>{
    console.log('сука')
    window.popup.classList.toggle('hidden');
strela.classList.toggle('up');
})

const tik = document.querySelector('.sort_title');

const chtcks = document.querySelector('.checkin')

window.popup = document.querySelector('.hidden_menu')
tik.addEventListener('click', function() {

    chtcks.classList.toggle('invisible_div')
window.popup.classList.toggle('hidden');
strela.classList.toggle('up');
});

const containerAddNabor = document.querySelector('.add_nabor_to_cart')
const add_nabor = containerAddNabor.querySelector('.podrob')
const soderjimoe =  containerAddNabor.querySelector('.products_in_cart_container')
const skrit = containerAddNabor.querySelector('.skrit')

window.slash(add_nabor, soderjimoe)
skrit.addEventListener('click', () =>{
    soderjimoe.classList.add('hidden')
    add_nabor.classList.remove('hidden')
})

add_nabor.addEventListener('click', () =>{
    add_nabor.classList.add('hidden')
   
})