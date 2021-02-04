'use script'

const bigPhoto = document.querySelector('.big_photo')
const smallPhoto = document.querySelectorAll('.small_img')
smallPhoto.forEach(item => {
  item.addEventListener('click', () => {
    bigPhoto.src = item.src
  })
})
