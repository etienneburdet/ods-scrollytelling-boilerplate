import './app.scss'

import initScroller from './plugins/scroll.js'

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

const setGaugeProgress = (response) => {
  const percent = response.progress
  const gauge = document.getElementById('ods-gauge')
  gauge.setAttribute('value', percent)
}

const callbacks = {
  'map-idf': {
    enter: addActiveClass,
    exit: removeActiveClass
  },
  'chart-idf': {
    enter: addActiveClass,
    exit: removeActiveClass
  },
  gauge: {
    progress: setGaugeProgress
  }
}

initScroller(callbacks)
