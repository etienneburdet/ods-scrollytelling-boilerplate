import scrollama from 'scrollama'
import { toggleActiveClass } from '../components/ods-map/ods-map' // You can import specific callback if you want more than toggling a classx

export default () => {
  const scroller = scrollama()

  scroller
    .setup({
      step: '.step',
      offset: 0.5,
      progress: true
    })
    .onStepEnter(toggleActiveClass)
    .onStepExit(toggleActiveClass)

  window.addEventListener('resize', scroller.resize)
}
