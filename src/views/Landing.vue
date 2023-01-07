<template>
  <body>
    <b-container fluid class="container1">
      <!-- Page Header -->
      <landing-item></landing-item>
      <div>
        <b-img
          src="https://static.showit.co/1200/NVyu1HUlT1i7YcsOdIg2Sg/84619/fmc-dental-clinic-background.png"
          class="min-vh-100"
          fluid-grow
          alt="Responsive image"
        ></b-img>
      </div>
       <Footer></Footer>
    </b-container>
  </body>
</template>

<script>
import LandingItem from '../components/LandingItem.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    LandingItem,
    Footer,
  },
}
</script>

<style scoped>
.container {
  background-color: lightskyblue;
  text-align: center;
  text-shadow: 4px 4px 8px white;
  width: 100%;
  height: 100%;
}
.min-vh-100 {
  opacity: 0.9;
  object-fit: cover;
}
</style>
