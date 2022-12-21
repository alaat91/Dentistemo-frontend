<template>
<div>
    <div class="topnav" id="myTopnav">
      <h1 id="header">Welcome to Dentistemo</h1>
      <h6 id="sub-header">"A good life starts with good teeth"-Dr.Shariq</h6>
      <b-row>
             <router-link :to="{name:'login'}" class="login">Login</router-link>
     </b-row>
     <b-row>
             <router-link :to="{name:'register'}" class="signup">Signup</router-link>
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
    text-shadow: 4px 4px 12px white;
    font-size: 60px;
     text-align: center;
    
}
#sub-header{
  text-align: center;
  color: black;
  font-style: italic;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-image:linear-gradient(to right, blue ,dodgerblue, skyblue);
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
