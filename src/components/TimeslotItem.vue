<template>
  <div>
    <b-button id="time"> {{ timeslot.start }}</b-button>
  </div>
</template>

<script>
export default {
  props: ['timeslot'],
}
</script>

<style scoped>
#time {
  font-family: 'Courier New', Courier, monospace;
}
</style>
