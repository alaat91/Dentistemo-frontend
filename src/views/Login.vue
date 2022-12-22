<template>
  <div>
    <!-- Header
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container>
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-black">Login</h1>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            class="fill-default"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div> -->
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="bg-secondary border-0 mb-0">
            <b-card-header class="bg-signin pb-5">
              <div class="text-white text-center mt-2 mb-3">
                <small>Sign in with</small>
              </div>
              <div class="btn-wrapper text-center">
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"
                    ><img src="../assets/github.svg"
                  /></span>
                  <span class="btn-inner--text text-white">Github</span>
                </a>
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"
                    ><img src="../assets/google.svg"
                  /></span>
                  <span class="btn-inner--text text-white">Google</span>
                </a>
              </div>
            </b-card-header>
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-black mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                <b-input
                  alternative
                  class="mb-3"
                  name="Email"
                  :rules="{ required: true, email: true }"
                  prepend-icon="ni ni-email-83"
                  placeholder="Email"
                  v-model="model.email"
                >
                </b-input>
                <b-input
                  alternative
                  class="mb-3"
                  name="Password"
                  :rules="{ required: true, min: 6 }"
                  prepend-icon="ni ni-lock-circle-open"
                  type="password"
                  placeholder="Password"
                  v-model="model.password"
                >
                </b-input>
                <div class="text-center" @click.prevent="onSubmit">
                  <b-button variant="outline-primary" native-type="submit" class="my-4"
                    >Sign in</b-button
                  >
                </div>
              </b-form>
            </b-card-body>
          </b-card>
          <b-row class="mt-3">
            <b-col cols="12" class="text-right">
              <router-link to="/register" class="text-right"
                ><small>Create new account</small></router-link
              >
            </b-col>
            <b-col cols="12" class="text-right">
              <router-link to="/home" class="text-right"
                ><small>Home</small></router-link
              >
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { API } from '../config/api'

export default {
  data() {
    return {
      model: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async onSubmit() {
      try {
        API.post('/auth/login', this.model).then((response) => {
          const userID = response.data._id
          if (userID != null) {
            localStorage.setItem('token', response.data.token)
            this.$router.push('/home')
          } else {
            alert('Invalid Credentials!')
          }
        })
      } catch (error) {
        alert('catching dem errors')
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>
.header {
  padding-top: 2%;
  background-color: #89ABE3FF;
  margin-bottom: 2%;
  border-style: hidden;
}
.mt--8 {
  padding-top: 10%;
}
.bg-signin {
  background-color: #2F3C7E;
  border-style: solid;
}
.px-lg-5 {
  background-color: #FBEAEB;
  border-style: solid;
  border-bottom-left-radius: 1%;
  border-bottom-right-radius: 1%;
}
</style>
