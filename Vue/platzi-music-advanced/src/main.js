import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

import routes from '@/routes'

import { eventBusPlugin, objectPlugin } from '@/plugin'

Vue.use(VueRouter)
Vue.use(eventBusPlugin)
Vue.use(objectPlugin)

const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
