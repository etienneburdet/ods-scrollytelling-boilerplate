const toggleActiveClass = (response) => {
  const feature = document.getElementById(response.element.dataset.feature)
  feature.classList.toggle('active')
  response.element.classList.toggle('active')
}

export { toggleActiveClass }
