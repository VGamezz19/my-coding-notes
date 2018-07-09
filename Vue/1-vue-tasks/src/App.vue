<template lang="pug">
  #app.app
    section.app-section.section
      nav.app-nav.nav
        h1.app-nav__title Welcome to Task Managmen {{ showestatusUser }}
      .app-wrapper
        .container
          .columns
            .column
              .tasks
                ul.tasks-list
                  li.tasks-list__li.tasks-list--no-data(v-show = "!tasks.length")
                    small no data found
                  li.tasks-list__li(
                    v-if = "tasks.length"
                    v-for = "(task,index) in tasks"
                    :key = "index"
                  ) {{task.name}} - {{task.time}}
            .column
              form-component(@addTask="addTask")
</template>

<script>
import { FormComponent } from './components/Form'

export default {
  name: 'app',
  components: {
    FormComponent
  },
  data () {
    return {
      tasks: [],
      taskName: '',
      taskTime: '',
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
      // const { taskName: name, taskTime: time } = this

      this.tasks.push({name, time})
      this.refreshForm()
    },
    refreshForm () {
      this.taskName = ''
      this.taskTime = ''
    }
  },
  watch: {
    taskName () {
      this.estatusUser = 'Adding Task'
    },
    taskTime () {
      this.estatusUser = 'Adding Time'
    }
  }
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
