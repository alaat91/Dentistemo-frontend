<template>
<div>
    <div class="topnav" id="myTopnav">
      <h1 id="header">Welcome to Dentistimo</h1>
      <b-row>
             <router-link :to="{name:'login'}" class="login">Login</router-link>
     </b-row>
     <b-row>
             <router-link :to="{name:'register'}" class="signup">Register</router-link>
     </b-row>
    </div>
  <div style="padding-left: 16px"></div>
</div>
</template>


<script>
export default {}
</script>


<style scoped>
#header{
    font-size: 60px;
     text-align: center;
    
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-image:linear-gradient(to right, dodgerblue, skyblue, lightskyblue);
}

.topnav a {
  float: left;
  display: block;
  color: white;
  font-weight: bold;
  text-align: center;
   padding: 14px 16px; 
  text-decoration: none;
  font-size: 19px;
}

.topnav a:hover {
  background-color: dodgerblue;
  color: white;
}

.topnav a.active {
  background-color: gray;
  color: white;
}

.topnav .icon {
  display: none;
  }

</style>
