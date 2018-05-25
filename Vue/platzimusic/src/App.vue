<template lang="pug">
  #app
    img(src='./assets/logo.png')
    HelloWorld(msg='Welcome to Your Vue.js App')
    Some
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Some from './components/Spliting'
export default {
  name: 'app',
  components: {
    HelloWorld,
    Some
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
