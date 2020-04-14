import scrollama from 'scrollama'

export default (callbacks) => {
  const scroller = scrollama()

  //This a general setting that accepts any callback at enter and exit.
  // Most of the time you wil use only one function such as toggleActiveClass, in which case it's simpler to directly invoke the callback : 
  // scroller
  //   .setup({
  //     step: '.step',
  //     offset: 0.5,
  //     progress: true
  //   })
  //   .onStepEnter(toggleActiveClass)
  //   .onStepExit(toggleActiveClass)

  scroller
    .setup({
      step: '.step',
      offset: 0.5,
      progress: true
    })
    .onStepEnter((response) => {
      const callback = callbacks[response.element.dataset.feature].enter
      callback(response)
    })
    .onStepExit((response) => {
      const callback = callbacks[response.element.dataset.feature].exit
      callback(response)
    })
    .onStepProgress((response) => {
      const progressCallback = callbacks[response.element.dataset.feature].progress
      if (progressCallback) {
        progressCallback(response)
      }
    })

  window.addEventListener('resize', scroller.resize)
}
