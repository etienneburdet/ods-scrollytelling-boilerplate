import './app.scss'

import initScroller from './plugins/scroll.js'

const toggleActiveClass = (response) => {
  const feature = document.getElementById(response.element.dataset.feature)
  feature.classList.toggle('active')
  response.element.classList.toggle('active')
}

const setGaugeProgress = (response) => {
  const percent = response.progress
  const gauge = document.getElementById('ods-gauge')
  gauge.setAttribute('value', percent)
}

const callbacks = {
  'map-idf': toggleActiveClass,
  'chart-idf': toggleActiveClass,
  gauge: {
    progress: setGaugeProgress
  }
}

initScroller(callbacks)
