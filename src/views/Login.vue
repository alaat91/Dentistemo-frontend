<template>
    <form>
        <div>
            <label>email</label>
            <input type="email" v-model="email" placeholder="Email">
        </div>

        <div>
            <label>password</label>
            <input type="password" v-model="password" placeholder="Password">
        </div>

    </form>
</template>

<script>
export default {
    name: 'Login',
    data: function(){
return {
    form: {
    email: '',
    password: ''
  }
}
    },
    methods: {
submitHandler: async function (e) {
  e.preventDefault()
  try {
    await Api.post('/auth/login', this.form)
    this.$router.push('/')
  } catch (error) {
    const errors = error.response.data.errors
    errors.forEach((error) => this.$vToastify.error(error))
  }
}
}
    
}
</script>