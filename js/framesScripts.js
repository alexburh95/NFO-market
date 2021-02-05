'use strict'
const emailPattern =
  '([a-z0-9_-]+.)*[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+)*.[a-z]{2,6}$'
  const phonePattern = '^[ 0-9]+$'
const container1 = document.querySelector('.frame_content')

const container2 = document.querySelector('.new_buyers')

const formToggler = (container) =>{
    const radiobuttons = container.querySelectorAll('input[type="radio"]')
    const toggledInput = container.querySelector('.toggled_input')
    const password_input = container.querySelector('input[type="password"]')
    const button = container.querySelector('button[type="submit"]')
    radiobuttons.forEach(item => {
      item.addEventListener('click', () => {
        if (item.value === 'email') {
          toggledInput.placeholder = 'EMAIL'
          toggledInput.type = 'email'
          toggledInput.value = ''
          toggledInput.pattern = emailPattern
          toggledInput.name = 'email'
        } else {
          toggledInput.placeholder = '8 999 999 99 99'
          toggledInput.type = 'tel'
          toggledInput.value = ''
          toggledInput.pattern = phonePattern
          toggledInput.name = 'phone'
        }
      })
    })
    
    const checkInput = (choosen_input) => {
      choosen_input.addEventListener('input', () => {
        if (password_input.value !== '' && password_input.value !== '') {
          button.disabled = false
        } else {
          button.disabled = true
        }
      })
    }
    checkInput(password_input)
    checkInput(toggledInput)
    
}

formToggler(container1)
formToggler(container2)
