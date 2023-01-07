<template>
  <div class="main-div">
    <!-- Page Header -->
     <header>
      <login-sign-nav></login-sign-nav>
    </header>
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
                <div class="text-center">
                  <b-button
                    @click.prevent="onSubmit"
                    variant="outline-primary"
                    native-type="submit"
                    class="login-btn"
                    >Login</b-button
                  >
                  <b-button class="register-btn" href="/register"
                    >Register</b-button
                  >
                </div>
              </b-form>
            </b-card-body>
          </b-card>
          <b-row class="mt-3"> </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { API } from '../config/api'
import  LoginSignNav from '../components/LoginSignNav.vue'

export default {
  components: {
    LoginSignNav,
  },
  data() {
    return {
      model: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    onSubmit() {
      API.post('/auth/login', this.model)
        .then((response) => {
          const userID = response.data._id
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('LoggedUser', JSON.stringify(userID))
          this.$vToastify.success('Successful Login')
          this.$router.push('/home')
        })
        .catch(() => {
          this.$vToastify.error('Invalid Credentials!')
          
        })}}}
</script>

<style scoped>
.header {
background-image: url(../assets/neon-city.png);
  padding-top: 2%;
}
.main-div {
  background-image: url(../assets/neon-city.png);
  padding-bottom: 5%;
}
.mt--8 {
  padding-top: 10%;
}
.bg-signin {
  background-color: #2f3c7e;
  border-style: solid;
}
.login-btn {
  margin-left: 3%;
}
.register-btn {
  margin-left: 6%;
}
.px-lg-5 {
  background-color: #fbeaeb;
  border-style: solid;
  border-bottom-left-radius: 1%;
  border-bottom-right-radius: 1%;
}
</style>
