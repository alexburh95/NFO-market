'use strict'

const container = document.querySelector('.catalog_item')
const button = container.querySelector('.to_cart')
const popup = container.querySelector('.choosen_item')
const toggle = container.querySelector('.perecluch')
popup.style.display = 'none'

button.addEventListener('click', () => {
  popup.style.display = 'flex'
  popup.classList.remove('hidden')
  toggle.classList.remove('hidden')
  button.style.display = 'none'
})
