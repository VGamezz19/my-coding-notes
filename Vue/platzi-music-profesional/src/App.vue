<template lang="pug">
- var essentialLinks =[{url:'https://vuejs.org', name: 'Core Docs'}, {url:'https://forum.vuejs.org', name: 'Forum'},{url:'https://chat.vuejs.org', name:'Community Chat'},{url:'https://twitter.com/vuejs', name:'TwitterChat'}]
- var ecosystemLinks =[{url:'http://router.vuejs.org/', name: 'vue-router'},{url:'http://vuex.vuejs.org/', name: 'vuex'},{url:'http://vue-loader.vuejs.org/', name: 'vue-loader'},{url:'https://github.com/vuejs/awesome-vue', name: 'awesome-vue'}]

#app
  img(src="./assets/logo.png")
  h1 {{ msg }}
  h2 Essential Links
    ul
      each link in essentialLinks
        li
          a(href=link.url)= link.name
  h2 Ecosystem
    ul
      each link in ecosystemLinks
        li
          a(href=link.url)= link.name
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
