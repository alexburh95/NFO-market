"use strict";

let content = document.querySelector('.sort_title');

let contentText = content.textContent;
console.log(content.textContent);


const title = document.querySelectorAll('.sort');

title.forEach(item=>{

item.addEventListener('click',()=>{
console.log('ты пидорас')
console.log(item.textContent)
content.textContent = item.textContent;

console.log(window.popup);
window.popup.classList.toggle('hidden');
window.arrow.classList.toggle('up');
})
})