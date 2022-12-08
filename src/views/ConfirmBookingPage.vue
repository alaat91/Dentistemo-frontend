<template>
  <div>
    <the-navigation></the-navigation>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <h2>Your booking details:</h2>
    <div>
      <p>
        You have booked time at {{ booking.clinic }} at {{ booking.address }}
      </p>
      <p>Welcome to us at {{ booking.data }} at {{ booking.time }}</p>
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
            v-model="booking.email"
            type="email"
            placeholder="Your email"
            disabled="disabled"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="booking.name"
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
import TheNavigation from '../components/TheNavigation.vue'
export default {
  components: { TheNavigation },
  data() {
    return {
      booking: {
        name: 'Alaa',
        email: 'alaa@taleb.com',
        clinic: 'Dentistemo',
        address: 'Andra long gatan 3b',
        data: '2022-12-12, fri',
        time: '9:30 - 10:00',
      },
      form: {
        email: '',
        name: '',
      },

      show: true,
      items: [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'TimeSlots',
          href: '/timeslots',
        },
        {
          text: 'Confirmation',
          active: true,
        },
      ],
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
      console.log(this.form, this.time)
    },
    onCancel() {
      // Reset our form values
      this.form.email = ''
      this.form.name = ''

      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$router.push('/timeslot')
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>
