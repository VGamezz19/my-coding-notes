<template lang="pug">
  #app.app
    section.app-section.section
      nav.app-nav.nav
        h1.app-nav_title Welcome to Task Managmen {{ showestatusUser }}
      .app-wrapper
        .container
          .columns
            .tasks.column
              ul.tasks-list
                li.tasks-list_li.tasks-list--no-data(v-show = "!tasks.length")
                  small no data found
                li.tasks-list_li(
                  v-if = "tasks.length"
                  v-for = "(task,index) in tasks"
                  :key = "index"
                ) {{task.name}} - {{task.time}}
            form.form.column
              input.input.is-large.form-input.form-input_task-name(
                type="text",
                placeholder="Add new task to do"
                v-model="taskName"
              )
              input.input.is-large.form-input.form-input_task-time(
                type="text",
                placeholder="Add time to task"
                v-model="taskTime"
              )
              .form-wrapper.columns
                .form-wrapper-submits.column
                  a.button.is-info.is-large(@click="addTask") Add
                .form-wrapper-submits.column
                  a.button.is-danger.is-large(@click="refreshForm") &times;

              
              
    


</template>

<script>

export default {
  name: 'app',
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
    addTask () {
      console.log('add task')
    },
    refreshForm () {
      console.log('refresh form')
    }
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";

$border-bottom-s : .2rem;
$primary-color-gray: gray;
$font-sinze-xl: 2rem;

.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  &-nav {
    border-bottom: $border-bottom-s solid $primary-color-gray;

    &_title {
      font-size: $font-sinze-xl;
    }
  }

  &-wrapper {
    margin-top: 2rem;
  }

}

</style>
