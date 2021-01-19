"use strict";

const container = document.querySelectorAll(".slash");

const closeAll = document.querySelector('.close_all')

const allIpnputs = document.querySelectorAll('input');



container.forEach((item) => {
  const inputs = item.querySelectorAll("input");
 
  let counter = item.querySelector(".site_bar_count");
const close = item.querySelector('.item_close');
let count = 0;
close.addEventListener('click', ()=>{
inputs.forEach(input=>{
input.checked=false;
})
count = 0;
counter.style.display = "none";

})
  

  inputs.forEach((input) => {
    input.addEventListener("click", () => {
      if (input.checked === true) {
        count++;
        if (count > 0) {
          counter.style.display = "flex";
        }
        console.log(count);
      }
      if (input.checked === false) {
        count--;
        if (count == 0) {
          counter.style.display = "none";
        }
        console.log(count);
      }

      counter.innerHTML = `(${count})`;
    });
  });

  closeAll.addEventListener('click', ()=>{
   
    allIpnputs.forEach(item=>{
item.checked=false;


    })

    const allSpans= document.querySelectorAll('.site_bar_count');
    allSpans.forEach(span=>{
        span.style.display = "none";
    })
    
    count = 0;
   
  
})

});


