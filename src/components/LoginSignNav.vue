<template>
  <nav>
    <div class="topnav" id="myTopnav">
      <h1>Dentistimo</h1>
    <div class="navbar">
     <b-row class="row" cols="12">
      <b-col cols="1"></b-col>
       <b-col cols="5"><router-link :to="{name:'landing'}"><h5>Landing</h5></router-link></b-col>
    </b-row>
    </div>
    </div>
  </nav>
</template>

<script>
export default{}
</script>

<style scoped>
h1{
    color: white;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #4831d4;
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
.row{
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
