<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <h2>Contador</h2>
      <p> {{count}}</p>
      <p>Count double: {{double}}</p>
      <div>
        <button @click="increment(10)"> + </button>
        <button @click="decrement"> - </button>

        <button @click="incremenetAsync(10)"> + async </button>

      </div>
    </div>
    <child />
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import Child from './Child.vue'

export default {
  name: 'app',
  components: {Child},
  computed: {
    ... mapState(['count']),    
    // double() {
    //   return this.$store.getters.getDouble
    // }
    ... mapGetters({double: 'getDouble'})
  },
  methods: {
    ... mapMutations(['decrement']),
    increment(number) {
      this.$store.commit('increment', {number});
    },
    incremenetAsync(number) {
      this.$store.dispatch('incrementAsync', {number})
        .then((res) => {
          console.log('Accion terminada', res)  
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
