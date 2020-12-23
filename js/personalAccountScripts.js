'use strict';
const first_popup = document.querySelector('.first_popup');
const closeButton = first_popup.querySelector('.close_popup')
const uno = document.querySelector('.uno');
const unoContent = document.querySelector('.include_punk_content1');
const NOTHING ="";

const tab = document.querySelector('#tab1')
const showContent = document.querySelector('.welcome_account')
window.slash(uno, unoContent);

const duo = document.querySelector('.duo');
const duoContent = document.querySelector('.include_punk_content2');
const tre = document.querySelector('.tre');
const treContent = document.querySelector('.include_punk_content3');
const quatro = document.querySelector('.quatro');
const quatroContent = document.querySelector('.include_punk_content4');


window.slash(duo, duoContent);
window.slash(tre, treContent);

closeButton.addEventListener('click', () => {
first_popup.classList.add('hidden');
showContent.classList.remove('hidden');


})
const account_menu = document.querySelector('.account_menu')
const buttons1 = account_menu.querySelectorAll("li");

buttons1.forEach((item) => {
  item.addEventListener("click", () => {
    buttons1.forEach((element) => {
      element.classList.remove("fat");
    });
    item.classList.add('fat')

    const selector = item.dataset.tab;
    const content = document.getElementById(selector);
    const viewContent = document.querySelectorAll(".tabs_in");
    viewContent.forEach((item) => {
      item.classList.remove("view");
    });
    
    content.classList.add("view");
  });
});
const kurierContainer = document.querySelector('.information.adress')
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
const buttons = document.querySelectorAll(".tabs_title");

buttons.forEach((item) => {
  item.addEventListener("click", () => {
    buttons.forEach((element) => {
      element.classList.remove("tabs_title_after");
    });

    const selector = item.dataset.tab;
    const content = document.getElementById(selector);
    const viewContent = document.querySelectorAll(".tabs_ins");
    viewContent.forEach((item) => {
      item.classList.remove("view");
    });
    item.classList.add("tabs_title_after");
    content.classList.add("view");
  });
});

