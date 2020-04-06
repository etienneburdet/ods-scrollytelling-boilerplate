import scrollama from 'scrollama'

export default () => {
  const scroller = scrollama()

  scroller
    .setup({
      step: '.step',
      offset: 0.5,
      progress: true
    })
    .onStepEnter(response => {
      const feature = document.getElementById(response.element.dataset.feature)
      // We add the same class to both the story block and the feature, but they will have different effect with css chaining
      feature.classList.add('active')
      response.element.classList.add('active')
    })
    .onStepExit(response => {
      const feature = document.getElementById(response.element.dataset.feature)
      feature.classList.remove('active')
      response.element.classList.remove('active')
    })

  window.addEventListener('resize', scroller.resize)
}
