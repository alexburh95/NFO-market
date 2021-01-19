"use strict";

const mobileMenusContainer = document.querySelector('.filters_container')
const miniMenu = mobileMenusContainer.querySelectorAll('a')
const punkts  = document.querySelectorAll('.mobile_podmenu')
const buttonBack = document.querySelector('.back_home')
const mobile_filters = document.querySelector('.mobile_filters')
const back =  document.querySelector('.closed_button')
const filter_button = document.querySelector('.filter_button')
console.log(buttonBack)

miniMenu.forEach((item) => {
item.addEventListener('click',()=>{
    
    punkts.forEach((value) =>{
      
            if(value.id === item.dataset.tab){
                value.classList.remove('hidden')
                console.log('епта')
                mobileMenusContainer.classList.add('hidden')
                buttonBack.classList.remove('hidden')
            }



        
    })
})
})


miniMenu.forEach((item) => { 

    punkts.forEach((value) =>{

        if(value.id === item.dataset.tab){

        const inputs = value.querySelectorAll("input");
 
        let counter = item.querySelector(".site_bar_count");
        console.log(counter)
        let count= 0;
      
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


        const resetAllFilters =document.querySelector('.reset_filters')
        const allIpnputsButtons = mobile_filters.querySelectorAll('input')
        resetAllFilters.addEventListener('click', ()=>{
            const allSpans= document.querySelectorAll('.site_bar_count');
            allSpans.forEach(span=>{
                span.style.display = "none";
            })
            
            count = 0;
            allIpnputsButtons.forEach(item=>{
          item.checked=false;
          
        
          
          
            })
          
          
           
          
          })
     
    }
    })



})
   



buttonBack.addEventListener('click',()=>{
    console.log('fsdf')
    mobileMenusContainer.classList.remove('hidden')
    punkts.forEach((value) =>{ 
value.classList.add('hidden')

buttonBack.classList.add('hidden')
    })
})

filter_button.addEventListener('click',()=>{
    mobile_filters.classList.remove('hidden')
})
back.addEventListener('click',()=>{
    mobile_filters.classList.add('hidden')
})