"use strict";

const boxberry = document.querySelector("#boxberry");
const NOTHING ="";
const kurier = document.querySelector("#kurier");

const kurierContainer = document.querySelector('.choosen_kurier_container')
const boxberryContainer = document.querySelector(".boxbery_container");
const close = boxberryContainer.querySelector(".close_boxberry");
const miniBoxbery = document.querySelector(".boxbery_container_mini");
const miniClose = miniBoxbery.querySelector(".close_boxberry");

const forma = document.querySelector(".choosen_boxberry_container");

const chooseButton = miniBoxbery.querySelector(".blue_knopka");
console.log(chooseButton);
console.log(miniBoxbery);

const scrollInside = boxberryContainer.querySelector(".scroll_inside");
boxberry.addEventListener("click", () => {
    kurierContainer.classList.add('hidden')

  boxberryContainer.classList.remove("hidden");
  boxberryContainer.style.display = "flex";
});

close.addEventListener("click", () => {
  boxberryContainer.style.display = "none";
  boxberryContainer.classList.add("hidden");
});

scrollInside.addEventListener("click", () => {
  miniBoxbery.style.display = "flex";
  miniBoxbery.classList.remove("hidden");
});

miniClose.addEventListener("click", () => {
  miniBoxbery.style.display = "none";
  miniBoxbery.classList.add("hidden");
});

chooseButton.addEventListener("click", () => {
  boxberryContainer.style.display = "none";
  boxberryContainer.classList.add("hidden");
  miniBoxbery.style.display = "none";
  miniBoxbery.classList.add("hidden");
  forma.classList.remove("hidden");
});


kurier.addEventListener('click',()=>{
    forma.classList.add("hidden");
    kurierContainer.classList.remove('hidden')

})

const checkbox = kurierContainer.querySelector('input[type="checkbox"]');
const inputs = kurierContainer.querySelectorAll('input[type="text"]');
inputs.forEach(item=>{
    item.addEventListener('input', ()=>{
if(item.value!==NOTHING){
    checkbox.disabled=false;
}
else{
    checkbox.disabled=true;
    checkbox.checked=false;
}

    })
})

