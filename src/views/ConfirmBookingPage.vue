<template>
  <div>
    <!-- Page Header -->
    <the-navigation></the-navigation>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <h2>Your booking details:</h2>
    <div>
      <p>
        You are making an appointment at {{ clinicName }} at
        {{ clinincAdress }}
      </p>
      <p>Welcome to us at {{ chosenDate }} at {{ chosenTime }}</p>
    </div>
    <div>
      <b-form @submit="onSubmit" @reset="onCancel" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Your email"
            disabled="disabled"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            disabled="disabled"
            placeholder="Your name"
            required
          ></b-form-input>
        </b-form-group>

        <div>
          <b-button variant="success" @click="modalShow = !modalShow"
            >Confirm</b-button
          >

          <b-modal v-model="modalShow" title="Bookings detailes" @ok="handleOk">
            <p><b>Are you sure you want to confirm your booking at:</b></p>
            <p><b>Clinic:</b> {{ clinicName }}</p>
            <p><b>Time:</b> {{ chosenTime }}</p>
            <p><b>Date:</b> {{ chosenDate }}</p>
          </b-modal>
          <b-button type="reset" variant="danger">Cancel </b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import { API } from '../config/api'
import TheNavigation from '../components/TheNavigation.vue'
export default {
  components: { TheNavigation },
  props: [''],
  data() {
    return {
      clinics: [],

      clinicName: '',
      clinincAdress: '',
      chosenTime: '',
      chosenTimeInMilleseconds: '',
      chosenDate: '',
      dentistId: '',

      userData: {},

      form: {
        email: '',
        name: '',
      },

      show: true,
      modalShow: false,

      items: [
        {
          text: 'Home',
          href: '/home',
        },
        {
          text: 'TimeSlots',
          href: `/clinic/${this.$route.params.clinicId}`,
        },
        {
          text: 'Confirmation',
          active: true,
        },
      ],
    }
  },
  created: async function () {
    // Fetching clinics data from Clinincs component
    this.dentistId = this.$route.query.dentist
    this.chosenTimeInMilleseconds = this.$route.query.time
    const clinincId = this.$route.params.clinicId
    const appointmentData = new Date(this.$route.query.time)
    const properlyFormatedChosenDate = appointmentData.toDateString('EN-US')
    const hours = appointmentData.getHours().toString().padStart(2, '0')
    const mintues = appointmentData.getMinutes().toString().padStart(2, '0')
    const properlyFormatedChosenTime = `${hours}:${mintues}`
    try {
      const res = await API.get('/clinics')
      this.clinics = res.data
      const chosenClininc = this.clinics.find(
        (clininc) => clininc.id === clinincId
      )
      this.clinicName = chosenClininc.name
      this.clinincAdress = chosenClininc.address
      this.chosenTime = properlyFormatedChosenTime
      this.chosenDate = properlyFormatedChosenDate
    } catch (err) {
      console.error(err)
    }
  },
  mounted: async function () {
    // fetching the the user data from auth component
    try {
      const res = await API.get(`/users/profile/`)
      this.userData = res.data
      this.form.name = res.data.firstName
      this.form.email = res.data.email
    } catch (err) {
      console.error(err)
    }
  },
  methods: {
    handleOk: async function () {
      try {
        const res = await API.post('/bookings/', {
          dentist_id: this.dentistId,
          date: this.chosenTimeInMilleseconds,
        })
        console.log(res.data)
        this.$vToastify.success('Your Booking have been made successfully!')
        this.$router.push({ name: 'my-bookings' })
      } catch (err) {
        const error = err.response.data.error
        console.error(error)
      }
    },
    onSubmit(event) {
      event.preventDefault()
    },
    onCancel() {
      // Reset our form values
      this.form.email = ''
      this.form.name = ''

      // Trick to reset/clear native browser form validation state and redirect to the time slots page
      this.show = false
      this.$router.push({
        name: 'timeslots',
        params: { clinicId: this.$route.params.clinicId },
      })
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>
