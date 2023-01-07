<template>
  <div>
    <b-button id="time" size="lg" @click="confirmBooking">
      {{ millescenondToHoursAndMinutes }}</b-button
    >
  </div>
</template>

<script>
export default {
  props: ['timeslot'],
  computed: {
    // converting milliseconds to hours and mintues to properly render it in the timeslot page
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
  methods: {
    // emitting confirm booking to timeslot page
    confirmBooking() {
      this.$emit(
        'confirmBooking',
        this.timeslot.start,
        this.timeslot.dentist,
        this.millescenondToHoursAndMinutes
      )
    },
  },
}
</script>

<style scoped>
#time {
  font-family: 'Courier New', Courier, monospace;
  width: 100%;
}
</style>
