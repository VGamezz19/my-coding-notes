<template lang="pug">
  form.form(@submit.prevent="add")
    input.input.is-large.form-input.form-input__task-name(
      type="text",
      placeholder="Add new task to do"
      v-model="name"
    )
    input.input.is-large.form-input.form-input__task-time(
      type="number",
      placeholder="Add time to task"
      v-model="time"
    )
    .form-wrapper.columns
      .form-wrapper-submits.column
        button.button.is-info.is-large Add
      .form-wrapper-submits.column
        a.button.is-danger.is-large(@click="refresh") &times;
</template>

<script>
  export default {
    name: 'form-component',
    data () {
      return {
        name: '',
        time: null
      }
    },
    methods: {
      add () {
        this.$emit('addTask', this.name, this.time)
        this.refresh()
      },
      refresh () {
        this.name = ''
        this.time = ''
      }
    }
  }
</script>

<style lang="scss">
@import "../../scss/variables.scss";

.form {
  &-input {
    margin-bottom: 1rem;
  }
}
</style>