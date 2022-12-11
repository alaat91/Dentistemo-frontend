<!--TODO: Implement Grid -->

<template>
  <div>
    <the-navigation></the-navigation>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <h1>Timeslot</h1>
    <h4>Please select a booking day and time from below-</h4>

    <div>
      <b-button-toolbar key-nav aria-label="Toolbar with button groups">
        <b-button-group class="mx-1"> </b-button-group>
        <b-button-group class="mx-1">
          <b-row>
            <b-col>
              <b-button>&lsaquo;</b-button>
            </b-col>
            <b-col>
              <b-button>Monday</b-button>
            </b-col>
            <b-col>
              <b-button>Tuesday</b-button>
            </b-col>
            <b-col>
              <b-button>Wednesday</b-button>
            </b-col>
            <b-col>
              <b-button>Thursday</b-button>
            </b-col>
            <b-col>
              <b-button>Friday</b-button>
            </b-col>
            <b-col>
              <b-button>&rsaquo;</b-button>
            </b-col>
          </b-row>
        </b-button-group>
        <b-button-group class="mx-1"> </b-button-group>
      </b-button-toolbar>
    </div>

    <!--TODO: Implement Grid -->
    <div>
      <b-dropdown
        id="dropdown-dropright"
        dropright
        text="Drop-Right"
        variant="primary"
        class="m-2"
      >
        <b-dropdown-item href="#">Book this timeslot</b-dropdown-item>
      </b-dropdown>
    </div>

    <b-col v-for="timeslot in timeslots" v-bind:key="timeslot._id">
      <TimeslotItem v-bind:timeslot="timeslot" />
    </b-col>

    <!-- A simple button 
    <button>Back</button> -->
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
