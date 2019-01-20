<template lang="pug">
.container(v-if="track && track.album")
  .columns
    .column.is-3.has-text-centered
      figure.media-left
        p.image
          img(:src="track.album.images[0].url")
        p
          a.button.is-primary.is-large
            span.icon(@click="selectTrack")
    
    .coluumn.is-8
      .panel
        .panel-heading
          h1.title {{trackTitle}}
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
import trackMixin from '@/mixins/track'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  mixins: [trackMixin],
  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },
  created () {
    const id = this.$route.params.id // si lo declaramos como ID, lo obtendremos con el mismo

    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById({ id }).then(() => console.log('Track loaded...'))
    }
  },
  methods: {
    ...mapActions(['getTrackById'])
  }
}
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}
</style>
