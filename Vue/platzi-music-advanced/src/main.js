import Vue from 'vue'
import App from '@/App'

import EventBus from '@/plugin/event-bus'

Vue.use(EventBus)

new Vue({
  el: '#app',
  render: h => h(App)
})
