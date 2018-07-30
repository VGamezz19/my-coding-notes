import Vue from 'vue'
import App from '@/App'

import { eventBusPlugin, objectPlugin } from '@/plugin'

Vue.use(eventBusPlugin)
Vue.use(objectPlugin)

new Vue({
  el: '#app',
  render: h => h(App)
})
