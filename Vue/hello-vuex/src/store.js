import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // las propiedades, como si fuera data
  state: {
    count: 0
  },
  getters: {
    getDouble(state) {
      return state.count * 2;
    }
  },
  mutations: {
    increment(state, payLoad = {}) {
      return state.count += payLoad.number || 1
    },

    decrement(state) {
      state.count--
    }
  },

  actions: {
    incrementAsync(context, payLoad) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit('increment', payLoad)
          resolve(context.state.count)
        }, 2000)

      })
    } 
  }
})

export default store