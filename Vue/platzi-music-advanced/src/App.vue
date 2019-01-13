<template lang="pug">
  #app
    pm-header

    router-view

    pm-footer
</template>

<script>
import { PmFooter, PmHeader } from '@/components/layout'

export default {
  name: 'app',
  components: { PmFooter, PmHeader }
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
</style>
