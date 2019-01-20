<template>
  <main>
    <div>
      <h2>Contador</h2>
      <p> {{count}}</p>
      <p>Count double: {{double}}</p>
      <div>
        <button @click="increment(10)"> + </button>
        <button @click="decrement"> - </button>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'child',
  computed: {
    ... mapState(['count']),
    ... mapGetters({double: 'getDouble'})
  },
  methods: {
    ... mapMutations(['decrement']),
    increment(number) {
      this.$store.commit('increment', {number});
    }
  }
}
</script>
