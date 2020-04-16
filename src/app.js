import './app.scss'

import initScroller from './plugins/scroll.js'
import { addActiveClass, removeActiveClass } from './components/active-class.js'
import { createList, revealItem } from './components/reveal-list/reveal-list.js'
import initMapbox from './components/mapbox/mapbox.js'

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
    enter: addActiveClass,
    exit: removeActiveClass,
    progress: revealItem
  }
}

createList()
initMapbox()
initScroller(callbacks)
