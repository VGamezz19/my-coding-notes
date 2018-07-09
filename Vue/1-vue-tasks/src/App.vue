<template lang="pug">
  #app.app
    section.app-section.section
      nav.app-nav.nav
        h1.app-nav__title Welcome to Task Managmen {{ showStatusUser }}
      .app-wrapper
        .container
          .columns
            .column
              tasks-component(
                :tasks="tasks"
                @removeTask="removeTask"
                @updateTask="updateTask"
              )
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
      tasks: [{name: 'test', time: 2, id: 0}],
      statusUser: 'Take it easy'
    }
  },
  computed: {
    showStatusUser () {
      return `-  ${this.statusUser}`
    }
  },
  methods: {
    addTask (name, time) {
      const id = this.tasks.length
      this.tasks.push({name, time, id})

      this.statusUser = 'Adding Task'
    },
    removeTask (id) {
      const indexTask = this.tasks.findIndex(task => task.id === id)
      this.tasks.splice(indexTask, 1)

      this.statusUser = 'Removing Task'
    },
    updateTask (id, name, time) {
      console.log(id, name, time)
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
