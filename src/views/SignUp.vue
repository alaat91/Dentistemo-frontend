<template>
  <div>
    <b-jumbotron
      header="SIGN UP NOW AND GET YOUR TEETH STRAIGHT!"
      lead="Welcome dear customer! 
      This is the page where you create your account in order to explore our beautiful 
      web application and its fanteethstic features. With our dentist partners, 
      you know you're always in good hands and modern clinics. Wait no more, 
      find your Dentisitmo today!"
    />
    <b-form
      class="col-12 col-md-4"
      @submit.prevent="onSubmit"
      @reset.prevent="onReset"
      v-if="show"
    >
      <b-form-group id="input-group-1" label="First Name" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.firstName"
          type="firstname"
          placeholder="Enter your first name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Last Name" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.lastName"
          placeholder="Enter your last name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="SSN" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.SSN"
          type="SSN"
          placeholder="Enter your social security number"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Email" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.email"
          placeholder="Enter your email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Password" label-for="input-4">
        <b-form-input
          type="password"
          id="input-4"
          v-model="form.password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-6"
        label="confirmedPassword"
        label-for="input-5"
      >
        <b-form-input
          type="password"
          id="input-4"
          v-model="form.confirmPassword"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="phoneNumber" label-for="input-6">
        <b-form-input
          type="phoneNumber"
          id="input-4"
          v-model="form.phoneNumber"
          placeholder="Enter your phone number"
          required
        ></b-form-input>
      </b-form-group>

      <b-button class="signupbtn" type="submit" pill variant="primary"
        >Sign up</b-button
      >
      <b-button class="resetbtn" type="reset" pill variant="outline-info"
        >Reset</b-button
      >
    </b-form>
  </div>
</template>

<script>
import { API } from '../config/api'

export default {
  name: 'Signup',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        SSN: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
      },
      show: true,
    }
  },

  methods: {
    /*
    onSubmit: async function (e) {
      try {
        console.log(this.form)
        const res = await API.post('/auth/signup', this.form)
        localStorage.setItem('token', res.data.token)
        this.$router.push('/')
      } catch (error) {
        console.error(error)
      }
    },
    */

    async onSubmit() {
      setTimeout(function () {
        window.location.reload()
      }, 0)
      API.post('auth/signup', {
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        email: this.form.email,
        SSN: this.form.SSN,
        password: this.form.password,
        confirmPassword: this.form.confirmPassword,
        phoneNumber: this.form.phoneNumber,
      }).then((response) => {
        localStorage.setItem('token', res.data.token)
        this.$router.push('/')
      })
    },

    async onReset() {
      // Reset our form values
      this.form.firstName = ''
      this.form.lastName = ''
      this.form.SSN = ''
      this.form.email = ''
      this.form.password = ''
      this.form.confirmPassword = ''
      this.form.phoneNumber = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>

<style scoped>
.col-12 {
  padding-top: 3%;
  background-color: #dde8e8;
  margin: 0 auto;
  width: 80%; /* value of your choice which suits your alignment */
}
.signupbtn {
  margin-right: 5px;
  margin-bottom: 10px;
}
.resetbtn {
  margin-right: 5px;
  margin-bottom: 10px;
}
</style>
