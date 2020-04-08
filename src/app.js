import './app.scss'

import initScroller from './plugins/scroll.js'

const toggleActiveClass = (response) => {
  const feature = document.getElementById(response.element.dataset.feature)
  feature.classList.toggle('active')
  response.element.classList.toggle('active')
}

const callbacks = {
  'map-idf': toggleActiveClass,
  'chart-idf': toggleActiveClass,
  fluvial: toggleActiveClass
}

initScroller(callbacks)
