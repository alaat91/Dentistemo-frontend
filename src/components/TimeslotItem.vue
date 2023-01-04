<template>
  <div>
    <b-button> {{ timeslot.start }}</b-button>
  </div>
</template>

<script>
export default {
  props: ['timeslot'],
}
</script>

<style scoped></style>
