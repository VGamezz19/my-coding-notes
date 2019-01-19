<template lang="pug">
  main
    transition(name="move")
      pm-loader(v-show="isLoading")
    
    transition(name="move")    
      PmNotification(v-show="showNotification", :error="textNotification.error")
        h1(slot="title") {{ textNotification.title }}
        p(slot="body") {{ textNotification.body }}

    section.section(v-show="!isLoading")
      nav.nav.has-shadow
        .container
          input.input.is-large(
            type="text",
            placeholder="Buscar canciones",
            v-model="searchQuery",
            @keyup.enter="search"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
          p
            small {{ searchMessage }}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            pm-track(
              v-blur="t.preview_url"
              :class="{'is-active': t.id === selectedTrack}",
              :track="t",
              @select="setSelectedTrack")
</template>

<script>
import { PmLoader, PmNotification } from '@/components/shared'
import { PmTrack } from '@/components'

import { track } from '@/services'

export default {
  name: 'app',
  components: { PmTrack, PmLoader, PmNotification },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      textNotification: {
        title: '',
        body: '',
        error: false
      },
      selectedTrack: ''
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  watch: {
    showNotification (current, prev) {
      if (current) {
        setTimeout(() => { this.showNotification = prev }, 3000)
      }
    }
  },
  methods: {
    async search () {
      if (!this.searchQuery) return

      this.isLoading = true

      this.tracks = await track.search(this.searchQuery)
        .then(res => {
          const { total, items } = res.tracks

          this.setNotification(total)
          this.showNotification = true

          return items
        })

      this.isLoading = false
    },

    setNotification (totalSearch) {
      const body = `Encontrados: ${totalSearch}`

      if (totalSearch) {
        const title = 'Succed'
        const error = false

        this.textNotification = { title, body, error }
      } else {
        const title = 'Error'
        const error = true

        this.textNotification = { title, body, error }
      }
    },

    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">
  .results {
    margin-top: 1rem;
  }

  .is-active {
    border: 3px #23d160 solid;
  }
</style>
