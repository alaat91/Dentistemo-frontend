<template>
  <div>
    <b-button id="time" variant="outline-primary" size="sm">
      {{ millescenondToHoursAndMinutes }}</b-button
    >
  </div>
</template>

<script>
export default {
  props: ['timeslot'],
  computed: {
    millescenondToHoursAndMinutes() {
      const milliesecondToDate = new Date(this.timeslot.start)

      const dateInHoures = milliesecondToDate
        .getHours()
        .toString()
        .padStart(2, '0')

      const dateInMinutes = milliesecondToDate
        .getMinutes()
        .toString()
        .padStart(2, '0')
      return `${dateInHoures}:${dateInMinutes}`
    },
  },
}
</script>

<style scoped>
#time {
  width: 100%;
}
</style>
