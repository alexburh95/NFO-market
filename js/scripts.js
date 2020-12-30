


  window.slash =(evt, choosenClass ) =>{
    evt.addEventListener('click', function() {

      
 choosenClass.classList.toggle('hidden');
 const arrow = evt.querySelector('.down');
  arrow.classList.toggle('up');
    });
}


let sticky = new Sticky('.header_main');



const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    })
  
    // window.scrollBy(0, -10)
  })
})