import './app.scss'

import initScroller from './plugins/scroll.js'

import colorCode from './components/codebox/prism.js'
import { createList, revealItem } from './components/reveal-list/reveal-list.js'
import { initMapbox, zoomIn, zoomOut } from './components/mapbox/mapbox.js'

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
initMapbox()
