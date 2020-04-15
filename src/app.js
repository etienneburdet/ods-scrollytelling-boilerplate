import './app.scss'

import initScroller from './plugins/scroll.js'

import setGaugeProgress from './components/ods-gauge/ods-gauge.js'
import { addActiveClass, removeActiveClass } from './components/default.js'

const callbacks = {
  'map-idf': {
    enter: addActiveClass,
    exit: removeActiveClass
  },
  'chart-idf': {
    enter: addActiveClass,
    exit: removeActiveClass
  },
  'ods-gauge': {
    enter: addActiveClass,
    exit: removeActiveClass,
    progress: setGaugeProgress
  }
}

initScroller(callbacks)
