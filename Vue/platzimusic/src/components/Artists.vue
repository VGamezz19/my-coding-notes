<template lang="pug">
  li.artist
    h2: a(:href="artist.url" target="_blank") {{ artist.name }}
    img(:src="artist.image[2]['#text']")
</template>

<script>
export default {
  name: 'artist',
  props: [ 'artist' ]
}
</script>

<!-- Añade un data atribut id para que solo los elementos del escope de este componente puedan alcanzar estos estilos-->
<style lang="stylus" scoped>
li.artist
  display block
  margin 10px 0
</style>
