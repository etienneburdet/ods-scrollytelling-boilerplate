import './plugins/ods-widgets/stylesheets/ods-widgets.less'
import './assets/stylesheets/app.scss'

import mapConfig from './plugins/mapbox-storytelling/storytelling.js'

import { storyConfig } from './components/story/config.js'
import './components/story/story.scss'

mapConfig(storyConfig)
