<template>
  <form @submit.prevent="submitHandler">
    <div>
      <label>First Name</label>
      <input
        type="firstName"
        v-model="form.firstName"
        placeholder="Enter first name here"
      />
    </div>

    <div>
      <label>Last Name</label>
      <input
        type="lastName"
        v-model="form.lastName"
        placeholder="Enter last name here"
      />
    </div>

    <div>
      <label>SSN</label>
      <input type="SSN" v-model="form.SSN" placeholder="Enter SSN here" />
    </div>

    <div>
      <label>Email</label>
      <input type="email" v-model="form.email" placeholder="Enter email here" />
    </div>

    <div>
      <label>Password</label>
      <input
        type="password"
        v-model="form.password"
        placeholder="Enter new password here"
      />
    </div>

    <div>
      <label>Confirm Password</label>
      <input
        type="password"
        v-model="form.confirmPassword"
        placeholder="Confirm new password here"
      />
    </div>

    <div>
      <label>Phone Number</label>
      <input
        type="phoneNumber"
        v-model="form.phoneNumber"
        placeholder="Enter your phone number here"
      />
    </div>

    <button type="submit">Create Account</button>
  </form>
</template>

<script>
import { API } from '../config/api'

export default {
  name: 'Signup',
  data: function () {
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
    }
  },

  methods: {
    submitHandler: async function (e) {
      try {
        console.log(this.form)
        const res = await API.post('/auth/signup', this.form)
        localStorage.setItem('token', res.data.token)
        this.$router.push('/')
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style scoped></style>
