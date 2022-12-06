<template>
    <form>
        <div>
            <label>firstName</label>
            <input type="firstName" v-model="firstName" placeholder="FirstNAme">
        </div>

        <div>
            <label>lasttName</label>
            <input type="lastName" v-model="lastName" placeholder="LastName">
        </div>

        <div>
            <label>SSN</label>
            <input type="SSN" v-model="SSN" placeholder="SSN">
        </div>

        <div>
            <label>phoneNumber</label>
            <input type="phoneNumber" v-model="phoneNumber" placeholder="PhoneNumber">
        </div>

        <div>
            <label>email</label>
            <input type="email" v-model="email" placeholder="Email">
        </div>

        <div>
            <label>password</label>
            <input type="password" v-model="password" placeholder="Password">
        </div>

        <div>
            <label>confirmPassword</label>
            <input type="confirmPassword" v-model="confirmPassword" placeholder="ConfirmPassword">
        </div>
        

    </form>
    </template>
    
    <script>
    export default {
        name: 'Signup',
        data: function(){
    return {
        form: {
        firstName: '',
        lastName: '',
        SSN: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
        },
        methods: {
    submitHandler: async function (e) {
      e.preventDefault()
      try {
        await Api.post('/auth/signup', this.form)
        this.$router.push('/login')
      } catch (error) {
        const errors = error.response.data.errors
        errors.forEach((error) => this.$vToastify.error(error))
      }
    }
  }
        
    }
    </script>
    
    <style scoped>
    
    </style>