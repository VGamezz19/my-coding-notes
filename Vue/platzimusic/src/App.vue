<template lang="pug">
  #app
    img(src='./assets/logo.png')
    h1 PlatziMusic
    ul
      li(v-for="artist in artists") {{ artist.name }}
</template>

<script>
import getArtists from './api'

export default {
  name: 'app',
  data () {
    return {
      artists: []
    }
  },
  mounted: function () {
    getArtists()
      .then((artists) => {
        this.artists = artists
      })
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

h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
