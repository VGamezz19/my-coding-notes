<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        slot(name="title") Algo anduvo mal 🙁
        .notification.is-danger
          slot(name="body") Algo anduvo mal 🙁
</template>

<style lang="scss" scoped>
  .notification {
    margin: 10px;
  }
</style>
