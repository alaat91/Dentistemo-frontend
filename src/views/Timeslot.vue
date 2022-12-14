<!--TODO: Implement Grid -->

<template>
  <div>
    <the-navigation></the-navigation>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <h1>Timeslot</h1>
    <h4>Please select a booking day and time from below-</h4>

    <div>
      <b-row cols="12" id="toprow">
        <b-col cols="1">
          <b-button>&lsaquo;</b-button>
        </b-col>
        <b-col cols="2">
          <div>Monday</div>
        </b-col>
        <b-col cols="2">
          <div>Tuesday</div>
        </b-col>
        <b-col cols="2">
          <div>Wednesday</div>
        </b-col>
        <b-col cols="2">
          <div>Thursday</div>
        </b-col>
        <b-col cols="2">
          <div>Friday</div>
        </b-col>
        <b-col cols="1">
          <b-button>&rsaquo;</b-button>
        </b-col>
      </b-row>
    </div>

    <b-col v-for="timeslot in timeslots" v-bind:key="timeslot._id">
      <TimeslotItem v-bind:timeslot="timeslot" />
    </b-col>

    <b-row cols="12">
      <!-- This b-col is only used to help with alignment-->
      <b-col cols="1"> </b-col>
      <b-col cols="2">
        <b-button variant="outline-dark">10:00-10:30 </b-button>
        <b-button variant="outline-dark">10:30-11:00 </b-button>
      </b-col>
      <b-col cols="2">
        <b-button variant="outline-dark">10:00-10:30 </b-button>
        <b-button variant="outline-dark">10:30-11:00 </b-button>
      </b-col>
      <b-col cols="2">
        <b-button variant="outline-dark">10:00-10:30 </b-button>
        <b-button variant="outline-dark">10:30-11:00 </b-button>
      </b-col>
      <b-col cols="2">
        <b-button variant="outline-dark">10:00-10:30 </b-button>
        <b-button variant="outline-dark">10:30-11:00 </b-button>
      </b-col>
      <b-col cols="2">
        <b-button variant="outline-dark">10:00-10:30 </b-button>
        <b-button variant="outline-dark">10:30-11:00 </b-button>
      </b-col>
      <!-- This b-col is only used to help with alignment-->
      <b-col cols="1"> </b-col>
    </b-row>
  </div>
</template>

<script>
import TheNavigation from '../components/TheNavigation.vue'
import TimeslotItem from '../components/TimeslotItem.vue'
export default {
  components: {
    TimeslotItem,
    TheNavigation,
  },

  //Api.get('/ROUT TO BOOKING BACKEND').then((response) => {

  data() {
    return {
      timeslots: [],
      items: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'TimeSlots',
          active: true,
        },
        {
          text: 'Confirmation',
          href: '/confimBooking',
        },
      ],
    }
  },
}
</script>

<style scoped>
/* Styling for the month view */
label {
  display: block;
  font: 1rem 'Fira Sans', sans-serif;
}

#toprow {
  background-color: lightblue;
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
