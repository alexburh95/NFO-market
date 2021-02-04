'use strict'

const content = document.querySelector('.sort_title')
const strela = document.querySelector('.down')
const contentText = content.textContent
const title = document.querySelectorAll('.sort')

title.forEach(item => {
  item.addEventListener('click', () => {
    content.textContent = item.textContent
    window.popup.classList.toggle('hidden')
    window.arrow.classList.toggle('up')
  })
})
strela.addEventListener('click', () => {
  window.popup.classList.toggle('hidden')
  window.arrow.classList.toggle('up')
})
