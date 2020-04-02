import './plugins/ods-widgets/stylesheets/ods-widgets.less'
import './assets/stylesheets/app.scss'
import 'bootstrap'

const registerSW = () => {
  navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
      console.log('SW registered: ', registration)
    })
    .catch(registrationError => {
      console.log('SW registration failed: ', registrationError)
    })
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', registerSW)
}
