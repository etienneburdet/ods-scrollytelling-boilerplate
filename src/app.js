import './app.scss'

import initScroller from './plugins/scroll.js'
import colorCode from './plugins/prism.js'

import { createList, revealItem } from './components/reveal-list/reveal-list.js'
import { initMapbox, zoomIn, zoomOut } from './components/mapbox/mapbox.js'

const callbacks = {
  'api-progress': {
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
