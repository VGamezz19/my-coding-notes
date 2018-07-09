<template lang="pug">
.tasks
  ul.tasks-list
    li.tasks-list__li.tasks-list--no-data(v-show = "!tasks.length")
      small no data found
    task-component(
      v-if = "tasks.length"
      v-for = "(task,index) in tasks"
      :key = "index"
      :name="task.name"
      :time="task.time"
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
    }
  }
</script>