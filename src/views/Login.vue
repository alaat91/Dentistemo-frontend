<template>
  <div>
    <b-form
      class="col-12 col-md-4"
      @submit.prevent="login"
      @reset="onReset"
      v-if="show"
    >
      <b-form-group id="input-group-1" label="Email" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter your email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Password"
        input
        label-for="input-2"
      >
        <b-form-input
          type="password"
          id="input-2"
          v-model="form.password"
          placeholder="Enter your password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button
        class="loginbtn"
        @click.prevent="login"
        type="submit"
        pill
        variant="primary"
        >Login</b-button
      >
      <b-button class="resetbtn" type="reset" pill variant="outline-danger"
        >Reset</b-button>

    </b-form>
  </div>
</template>

<script>
import { API } from '../config/api'

export default {
  name: 'Login',
  data() {
    return {
      selected: '',
      form: {
        email: '',
        password: ''
      },

      show: true
    }
  },

  methods: {
    login: async function (e) {
      try {
        const res = await API.post('/auth/login', this.form)
        localStorage.setItem('token', res.data.token)
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    },

    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
}
</script>

<style scoped>
.col-12 {
  padding-top: 2%;
  background-color: #76c1ff;
  margin: 0 auto;
  width: 80%;
  margin-top: 2%;
  margin-bottom: 2%;
}
.col-md-4 {
  width: 50%;
}
.loginbtn {
  margin-right: 1%;
  margin-bottom: 2%;
  margin-top: 2%;
}
.resetbtn {
  margin-left: 1%;
  margin-bottom: 2%;
  margin-top: 2%;
}
</style>
