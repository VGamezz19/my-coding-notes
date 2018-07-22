<template lang="pug">
  #app
    pm-header

    pm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav.has-shadow
        .container
          input.input.is-large(
            type="text",
            placeholder="Buscar canciones",
            v-model="searchQuery"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
          p
            small {{ searchMessage }}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks") 
            pm-track(
              :class="{'is-active': t.id === selectedTrack}",
              :track="t", 
              @select="setSelectedTrack")
    pm-footer
</template>

<script>
import { PmFooter, PmHeader } from '@/components/layout'
import { PmLoader } from '@/components/shared'
import { PmTrack } from '@/components'

import { track } from '@/services'

export default {
  name: 'app',
  components: { PmFooter, PmHeader, PmTrack, PmLoader },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: ''
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  methods: {
    async search () {
      if (!this.searchQuery) return

      this.isLoading = true

      this.tracks = await track.search(this.searchQuery)
        .then(res => res.tracks.items)

      this.isLoading = false
    },

    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  margin-top: 60px;
}

.results {
  margin-top: 1rem;
}

.is-active {
  border: 3px #23d160 solid;
}
</style>
