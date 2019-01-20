<template lang="pug">
.container
  .columns
    .column.is-3.has-text-centered
      figure.media-left
        p.image(v-show="track && track.album")
          img(:src="track.album.images[0].url")
        p
          a.button.is-primary.is-large
            span.icon(@click="selectTrack")
    
    .coluumn.is-8
      .panel
        .panel-heading
          h1.title {{track.name}}
        .panel-block
          article.media
            .media-content
              .content
                ul(v-for="(value, key) in track")
                  li
                    strong {{ key }}: &nbsp;
                    span {{ value}}
            nav.level
              .level-left
                a.level-item
      
</template>
<script>
  import trackService from '@/services/track'
  import trackMixin from '@/mixins/track'
  
  export default {
    mixins: [trackMixin],
    data () {
      return {
        track: {}
      }
    },
    // life cicle
    created () {
      const id = this.$route.params.id // si lo declaramos como ID, lo obtendremos con el mismo
      trackService.getById(id)
        .then(res => {
          this.track = res
        })
    }
  }
</script>

<style lang="scss" scoped>
  .columns {
    margin: 20px;
  }
</style>
