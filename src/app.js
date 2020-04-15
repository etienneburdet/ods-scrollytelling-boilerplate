import './app.scss'

import initScroller from './plugins/scroll.js'

import setGaugeProgress from './components/ods-gauge/ods-gauge.js'
import { addActiveClass, removeActiveClass } from './components/default.js'
import longestBikePath from './components/ods-api-call/ods-api-call.js'

longestBikePath()

const callbacks = {
  'map-idf': {
    enter: addActiveClass,
    exit: removeActiveClass
  },
  'chart-idf': {
    enter: addActiveClass,
    exit: removeActiveClass
  },
  'longest-bikepath': {
    enter: longestBikePath
  }
}

initScroller(callbacks)
