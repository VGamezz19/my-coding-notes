<template lang="pug">
.tasks
  ul.tasks-list
    li.tasks-list__li.tasks-list--no-data(v-show = "!tasks.length")
      small no data found
    task-component(
      v-if = "tasks.length"
      v-for = "(task) in tasks"
      :key = "task.id"
      :name="task.name"
      :time="task.time"
      :id="task.id"
      @remove="$emit('removeTask', task.id)"
      @update="update"
    )
</template>

<script>
  import { TaskComponent } from './Task'
  export default {
    name: 'tasks-component',
    components: {
      TaskComponent
    },
    props: {
      tasks: Array
    },
    methods: {
      update (task) {
        this.$emit('updateTask', task)
      }
    }
  }
</script>