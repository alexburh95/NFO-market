'use strict'

const form = document.querySelector('.information')
const input = form.querySelectorAll('.col-lg-6')
input.forEach(item => {
  const input = item.querySelector(`input`)
  const krest = item.querySelector('.input_close')
  input.addEventListener('input', () => {
    krest.classList.remove('hidden')
    krest.addEventListener('click', () => {
      input.value = ''
    })
  })
})
