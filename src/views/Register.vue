<template>
  <div class="main-div">
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container class="container">
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">Sign up and the world is yours.</h1>
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
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <!-- Table -->
      <b-row class="justify-content-center">
        <b-col lg="6" md="8">
          <b-card no-body class="bg-secondary border-0">
            <b-card-header class="bg-oauth pb-5">
              <div class="text-black text-center mt-2 mb-4">
                <small>Sign up with</small>
              </div>
              <div class="text-center">
                <a href="#" class="btn btn-neutral btn-icon mr-4">
                  <span class="btn-inner--icon"
                    ><img src="../assets/github.svg"
                  /></span>
                  <span class="btn-inner--text">Github</span>
                </a>
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"
                    ><img src="../assets/google.svg"
                  /></span>
                  <span class="btn-inner--text">Google</span>
                </a>
              </div>
            </b-card-header>
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-white mb-4">
                <small>Or sign up with credentials</small>
              </div>
              <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                <b-input
                  alternative
                  class="mb-3"
                  prepend-icon="ni ni-hat-3"
                  placeholder="First Name"
                  name="firstName"
                  :rules="{ required: true }"
                  v-model="model.firstName"
                >
                </b-input>

                <b-input
                  alternative
                  class="mb-3"
                  prepend-icon="ni ni-hat-3"
                  placeholder="Last Name"
                  name="lastName"
                  :rules="{ required: true }"
                  v-model="model.lastName"
                >
                </b-input>

                <b-input
                  alternative
                  class="mb-3"
                  prepend-icon="ni ni-hat-3"
                  placeholder="Social Security Number"
                  name="ssn"
                  :rules="{ required: true }"
                  v-model="model.ssn"
                >
                </b-input>

                <b-input
                  alternative
                  class="mb-3"
                  prepend-icon="ni ni-email-83"
                  placeholder="Email"
                  name="Email"
                  :rules="{ required: true, email: true }"
                  v-model="model.email"
                >
                </b-input>

                <b-input
                  alternative
                  class="mb-3"
                  prepend-icon="ni ni-lock-circle-open"
                  placeholder="Password"
                  type="password"
                  name="Password"
                  :rules="{ required: true, min: 6 }"
                  v-model="model.password"
                >
                </b-input>

                <b-input
                  alternative
                  class="mb-3"
                  prepend-icon="ni ni-lock-circle-open"
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  :rules="{ required: true, min: 6 }"
                  v-model="model.confirmPassword"
                >
                </b-input>

                <b-input
                  alternative
                  class="mb-3"
                  prepend-icon="ni ni-lock-circle-open"
                  placeholder="Phone Number"
                  type="phoneNumber"
                  name="phoneNumber"
                  :rules="{ required: true, min: 6 }"
                  v-model="model.phoneNumber"
                >
                </b-input>
                <div class="text-center">
                  <b-button @click.prevent="onSubmit" type="submit" variant="success" class="signup-btn"
                    >Sign Up</b-button
                  >
                  <b-button class="login-btn" href="/login">Login</b-button>
                </div>
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { API } from '../config/api'

export default {
  name: 'register',
  data() {
    return {
      model: {
        firstName: '',
        lastName: '',
        ssn: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
      },
    }
  },
  methods: {
    async onSubmit() {
      try {
        API.post('auth/signup', {
          firstName: this.model.firstName,
          lastName: this.model.lastName,
          email: this.model.email,
          SSN: this.model.ssn,
          password: this.model.password,
          confirmPassword: this.model.confirmPassword,
          phoneNumber: this.model.phoneNumber,
        }).then((response) => {
          const userID = response.data
          if (userID._id != null ) {
            const newUserID = response.data._id
            alert('Your new account has been registered!')
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('LoggedUser', JSON.stringify(newUserID))
            this.$router.push('/home')
          } else if (userID === 'Email is already taken') {
            alert('Email is already taken!')
          } else {
            alert('All input is required!')
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
  background-image: url(../assets/neon-city.png);
  padding-top: 2%;
}
.main-div{
  background-image: url(../assets/earth.png);
}
.bg-oauth {
  background-color: #ccf381;
}
.px-lg-5 {
  background-color: #4831d4;
}
.mt--8 {
  padding-top: 5%;
}
.signup-btn {
  margin-left: 3%;
  margin-top: 5%  
}
.login-btn {
  margin-left: 6%;
  margin-top: 5%
}
</style>
