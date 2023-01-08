<template>
  <div>
    <!-- Page Header -->
    <header>
      <the-navigation></the-navigation>
    </header>
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
          <b-row class="mt-3"> </b-row>
        </b-col>
      </b-row>
    </b-overlay>
  </div>
</template>

<script>
import { API } from '../config/api'
import TheNavigation from '../components/TheNavigation.vue'

export default {
  components: {
    TheNavigation,
  },
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
    API.get(`users/profile/`)
      .then((response) => {
        ;(this.model.firstName = response.data.firstName),
          (this.model.lastName = response.data.lastName),
          (this.model.ssn = response.data.SSN),
          (this.model.email = response.data.email),
          (this.model.password = response.data.password),
          (this.model.phoneNumber = response.data.phoneNumber),
          this.$router.push(`/profile/`)
      })
      .catch((error) => {
        alert(error)
        console.log(error)
      })
  },

  methods: {
    onSave() {
      API.put(`users/profile/`, {
        userID,
        firstName: this.model.firstName,
        lastName: this.model.lastName,
        SSN: this.model.ssn,
        email: this.model.email,
        password: this.model.password,
        phoneNumber: this.model.phoneNumber,
      })
        .then(() => {
          this.$vToastify.success(
            'Your profile have been updated succsessfully'
          )
        })
        .catch(() => this.$vToastify.error('Something went wrong'))
    },

    onDelete() {
      API.delete(`users/profile/`)
        .then(() => {
          localStorage.clear()
          this.$vToastify.success(
            'Your profile have been deleted succsessfully'
          )
          this.$router.push('/')
        })
        .catch(() => this.$vToastify.error('Something went wrong'))
    },
  },
}
</script>

<style scoped>
.header {
  background-color: #89abe3ff;
  padding-top: 2%;
}
.btn-save {
  margin-left: 3%;
}
.btn-delete {
  margin-left: 6%;
}
.px-sm-5 {
  background-color: white;
}
.mt--8 {
  background-image: url(../assets/tooth.png);
  padding-top: 5%;
  opacity: 25;
  padding-bottom: 10%;
}
</style>
