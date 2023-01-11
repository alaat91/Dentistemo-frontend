<template>
  <div>
    <the-navigation></the-navigation>

    <div class="appointments-container">
      <h2>Upcoming appointments</h2>
      <table v-if="upcomingAppointments.length > 0">
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Clinic</th>
          <th>Address</th>
          <th>Cancel Appointment</th>
        </tr>
        <tr v-for="appointment in upcomingAppointments" :key="appointment._id">
          <td>
            {{ format(new Date(appointment.date), "iiii, do 'of' LLLL, y") }}
          </td>
          <td>{{ format(new Date(appointment.date), 'kk:mm') }}</td>
          <td>{{ dentistInfo.get(appointment.dentist_id).clinic.name }}</td>
          <td>{{ dentistInfo.get(appointment.dentist_id).clinic.address }}</td>
          <td>
            <div v-if="appointment.date - dayInMilleSecond < Date.now()">
              <b-button
                type="reset"
                v-b-tooltip.hover.right="
                  'Booking can not be canceled since you have less then 24 hours to your appointment'
                "
                >Cancel</b-button
              >
            </div>
            <div v-else>
              <b-button
                @click="cancelBooking(appointment)"
                type="reset"
                variant="danger"
                >Cancel</b-button
              >
            </div>
          </td>
        </tr>
      </table>
      <p v-else>You do not have any upcoming appointments</p>
    </div>
    <div class="appointments-container">
      <h2>Previous appointments</h2>
      <table v-if="pastAppointments.length > 0">
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Clinic</th>
          <th>Address</th>
        </tr>
        <tr v-for="appointment in pastAppointments" :key="appointment._id">
          <td>{{ format(new Date(appointment.date), "do 'of' LLLL") }}</td>
          <td>{{ format(new Date(appointment.date), 'kk:mm') }}</td>
          <td>{{ dentistInfo.get(appointment.dentist_id).clinic.name }}</td>
          <td>{{ dentistInfo.get(appointment.dentist_id).clinic.address }}</td>
        </tr>
      </table>
      <p v-else>You do not have any previous appointments</p>
    </div>
  </div>
</template>

<script>
import { API } from '../config/api'
import TheNavigation from '../components/TheNavigation.vue'
import { format } from 'date-fns'
export default {
  components: { TheNavigation },
  data() {
    return {
      appointments: [],
      dentists: [],
      dayInMilleSecond: 86400000,
      format,
      API,
    }
  },
  mounted: async function () {
    this.fetchBookings()
  },
  methods: {
    async fetchDentists() {
      for (let i = 0; i < this.appointments.length; i++) {
        const appointment = this.appointments[i]
        try {
          const res = await API.get(
            `clinics/dentists/${appointment.dentist_id}`
          )
          this.dentists.push(res.data)
        } catch (err) {
          console.error(err)
        }
      }
    },
    async fetchBookings() {
      try {
        const res = await API.get('/bookings')
        this.appointments = res.data
        this.fetchDentists()
        this.$vToastify.success(`Your booking have been successfully canceled`)
      } catch (err) {
        console.error(err)
      }
    },
    async cancelBooking(appointment) {
      const bookingID = appointment._id
      try {
        const res = await API.delete(`/bookings/${bookingID}`)
        this.fetchBookings()
        this.$
      } catch (err) {
        this.$vToastify.error('Something went wrong')
      }
    },
  },
  computed: {
    upcomingAppointments() {
      return this.appointments.filter(
        (appointment) => appointment.date > Date.now()
      )
    },
    pastAppointments() {
      return this.appointments.filter(
        (appointment) => appointment.date < Date.now()
      )
    },
    dentistInfo() {
      const map = new Map()
      this.appointments.forEach((a) => {
        const dentist = this.dentists.filter((d) => d._id == a.dentist_id)[0]
        map.set(a.dentist_id, dentist)
      })
      return map
    },
  },
}
</script>

<style scoped>
.appointments-container {
  width: 50%;
  padding: 2rem 4rem;
}

.appointments-container h2 {
  margin-bottom: 2rem;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #b7c9e2;
}

@media screen and (max-width: 960px) {
  .appointments-container {
    width: 100%;
  }
}
</style>
