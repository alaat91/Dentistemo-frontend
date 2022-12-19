<template>
  <div>
    <header>
      <the-navigation></the-navigation>
    </header>
    <main>
      <b-breadcrumb :items="items"></b-breadcrumb>
      <div class="map-container">
        <Map />
      </div>
      <section>
        <ul>
          <h4>Available Clinics</h4>
          <clinics-list
            v-for="dentist in clinics"
            :key="dentist.id"
            :clinicId="dentist.id"
            :clinicName="dentist.name"
          ></clinics-list>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
import { API } from '../config/api'
import ClinicsList from '../components/ClinicsList.vue'
import Map from '../components/Map.vue'
import TheNavigation from '../components/TheNavigation.vue'
export default {
  components: { Map, TheNavigation, ClinicsList },
  data() {
    return {
      clinics: [],
      items: [
        {
          text: 'Home',
          active: true,
        },
        {
          text: 'TimeSlots',
          href: '/clinic',
        },
        {
          text: 'Confirmation',
          href: '/confimBooking',
        },
      ],
    }
  },
  provide() {
    return {
      dentists: this.dentists,
    }
  },
  mounted: async function () {
    try {
      const res = await API.get('/clinics/')
      this.clinics = res.data
    } catch (err) {
      console.error(err)
    }
  },
}
</script>

<style scoped>
.map-container {
  display: flex;
  justify-content: center;
}
</style>
