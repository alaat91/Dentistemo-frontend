<!--TODO: Implement Grid -->

<template>
  <div>
    <the-navigation></the-navigation>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <h1>Timeslot</h1>
    <h4>Please select a booking date and time from below-</h4>
    <!-- Month view -->
    <div>
      {{ clinicName }}

      <label>Choose a date</label>
      <b-form-datepicker
        class="mb-2"
        value-as-date
        @input="calendarChange(calendarDate)"
        v-model="calendarDate"
        :date-disabled-fn="dateDisabled"
        locale="en"
      ></b-form-datepicker>
    </div>
    <b-row>
      <!--TODO: Add the dates of the week above in this format: Dec 12-16-->
      <div id="dateRange">
        {{ currentWeek[0] ? currentWeek[0].getDate() : 0 }}-{{
          currentWeek[4] ? currentWeek[4].getDate() : 0
        }}
      </div>
    </b-row>

    <div>
      <b-row cols="12" id="toprow">
        <b-col cols="1">
          <b-button @click="lastWeek()">&lsaquo;</b-button>
        </b-col>
        <b-col cols="2">
          <div class="Daylabel">Monday</div>
          <div class="Daylabel">
            {{ currentWeek[0] ? currentWeek[0].getDate() : 0 }}
          </div>
        </b-col>
        <b-col cols="2">
          <div class="Daylabel">Tuesday</div>
          <div class="Daylabel">
            {{ currentWeek[1] ? currentWeek[1].getDate() : 0 }}
          </div>
        </b-col>
        <b-col cols="2">
          <div class="Daylabel">Wednesday</div>
          <div class="Daylabel">
            {{ currentWeek[2] ? currentWeek[2].getDate() : 0 }}
          </div>
        </b-col>
        <b-col cols="2">
          <div class="Daylabel">Thursday</div>
          <div class="Daylabel">
            {{ currentWeek[3] ? currentWeek[3].getDate() : 0 }}
          </div>
        </b-col>
        <b-col cols="2">
          <div class="Daylabel">Friday</div>
          <div class="Daylabel">
            {{ currentWeek[4] ? currentWeek[4].getDate() : 0 }}
          </div>
        </b-col>
        <b-col cols="1">
          <b-button @click="nextWeek()">&rsaquo;</b-button>
        </b-col>
      </b-row>
    </div>

    <b-row cols="12">
      <!-- This b-col is only used to help with alignment-->
      <b-col cols="1"> </b-col>
      <!-- TODO: Remove dummy data and show timeslots from backend-->
      <b-col cols="2" class="daycolumn">
        <b-col v-for="timeslot in timeslots" v-bind:key="timeslot._id">
          <TimeslotItem
            class="timeslot"
            v-if="timeslot.start < currentWeek[0].getTime()"
            v-bind:timeslot="timeslot"
          />
        </b-col>
      </b-col>
      <b-col cols="2" class="daycolumn">
        <b-col v-for="timeslot in timeslots" v-bind:key="timeslot._id">
          <TimeslotItem
            class="timeslot"
            v-if="
              timeslot.start > currentWeek[0].getTime() &&
              timeslot.start < currentWeek[1].getTime()
            "
            v-bind:timeslot="timeslot"
          />
        </b-col>
      </b-col>
      <b-col cols="2" class="daycolumn">
        <b-col v-for="timeslot in timeslots" v-bind:key="timeslot._id">
          <TimeslotItem
            class="timeslot"
            v-if="
              timeslot.start > currentWeek[1].getTime() &&
              timeslot.start < currentWeek[2].getTime()
            "
            v-bind:timeslot="timeslot"
          />
        </b-col>
      </b-col>
      <b-col cols="2" class="daycolumn">
        <b-col v-for="timeslot in timeslots" v-bind:key="timeslot._id">
          <TimeslotItem
            class="timeslot"
            v-if="
              timeslot.start > currentWeek[2].getTime() &&
              timeslot.start < currentWeek[3].getTime()
            "
            v-bind:timeslot="timeslot"
          />
        </b-col>
      </b-col>
      <b-col cols="2" class="daycolumn">
        <b-col v-for="timeslot in timeslots" v-bind:key="timeslot._id">
          <TimeslotItem
            class="timeslot"
            v-if="
              timeslot.start > currentWeek[3].getTime() &&
              timeslot.start < currentWeek[4].getTime()
            "
            v-bind:timeslot="timeslot"
          />
        </b-col>
      </b-col>
      <!-- This b-col is only used to help with alignment-->
      <b-col cols="1"> </b-col>
    </b-row>
  </div>
</template>

