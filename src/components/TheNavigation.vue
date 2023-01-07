<template>
  <nav>
    <div class="topnav" id="myTopnav">
      <h1>Dentistimo</h1>
     <b-row class="row" cols="1" cols-sm="2" cols-md="3" cols-lg="5">
       <b-col class="navbtn"><router-link class="navbtn" :to="{name:'landing'}"><h5>Landing</h5></router-link></b-col>
       <b-col><router-link :to="{name:'home'}"><h5>Home</h5></router-link></b-col>
       <b-col><router-link :to="{name:'profile'}"><h5>Profile</h5></router-link></b-col>
       <b-col><router-link :to="{name:'myBooking'}"><h5>My Booking</h5></router-link></b-col>
       <div class="text-center">
                  <b-button
                    @click.prevent="onSubmit"
                    variant="danger"
                    native-type="submit"
                    class="login-btn"
                    >Log Out</b-button
                  >
                </div>
    </b-row>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    onSubmit () {
    localStorage.clear()
    this.$router.push('/')
  }
  }
}

</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: dodgerblue;
  text-align: center;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  font-weight: bold;
}

.topnav a:hover {
  color: black;
}

.topnav a.active {
  background-color: gray;
  color: white;
}

.topnav .icon {
  display: none;
}
.navbtn{
  text-align: center;
}
.row{
 padding-left: 178px;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
