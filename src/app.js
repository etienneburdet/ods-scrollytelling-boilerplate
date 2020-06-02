import './app.scss'

import initScroller from './plugins/scroll.js'

import colorCode from './components/codebox/index.js'
import { createList, revealItem } from './components/reveal-list/index.js'
import { initMapbox, zoomIn, zoomOut } from './components/mapbox/index.js'

const callbacks = {
  'reveal-list': {
    progress: revealItem
  },
  mapbox: {
    enter: zoomIn,
    exit: zoomOut
  }
}

initScroller(callbacks)
colorCode()
createList()
// initMapbox()
