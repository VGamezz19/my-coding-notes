<template lang="pug">
.container
  .columns
    .column.is-5.is-offset-3
      pm-track(:track="track")
</template>
<script>
  import {PmTrack} from '@/components/'
  import trackService from '@/services/track'

  export default {
    components: { PmTrack },
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
