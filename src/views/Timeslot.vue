<!--TODO: Implement Grid -->

<template>
  <div>
    <h1>Timeslot</h1>
    <h4>Please select a booking day and time from below-</h4>

    <!-- A simple button -->
    <button>Back</button>

    <!-- Implementation of Month view for the user      -->
    <label for="start">Start date:</label>

    <input
      type="date"
      id="start"
      name="trip-start"
      value="2018-07-22"
      min="2018-01-01"
      max="2018-12-31"
    />

    <!-- Implementation of week and time view for the user     -->
    <label for="meeting-time">Choose a time for your appointment:</label>

    <input
      type="datetime-local"
      id="meeting-time"
      name="meeting-time"
      value="2018-06-12T19:30"
      min="2018-06-07T00:00"
      max="2018-06-14T00:00"
    />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* Styling for the month view */
label {
  display: block;
  font: 1rem 'Fira Sans', sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}

/* Styling for the week and time view */
label {
  display: block;
  font: 1rem 'Fira Sans', sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
</style>
