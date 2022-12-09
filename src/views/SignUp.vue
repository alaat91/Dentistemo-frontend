<template>
  <form @submit.prevent="submitHandler">
    <div>
      <label>firstName</label>
      <input
        type="firstName"
        v-model="form.firstName"
        placeholder="FirstNAme"
      />
    </div>

    <div>
      <label>lasttName</label>
      <input type="lastName" v-model="form.lastName" placeholder="LastName" />
    </div>

    <div>
      <label>SSN</label>
      <input type="SSN" v-model="form.SSN" placeholder="SSN" />
    </div>

    <div>
      <label>phoneNumber</label>
      <input
        type="phoneNumber"
        v-model="form.phoneNumber"
        placeholder="PhoneNumber"
      />
    </div>

    <div>
      <label>email</label>
      <input type="email" v-model="form.email" placeholder="Email" />
    </div>

    <div>
      <label>password</label>
      <input type="password" v-model="form.password" placeholder="Password" />
    </div>

    <div>
      <label>confirmPassword</label>
      <input
        type="password"
        v-model="form.confirmPassword"
        placeholder="ConfirmPassword"
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
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    }
  },
  methods: {
    submitHandler: async function (e) {
      try {
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
