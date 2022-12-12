<template>
<div class="container-fluid">
 <h1 class="header"> Profile </h1>
 <!-- User information inputs-->
 <!--TODO: create input component for reuse + Implement Grid + create upload image functionality-->
<!-- Implementation for the profile picture upload for the user -->
<!-- TODO: Transfer image to asset + ADD js code for pic upload -->
<div class="profile-pic">
 <label class="-label" for="file">
 <span class="glyphicon glyphicon-camera"></span>
 <span>Change Image</span>
 </label>
 <input id="file" type="file" onchange="loadFile(event)"/>
 <img src="https://static.wikia.nocookie.net/the-villainess-is-a-marionette/images/3/37/Kayena_Hill_%28Present%29.png" id="output" width="200" />
</div>

<div class="info">
<form>
  <b-row class="lg-12">
      <b-col cols="4">
      </b-col>
    <b-col cols="3">
      <label for="firstNameLabel" class="name">First Name</label>
      <input type="text" class="form-control" id="nameLabel" placeholder="">
       <button type="submit" class="btn btn-success" >Edit</button> 
    </b-col>
    </b-row>
    <b-row >
      <b-col cols="4">
      </b-col>
    <b-col cols="3">
      <label for="lastNameLabel" class="name">Last Name</label>
      <input  type="text" class="form-control" id="lastNameLabel" placeholder="">
    <b-button v-b-modal.modal-1 class="btn btn-success">Edit</b-button>
  </b-col>
    </b-row>
    <!-- Add input form --> 

</form>
</div>
</div>
</template>



<script>
export default {
  data() {
    return {
      User: '',
    }
  },

}

</script>



<style scoped>

label {
  display: block;
  font: 1rem 'Fira Sans', sans-serif;
}
input,
label {
 margin: .4rem 0;
}
.profile-pic {
 color: transparent;
 transition: all 0.3s ease;
 display: flex;
 justify-content: center;
 align-items: center;
 position: relative;
 transition: all 0.3s ease;
}
.profile-pic input {
 display: none;
}
.profile-pic img {
 position: absolute;
 object-fit: cover;
 width: 165px;
 height: 165px;
 box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.35);
 border-radius: 100px;
 z-index: 0;
}
.profile-pic .-label {
 cursor: pointer;
 height: 165px;
 width: 165px;
}
.profile-pic:hover .-label {
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: rgba(0, 0, 0, 0.8);
 z-index: 10000;
 color: #FAFAFA;
 transition: background-color 0.2s ease-in-out;
 border-radius: 100px;
 margin-bottom: 0;
}
.profile-pic span {
 display: inline-flex;
 padding: 0.2em;
 height: 2em;
}
body {
 height: 100vh;
 background-color: #191815;
 display: flex;
 justify-content: center;
 align-items: center;
}
body a:hover {
 text-decoration: none;
}
</style>