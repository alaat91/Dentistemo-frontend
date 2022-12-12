<template>
  <form @submit.prevent="submitHandler">
    <div>
      <label>email</label>
      <input type="email" v-model="form.email" placeholder="Email" />
    </div>

    <div>
      <label>password</label>
      <input type="password" v-model="form.password" placeholder="Password" />
    </div>
    <button type="submit">Login</button>
  </form>
</template>

<script>
import { API } from '../config/api'

export default {
  name: 'Login',
  data: function () {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    submitHandler: async function (e) {
      try {
        const res = await API.post('/auth/login', this.form)
        localStorage.setItem('token', res.data.token)
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
