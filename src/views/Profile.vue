<template>
<div>
    <h1> Profile </h1>
     <!-- A simple button -->
    <button> Back </button> 
    <!-- User information inputs-->
    <!--TODO: create input component for reuse + Implement Grid -->
    <label for="name">Enter First Name:</label>
<input type="text" id="name" name="name" required
       minlength="4" maxlength="8" size="10">

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

</style>