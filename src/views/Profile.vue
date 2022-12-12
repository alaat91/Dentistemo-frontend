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
     <b-modal id="modal-1" title="Enter new last name">
      <input class="form-control" id="changename">
  </b-modal>
  </b-col>
    </b-row>
    
        <b-row>
        <b-col cols="4">
      </b-col>
  <b-col cols="4">
    <label for="emailLabel" class="name">Email</label>
    <input type="email" class="form-control" id="emailLabel" placeholder="">
   <!--<button type="submit" class="btn btn-success">Edit</button> --> <!--   -->
   <b-button v-b-modal.modal-2 class="btn btn-success">Edit</b-button>
    <b-modal id="modal-2" title="Enter new email">
      <input class="form-control" id="changename">
  </b-modal>
  </b-col>
        </b-row>
    <!-- Add input form --> 
     <b-row>
          <b-col cols="4"> 
          </b-col>
  <b-col cols="4">

    <label for="passwordLabel" class="name">Password</label>
    <input type="password" class="form-control" id="passwordLabel" placeholder="">
   <b-button v-b-modal.modal-3 id="buttonEdit" class="btn btn-success">Edit</b-button>
<b-modal id="modal-3" title="Change password">
    <div> Enter old password </div>
      <input class="form-control"   type="password" id="changename">
      <div> Enter new password </div>
      <input class="form-control"  type="password" id="changename1">
  </b-modal>
  </b-col>
   </b-row>


  <b-row>
 <b-col cols="4">
      </b-col>
  <b-col cols="4">
  <button type="submit" class="btn btn-primary" id="backButton">Go back</button>
  </b-col>
   <b-col col="4">
    <button type="submit" class="btn btn-primary" id="logoutButton">Log out</button>
  </b-col>
  </b-row>
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
.header {
  font-family: sans-serif;
  text-align: center;
  text-shadow: 4px 4px 8px white;
  font-weight: bold;
  padding-left: 3px;
  position: static;
  background-color: lightskyblue ;
}
.name{
  font-weight: bold;
}

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