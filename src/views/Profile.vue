<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container class="container">
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-black">Your Profile.</h1>
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
    <b-overlay class="mt--8">
      <b-row class="justify-content-center">
        <b-col lg="6" md="8">
          <b-card no-body class="bg-secondary border-0">
            <b-card-body class="px-sm-5 py-lg-5">
              <div class="text-center text-black mb-4">
                <small>Edit your profile here.</small>
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
                  placeholder="Phone Number"
                  type="phoneNumber"
                  name="phoneNumber"
                  :rules="{ required: true, min: 6 }"
                  v-model="model.phoneNumber"
                >
                </b-input>
                <div class="text-center">
                  <b-button
                    class="btn-save"
                    @click.prevent="onSave"
                    type="submit"
                    variant="success"
                    >Save</b-button
                  >
                  <b-button
                    class="btn-delete"
                    @click.prevent="onDelete"
                    type="delete"
                    variant="danger"
                    >Delete</b-button
                  >
                </div>
              </b-form>
            </b-card-body>
          </b-card>
          <b-row class="mt-3">
            <b-col cols="6">
              <router-link :to="{ name: 'home' }" class="text-left"
                ><small>Home</small></router-link
              >
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-overlay>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { API } from '../config/api'

export default {
  name: 'users',
  data() {
    return {
      model: {
        firstName: '',
        lastName: '',
        ssn: '',
        email: '',
        password: '',
        phoneNumber: '',
      },
    }
  },

  mounted() {
    const userId = localStorage.getItem('LoggedUser')
    const userID = userId.slice(1, -1)
    API.get(`users/profile/${userID}`)
      .then((response) => {
        ;(this.model.firstName = response.data.firstName),
          (this.model.lastName = response.data.lastName),
          (this.model.ssn = response.data.SSN),
          (this.model.email = response.data.email),
          (this.model.password = response.data.password),
          (this.model.phoneNumber = response.data.phoneNumber),
          this.$router.push(`/profile/${userID}`)
      })
      .catch((error) => {
        alert(error)
        console.log(error)
      })
  },

  methods: {
    onSave() {
      const userId = localStorage.getItem('LoggedUser')
      const userID = userId.slice(1, -1)
      try {
        API.put(`users/profile/${userID}`, {
          userID,
          firstName: this.model.firstName,
          lastName: this.model.lastName,
          SSN: this.model.ssn,
          email: this.model.email,
          password: this.model.password,
          phoneNumber: this.model.phoneNumber,
        }).then((response) => {
          const userID = response.data
          if (userID != null) {
            alert('Your profile is updated!')
            onMounted()
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
  background-color: #89abe3ff;
  padding-top: 2%;
}
.px-sm-5 {
  background-image: url(../assets/perfect-smile2.png);
}
.mt--8 {
  background-image: url(../assets/neon.png);
  padding-top: 5%;
  opacity: 25;
}
</style>
