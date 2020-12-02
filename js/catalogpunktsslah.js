"use strict";

let content = document.querySelector('.sort_title');
const strela = document.querySelector('.down')
let contentText = content.textContent;
console.log(content.textContent);


const title = document.querySelectorAll('.sort');

title.forEach(item=>{

item.addEventListener('click',()=>{

console.log(item.textContent)
content.textContent = item.textContent;

console.log(window.popup);
window.popup.classList.toggle('hidden');
window.arrow.classList.toggle('up');
})
})
strela.addEventListener('click',()=>{
    window.popup.classList.toggle('hidden');
window.arrow.classList.toggle('up');
})