import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

import routes from '@/routes'
import msToMm from '@/filters/ms-to-mm'
import { eventBusPlugin, objectPlugin } from '@/plugin'

Vue.use(VueRouter)
Vue.use(eventBusPlugin)
Vue.use(objectPlugin)
Vue.use(msToMm)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
