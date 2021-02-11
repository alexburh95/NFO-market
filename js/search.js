const searchContainer = document.querySelector('.search_result')
const buttons = searchContainer.querySelectorAll('li')
const viewContent = document.querySelectorAll('.tabs_in')

const openAccordeon = (parrent, children) => {
  const selector = parrent.dataset.tab
  const content = document.getElementById(selector)

  children.forEach(item => {
    item.classList.remove('view')
  })
  content.classList.add('view')
}

buttons.forEach(item => {
  item.addEventListener('click', () => {
    buttons.forEach(element => {
      element.classList.remove('fat')
    })
    item.classList.add('fat')
    openAccordeon(item, viewContent)
  })
})

const tablet_changes = () => {
  if (window.screen.width <= 992) {
    viewContent.forEach(item => {
      item.classList.remove('view')
      item.classList.add('hidden')
    })
    const filter_titles = document.querySelectorAll('.sort')
    const content = document.querySelector('.sort_title')
    const container = document.querySelector('.hidden_menu')
    const strela = document.querySelector('.down')
    content.addEventListener('click', () => {
      container.classList.toggle('hidden')
      strela.classList.toggle('up')
    })
    filter_titles.forEach(item => {
      item.addEventListener('click', () => {
        content.textContent = item.textContent
        container.classList.toggle('hidden')
        strela.classList.toggle('up')

        openAccordeon(item, viewContent)
      })
    })
  }
}

tablet_changes()
