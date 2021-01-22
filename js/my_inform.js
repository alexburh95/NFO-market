const kurierContainer = document.querySelector('.information.adress')
const NOTHING ="";
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