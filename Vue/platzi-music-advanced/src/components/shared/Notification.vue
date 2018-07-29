<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        slot(name="title") Default Title Notification
        .notification(:class="error ? 'is-danger' : 'is-success'")
          slot(name="body") Default body lorem lorem
</template>

<script>
export default {
  props: {
    error: { type: Boolean, required: true }
  }
}
</script>

<style lang="scss" scoped>
  .notification {
    margin: 10px;
  }
</style>
