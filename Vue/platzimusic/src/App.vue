<template lang="pug">
  #app
    img(src='./assets/logo.png')
    h1 PlatziMusic
    select(v-model="selectedCountry")
      option(v-for="country in countries" v-bind:value="country.value") {{ country.name }}

    Spinner(v-show="loading")

    ul
      Artist(v-for="artist in artists" v-bind:artist='artist' v-bind::key="artist.mbid")
</template>

<script>
import getArtists from "./api";
import Artist from "./components/Artists.vue";
import Spinner from "./components/Spinner.vue";

export default {
  name: "app",
  data() {
    return {
      artists: [],
      countries: [
        { name: "Argentina", value: "argentina" },
        { name: "Colombia", value: "colombia" },
        { name: "España", value: "spain" }
      ],
      selectedCountry: "argentina",
      loading: true
    };
  },
  components: { Artist, Spinner },
  methods: {
    refreshArtist(currentCountrySelected) {
      //self = this;
      this.loading = true;
      this.artists = [];
      getArtists(currentCountrySelected).then(artists => {
        this.loading = false;
        this.artists = artists;
      });
    }
  },
  mounted: function() {
    this.refreshArtist(this.selectedCountry);
  },
  watch: {
    selectedCountry() {
      this.refreshArtist(this.selectedCountry);
    }
  }
};
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
