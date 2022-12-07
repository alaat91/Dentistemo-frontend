<template>
<div>
 <h1> Profile </h1>
 <!-- A simple button -->
 <button> Back </button>
 <!-- User information inputs-->
 <!--TODO: create input component for reuse + Implement Grid + create upload image functionality-->
 <label for="name">Enter First Name:</label>
<input type="text" id="name" name="name" required
 minlength="4" maxlength="8" size="10">
<!-- Implementation for the profile picture upload for the user -->
<!-- TODO: Transfer image to asset + ADD js code for pic upload -->
<div class="profile-pic">
 <label class="-label" for="file">
 <span class="glyphicon glyphicon-camera"></span>
 <span>Change Image</span>
 </label>
 <input id="file" type="file" onchange="loadFile(event)"/>
 <img src="https://static.zerochan.net/Ren.Zotto.full.3719794.jpg" id="output" width="200" />
</div>
</div>
</template>
<script>
export default {
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