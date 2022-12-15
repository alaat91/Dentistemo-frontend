<!--TODO: Implement Grid -->

<template>
  <div>
    <the-navigation></the-navigation>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <h1>Timeslot</h1>
    <h4>Please select a booking date and time from below-</h4>
    <div>
      <label for="example-datepicker">Choose a date</label>
      <b-form-datepicker
        id="example-datepicker"
        class="mb-2"
      ></b-form-datepicker>
    </div>

    <div>
      <!--TODO: Add the dates of the week above in this format: Dec 12-16-->
      <b-row cols="12" id="toprow">
        <b-col cols="1">
          <b-button @click="lastWeek(currentWeek[0])">&lsaquo;</b-button>
        </b-col>
        <b-col cols="2">
          <!-- {{ currentWeek[0] }} is for testing to see if the array gets updated-->
          <div class="Daylabel">Monday {{ currentWeek[0] }}</div>
        </b-col>
        <b-col cols="2">
          <div class="Daylabel">Tuesday</div>
        </b-col>
        <b-col cols="2">
          <div class="Daylabel">Wednesday</div>
        </b-col>
        <b-col cols="2">
          <div class="Daylabel">Thursday</div>
        </b-col>
        <b-col cols="2">
          <div class="Daylabel">Friday</div>
        </b-col>
        <b-col cols="1">
          <b-button @click="nextWeek(currentWeek[0])">&rsaquo;</b-button>
        </b-col>
      </b-row>
    </div>

    <div>
      <b-row cols="12">
        <b-col cols="1"> </b-col>
        <b-col cols="2">
          <div class="Daylabel">{{ this.currentDates[0] }}</div>
        </b-col>
        <b-col cols="2">
          <div class="Daylabel">{{ this.currentDates[1] }}</div>
        </b-col>
        <b-col cols="2">
          <div class="Daylabel">{{ this.currentDates[2] }}</div>
        </b-col>
        <b-col cols="2">
          <div class="Daylabel">{{ this.currentDates[3] }}</div>
        </b-col>
        <b-col cols="2">
          <div class="Daylabel">{{ this.currentDates[4] }}</div>
        </b-col>
        <b-col cols="1"> </b-col>
      </b-row>
    </div>
    <b-col v-for="timeslot in timeslots" v-bind:key="timeslot._id">
      <TimeslotItem v-bind:timeslot="timeslot" />
    </b-col>

    <b-row cols="12">
      <!-- This b-col is only used to help with alignment-->
      <b-col cols="1"> </b-col>
      <!-- TODO: Remove dummy data and show timeslots from backend-->
      <b-col cols="2">
        <b-button pill variant="outline-dark" class="timeslot"
          >10:00-10:30
        </b-button>
        <b-button pill variant="outline-dark" class="timeslot"
          >10:30-11:00
        </b-button>
      </b-col>
      <b-col cols="2">
        <b-button pill variant="outline-dark" class="timeslot"
          >10:00-10:30
        </b-button>
        <b-button pill variant="outline-dark" class="timeslot"
          >10:30-11:00
        </b-button>
      </b-col>
      <b-col cols="2">
        <b-button pill variant="outline-dark" class="timeslot"
          >10:00-10:30
        </b-button>
        <b-button pill variant="outline-dark" class="timeslot"
          >10:30-11:00
        </b-button>
      </b-col>
      <b-col cols="2">
        <b-button pill variant="outline-dark" class="timeslot"
          >10:00-10:30
        </b-button>
        <b-button pill variant="outline-dark" class="timeslot"
          >10:30-11:00
        </b-button>
      </b-col>
      <b-col cols="2">
        <b-button pill variant="outline-dark" class="timeslot"
          >10:00-10:30
        </b-button>
        <b-button pill variant="outline-dark" class="timeslot"
          >10:30-11:00
        </b-button>
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

  mounted() {
    // new Date() creates a date object that stores the date and time
    // of the moment the Date object was created
    this.currentWeek = this.getWeek(new Date())
    // TODO: import timeslots from backend by using currentweek[0] and currentweek[6]
  },

  methods: {
    // getWeek gets the dates of the 5 days (mon-fri) of the parameter date
    getWeek(date) {
      const firstDay = new Date(
        date.getTime() - (date.getDay() - 1) * 24 * 60 * 60 * 1000
      )
      this.currentDates[0] = firstDay.getDate
      const dates = [firstDay]
      var str = firstDay.toDateString().substring(8, 10)
      console.log(str)
      this.currentDates[0] = str
      for (let i = 1; i < 5; i++) {
        dates.push(new Date(firstDay.getTime() + i * 24 * 60 * 60 * 1000))
        str = dates[i].toDateString().substring(8, 10)
        console.log(str)
        this.currentDates[i] = str
      }
      return dates
    },
    // TODO: Improve logic of nextWeek and lastWeek as there are unnecessary steps
    nextWeek(date) {
      const firstDay = new Date(
        date.getTime() - (date.getDay() - 8) * 24 * 60 * 60 * 1000
      )
      const dates = [firstDay]
      var str = firstDay.toDateString().substring(8, 10)
      this.currentDates[0] = str
      for (let i = 1; i < 5; i++) {
        dates.push(new Date(firstDay.getTime() + i * 24 * 60 * 60 * 1000))
        str = dates[i].toDateString().substring(8, 10)
        this.currentDates[i] = str
      }
      return (this.currentWeek = dates)
    },

    lastWeek(date) {
      const firstDay = new Date(
        date.getTime() - (date.getDay() + 6) * 24 * 60 * 60 * 1000
      )
      const dates = [firstDay]
      var str = firstDay.toDateString().substring(8, 10)
      this.currentDates[0] = str
      for (let i = 1; i < 5; i++) {
        dates.push(new Date(firstDay.getTime() + i * 24 * 60 * 60 * 1000))
        str = dates[i].toDateString().substring(8, 10)
        this.currentDates[i] = str
      }
      return (this.currentWeek = dates)
    },
  },
  data() {
    return {
      currentWeek: [],
      currentDates: [],
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
.timeslot {
  margin-top: 5px;
  margin-bottom: 5px;
  width: 220px;
  max-width: 220px;
  /* Setting the size + Setting the max size means all 
  timeslots are the same size and not relative to it's content */
}
.Daylabel {
  font-weight: bold;
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
