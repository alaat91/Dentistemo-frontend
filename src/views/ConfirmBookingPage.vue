<template>
  <div>
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

        <b-button type="submit" variant="primary">Confim</b-button>
        <b-button type="reset" variant="danger">Cancel</b-button>
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
      chosenDate: '',
      userData: {},
      booking: {
        data: '2022-12-12, fri',
      },
      form: {
        email: '',
        name: '',
      },

      show: true,
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
    const clinincId = this.$route.params.clinicId
    const appointmentData = this.$route.query

    try {
      const res = await API.get('/clinics')
      this.clinics = res.data
      const chosenClininc = this.clinics.find(
        (clininc) => clininc.id === clinincId
      )
      this.clinicName = chosenClininc.name
      this.clinincAdress = chosenClininc.address
      this.chosenTime = appointmentData.time
      this.chosenDate = appointmentData.date
    } catch (err) {
      console.error(err)
    }
  },
  mounted: async function () {
    const userId = localStorage.getItem('LoggedUser')
    const userID = userId.slice(1, -1)
    try {
      const res = await API.get(`/users/userInfo/${userID}`)
      this.userData = res.data
      this.form.name = res.data.firstName
      this.form.email = res.data.email

      console.log(userId)
      console.log(res.data)
    } catch (err) {
      console.error(err)
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      // const userId = localStorage.getItem('LoggedUser')
      // const userID = userId.slice(1, -1)
      // const choosenDate = { date: this.$route.query.date }
      // console.log(this.$route.params.clinicId)
      // console.log(this.clinics)
      // console.log(this.$route.query)
      // console.log(userId)
      // console.log(userID)
      // console.log(this.form.firstName)
      // console.log(this.userData)
    },
    onCancel() {
      // Reset our form values
      this.form.email = ''
      this.form.name = ''

      // Trick to reset/clear native browser form validation state
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
