<template lang="pug">
  #app.app
    section.app-section.section
      nav.app-nav.nav
        h1.app-nav__title Welcome to Task Managmen {{ showestatusUser }}
      .app-wrapper
        .container
          .columns
            .column
              tasks-component(:tasks="tasks")
            .column
              form-component(@addTask="addTask")
</template>

<script>
import { FormComponent, TasksComponent } from './components'

export default {
  name: 'app',
  components: {
    FormComponent,
    TasksComponent
  },
  data () {
    return {
      tasks: [{name: 'test', time: 2}],
      estatusUser: 'Take it easy'
    }
  },
  computed: {
    showestatusUser () {
      return `-  ${this.estatusUser}`
    }
  },
  methods: {
    addTask (name, time) {
      this.tasks.push({name, time})
    }
  }
  // watch: {
  //   taskName () {
  //     this.estatusUser = 'Adding Task'
  //   },
  //   taskTime () {
  //     this.estatusUser = 'Adding Time'
  //   }
  // }
}
</script>

<style lang="scss">
@import "./scss/main.scss";
@import "./scss/variables.scss";

.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;

  &-nav {
    border-bottom: $border-bottom-s solid $primary-color-gray;

    &__title {
      font-size: $font-sinze-xl;
    }
  }

  &-wrapper {
    margin-top: $main-font-sinze;
  }
}
</style>
