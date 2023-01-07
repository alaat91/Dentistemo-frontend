<!--TODO: Implement Grid -->

<template>
  <div>
    <the-navigation></the-navigation>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <h1>Timeslot</h1>
    <h4>Please select a booking date and time from below-</h4>
    <!-- Month view -->
    <div>
      <label>Choose a date</label>
      <b-form-datepicker
        dropright
        header-tag=""
        size="sm"
        class="mb-2"
        value-as-date
        @input="calendarChange(calendarDate)"
        v-model="calendarDate"
        :date-disabled-fn="dateDisabled"
        start-weekday="1"
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
            {{ currentWeek[1] ? currentWeek[1].getDate() : 0 }}
          </div>
        </b-col>
        <b-col cols="2">
          <div class="Daylabel">Thursday</div>
          <div class="Daylabel">
            {{ currentWeek[2] ? currentWeek[2].getDate() : 0 }}
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
      <b-col cols="2" class="daycolumn">
        <b-col v-for="timeslot in timeslots" v-bind:key="timeslot._id">
          <TimeslotItem
            class="timeslot"
            v-if="
              new Date(timeslot.start).toDateString() ===
              currentWeek[0].toDateString()
            "
            v-bind:timeslot="timeslot"
          />
        </b-col>
      </b-col>
      <b-col cols="2" class="daycolumn" id="timeslotCol">
        <b-col v-for="timeslot in timeslots" v-bind:key="timeslot._id">
          <TimeslotItem
            class="timeslot"
            v-if="
              new Date(timeslot.start).toDateString() ===
              currentWeek[1].toDateString()
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
              new Date(timeslot.start).toDateString() ===
              currentWeek[2].toDateString()
            "
            v-bind:timeslot="timeslot"
          />
        </b-col>
      </b-col>
      <b-col cols="2" class="daycolumn" id="timeslotCol">
        <b-col v-for="timeslot in timeslots" v-bind:key="timeslot._id">
          <TimeslotItem
            class="timeslot"
            v-if="
              new Date(timeslot.start).toDateString() ===
              currentWeek[3].toDateString()
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
              new Date(timeslot.start).toDateString() ===
              currentWeek[4].toDateString()
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

  mounted: async function () {
    // Getss the specific clinic that the user clicked on the previous page
    this.clinincId = this.$route.params.clinicId

    // new Date() creates a date object that stores the date and time
    // of the moment the Date object was created
    this.currentWeek = this.getWeek(new Date())
    try {
      const res = await API.get(
        `/clinics/${
          this.clinincId
        }/available?start=${this.currentWeek[0].getTime()}&end=${this.currentWeek[4].getTime()}`
      )
      this.timeslots = res.data
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
    async nextWeek() {
      const dates = []
      for (let i = 0; i < 5; i++) {
        dates.push(
          new Date(
            this.currentWeek[i].getTime() + 0 * 24 * 60 * 60 * 1000 + 604800000
          )
        )
      }
      this.currentWeek = dates
      const res = await API.get(
        `/clinics/${
          this.clinincId
        }/available?start=${this.currentWeek[0].getTime()}&end=${this.currentWeek[4].getTime()}`
      )
      this.timeslots = res.data
    },

    async lastWeek() {
      const dates = []
      for (let i = 0; i < 5; i++) {
        dates.push(
          new Date(
            this.currentWeek[i].getTime() + 0 * 24 * 60 * 60 * 1000 - 604800000
          )
        )
      }
      this.currentWeek = dates
      const res = await API.get(
        `/clinics/${
          this.clinincId
        }/available?start=${this.currentWeek[0].getTime()}&end=${this.currentWeek[4].getTime()}`
      )
      this.timeslots = res.data
      console.log(this.timeslots)
    },

    async calendarChange(date) {
      const firstDay = new Date(
        date.getTime() - (date.getDay() - 1) * 24 * 60 * 60 * 1000
      )
      const dates = [firstDay]
      for (let i = 1; i < 5; i++) {
        dates.push(new Date(firstDay.getTime() + i * 24 * 60 * 60 * 1000))
      }
      this.currentWeek = dates
      const res = await API.get(
        `/clinics/${
          this.clinincId
        }/available?start=${this.currentWeek[0].getTime()}&end=${this.currentWeek[4].getTime()}`
      )
      this.timeslots = res.data
    },

    dateDisabled(ymd, date) {
      // Disables weekends (Sunday = `0`, Saturday = `6`) and
      // disables days that fall on the for example 13th of the month
      const weekday = date.getDay()
      const day = date.getDate()
      // Returns `true` if the date should be disabled   // || day === 13
      return weekday === 0 || weekday === 6
    },
    confirmAppointement() {
      const button = this.$refs.chosenTime
      const buttonTime = button.textContent
      const clinicId = this.$route.params
      this.$router.push({
        name: 'timeslots-confirm',
        params: { cId: clinicId },
        query: { time: buttonTime, date: this.calendarDate.toDateString() },
      })
    },
  },

  data() {
    return {
      clinincId: '',
      currentWeek: [],
      timeslots: [],
      calendarDate: new Date(),
      items: [
        {
          text: 'Home',
          href: '/home',
        },
        {
          text: 'TimeSlots',
          active: true,
        },
        // {
        //   text: 'Confirmation',
        //   href: '/confimBooking',
        // },
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
.mb-2 {
  font-size: 13px;
}
#lowertop {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#dateRange {
  background-color: lightblue;
  text-align: center;
  font-weight: bold;
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
.timeslot {
  margin-top: 10px;
  margin-bottom: 1px;
  max-width: 215px;
  position: relative;

  /* Setting the size + Setting the max size means all
  timeslots are the same size and not relative to it's content */
}
#timeslotCol {
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
