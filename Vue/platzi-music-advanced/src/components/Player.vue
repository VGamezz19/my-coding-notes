<template lang="pug">
  .content(v-if="track.album")
    p.is-128x128
      img(:src="track.album.images[0].url")
    p
      strong {{ track.name }}
      small [{{ track.duration_ms }}]
    p
      audio(controls)
        source(:src="track.preview_url")
</template>

<script>
export default {

  data () {
    return {
      track: {}
    }
  },

  created () {
    this.$bus.$on('set-track', (track) => {
      this.track = track
    })
  },

  methods: {
    resetAudio ($audio) {
      $audio.pause()
      $audio.currentTime = 0
    }
  },

  watch: {
    track (current, prev) {
      if (!this.$helper.object.isEmpty(prev)) {
        const $audio = document.getElementsByTagName('audio').item(0)
        this.resetAudio($audio)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 124px;
    border-radius: 50%;
  }
</style>
