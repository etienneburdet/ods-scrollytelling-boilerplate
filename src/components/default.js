const addActiveClass = (response) => {
  const feature = document.getElementById(response.element.dataset.feature)
  feature.classList.add('active')
  response.element.classList.add('active')
}

const removeActiveClass = (response) => {
  const feature = document.getElementById(response.element.dataset.feature)
  feature.classList.remove('active')
  response.element.classList.remove('active')
}

export { addActiveClass, removeActiveClass }
