<template lang="pug">
  li.task
    .columns
      .column.task-desc {{name}} - {{time}}
      .column.task-wrapper
        input.button.is-info.task__input.task__input--update(
          type="submit"
          value="update"
        ) 
        input.button.is-danger.task__input.task__input--delete(
          type="submit"
          value="delete"
          @click="$emit('remove')"
        )
</template>

<script>
  export default {
    name: 'task-component',
    props: {
      name: String,
      time: Number,
      id: Number
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