<script>
import TheNavigation from '../components/TheNavigation.vue'
import TimeslotItem from '../components/TimeslotItem.vue'
import { API } from '../config/api'
export default {
  components: {
    TimeslotItem,
    TheNavigation,
  },

  created: async function () {
    const clinincId = this.$route.params.clinicId

    try {
      const res = await API.get('/clinics')
      this.clinics = res.data
      const chosenClininc = this.clinics.find(
        (clininc) => clininc.id === clinincId
      )
      this.clinicName = chosenClininc.name
    } catch (err) {
      console.error(err)
    }
  },
  mounted: async function () {
    // new Date() creates a date object that stores the date and time
    // of the moment the Date object was created
    this.currentWeek = this.getWeek(new Date())
    // TODO: import timeslots from backend by using currentweek[0] and currentweek[4]
    try {
      const res = await API.get(
        `/clinics/6399e6db5eeb90d26babb4f9/available?start=${this.currentWeek[0].getTime()}&end=${this.currentWeek[4].getTime()}`
      )
      this.timeslots = res.data
      console.log(this.timeslots)
    } catch (err) {
      console.error(err)
    }
  },
  computed: {
    weekday() {},
  },
  methods: {
    // getWeek gets the dates of the 5 days (mon-fri) of the parameter date
    getWeek(date) {
      const firstDay = new Date(
        date.getTime() - (date.getDay() - 1) * 24 * 60 * 60 * 1000
      )
      const dates = [firstDay]
      for (let i = 1; i < 5; i++) {
        dates.push(new Date(firstDay.getTime() + i * 24 * 60 * 60 * 1000))
      }
      return dates
    },
    // TODO: Improve logic of calendarChange
    // as there are unnecessary steps that can be removed
    nextWeek() {
      const dates = []
      for (let i = 0; i < 5; i++) {
        dates.push(
          new Date(
            this.currentWeek[i].getTime() + 0 * 24 * 60 * 60 * 1000 + 604800000
          )
        )
      }
      this.currentWeek = dates
      try {
        const res = API.get(
          `/clinics/6399e6db5eeb90d26babb4f9/available?start=${this.currentWeek[0].getTime()}&end=${this.currentWeek[4].getTime()}`
        )
        this.timeslots = res.data
        console.log(this.timeslots)
      } catch (err) {
        console.error(err)
      }
    },

    lastWeek() {
      const dates = []
      for (let i = 0; i < 5; i++) {
        dates.push(
          new Date(
            this.currentWeek[i].getTime() + 0 * 24 * 60 * 60 * 1000 - 604800000
          )
        )
      }
      this.currentWeek = dates
      const res = API.get(
        `/clinics/6399e6db5eeb90d26babb4f9/available?start=${this.currentWeek[0].getTime()}&end=${this.currentWeek[4].getTime()}`
      )
      this.timeslots = res.data
      console.log(this.timeslots)
    },
    calendarChange(date) {
      const firstDay = new Date(
        date.getTime() - (date.getDay() - 1) * 24 * 60 * 60 * 1000
      )
      const dates = [firstDay]
      for (let i = 1; i < 5; i++) {
        dates.push(new Date(firstDay.getTime() + i * 24 * 60 * 60 * 1000))
      }
      this.currentWeek = dates
    },
    dateDisabled(ymd, date) {
      // Disables weekends (Sunday = `0`, Saturday = `6`) and
      // disables days that fall on the for example 13th of the month
      const weekday = date.getDay()
      const day = date.getDate()
      // Returns `true` if the date should be disabled   // || day === 13
      return weekday === 0 || weekday === 6
    },
  },
  data() {
    return {
      clinicName: '',

      currentWeek: [],
      timeslots: [],
      calendarDate: new Date(),
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
      value: '',
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
#dateRange {
  background-color: lightblue;
  text-align: center;
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

#dateRange {
  background-color: lightblue;
  text-align: center;
  font-weight: bold;
}
.mb-2 {
  font-size: 13px;
}

@media screen and (max-width: 1500px) {
  .timeslot {
    width: 220px;
  }
}
@media screen and (max-width: 1360px) {
  .timeslot {
    width: 160px;
  }
}
@media screen and (max-width: 1100px) {
  .timeslot {
    width: 115px;
  }
}
.timeslot {
  margin-top: 10px;
  margin-bottom: 1px;
  max-width: 215px;
  position: relative;

  /* Setting the size + Setting the max size means all
  timeslots are the same size and not relative to it's content */
}
.timeslotCol {
  border-right-style: solid;
  border-left-style: solid;
  border-color: rgb(199, 199, 199);
}
.timeslotColRight {
  border-right-style: solid;
  border-color: rgb(199, 199, 199);
}
.timeslotColLeft {
  border-left-style: solid;
  border-color: rgb(199, 199, 199);
}
.Daylabel {
  font-weight: bold;
  text-align: center;
}
.daycolumn {
  text-align: center;
}
</style>
