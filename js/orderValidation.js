"use strict";

const form = document.querySelector('.information');
const input = form.querySelectorAll('.col-lg-6');
console.log(input);

console.log(form);

input.forEach(item => {

    const input = item.querySelector(`input`);
const krest = item.querySelector('.input_close');
console.log(krest);
input.addEventListener('input', ()=>{

krest.classList.remove('hidden');
krest.addEventListener('click', ()=>{
input.value = '';

})

})

})