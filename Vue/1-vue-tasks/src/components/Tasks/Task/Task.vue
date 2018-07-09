<template lang="pug">
  li.task
    .columns(v-show="!toEdit")
      .column.task-desc {{name}} - {{time}}
      .column.task-wrapper
        input.button.is-info.task__input.task__input--update(
          type="submit"
          value="update"
          @click="handlerToEdit"
        ) 
        input.button.is-danger.task__input.task__input--delete(
          type="submit"
          value="delete"
          @click="$emit('remove')"
        )
    form.columns(
      v-show="toEdit"
      @submit.prevent="update"
    )
      .column.task-desc
        input.input.is-large(:value="name" placeholder="updating task name")
        input.input.is-large(:value="time" placeholder="updating task time")
      .column.task-wrapper
        input.button.is-info.task__input.task__input--update(
          type="submit"
          value="update"
        ) 
        a.button.is-danger.task__input.task__input--delete(
          @click="handlerToEdit"
        ) &times;
</template>

<script>
  export default {
    name: 'task-component',
    props: {
      name: String,
      time: Number,
      id: Number
    },
    data () {
      return {
        toEdit: false
      }
    },
    methods: {
      handlerToEdit () {
        this.toEdit = !this.toEdit
      },
      update () {
        this.$emit('update', this.id, this.name, this.time)
      }
    }
  }
</script>

<style lang="scss">
.task {
  &-wrapper {
    align-self: center;
    justify-content: space-evenly;
    display: flex;
  }

  &-dec {
    align-self: center;
    justify-content: center;
    display: flex;
  }

  &__input{
    min-width: 5.5rem;

    &--delete {
      &:hover{
        font-weight: bold;
      }
    }
  }
}
</style>