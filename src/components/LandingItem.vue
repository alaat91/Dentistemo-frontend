<template>
<div>
    <div class="topnav" id="myTopnav">
      <h1 id="header">Welcome to Dentistemo</h1>
      <h6 id="sub-header">"A good life starts with good teeth"-Dr.Shariq</h6>
      <b-row>
             <router-link to="/login" class="login">Login</router-link>
     </b-row>
     <b-row>
             <router-link to="/signup" class="signup">Signup</router-link>
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
</style>
