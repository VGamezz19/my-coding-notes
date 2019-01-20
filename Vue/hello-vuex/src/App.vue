<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>
      <h2>Contador</h2>
      <p> {{count}}</p>
      <p>{{stringTest}}</p>
      <div>
        <button @click="increment(10)"> + </button>
        <button @click="decrement"> - </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'app',
  data() {
    return {
      test: 'test'
    }
  },
  computed: {
    ... mapState(['count']),
    stringTest() {
      return this.test + this.count
    }
  },
  methods: {
    ... mapMutations(['decrement']),
    increment(number) {
      this.$store.commit('increment', {number});
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
