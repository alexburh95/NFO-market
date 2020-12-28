


  window.slash =(evt, choosenClass ) =>{
    evt.addEventListener('click', function() {

      
 choosenClass.classList.toggle('hidden');
 const arrow = evt.querySelector('.down');
  arrow.classList.toggle('up');
    });
}


let sticky = new Sticky('.header_main');



