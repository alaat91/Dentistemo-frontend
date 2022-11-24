<template>
  <div id="map" ref="mapDiv" />
</template>

<script>
/* eslint-disable no-undef */

import { ref, onMounted } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'
const MAP_API_KEY = 'AIzaSyDrWi2jVS_VxFVJ2P5cOfwZUPpeykLLOBg'
export default {
  name: 'App',
  setup() {
    const loader = new Loader({ apiKey: MAP_API_KEY })
    const mapDiv = ref(null)
    let map = ref(null)
    // loads the map and puts it in the div element with ref="mapDiv"
    onMounted(async () => {
      await loader.load()
      map.value = new google.maps.Map(mapDiv.value, {
        center: { lat: 57.7098281, lng: 11.9776431 },
        zoom: 13,
      })
      // creates a hardcoded custom marker, will be used later for showing all the different clinics
      const marker = new google.maps.Marker({
        position: { lat: 57.7098281, lng: 11.9776431 },
        map: map.value,
      })
    })
    return { mapDiv }
  },
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 80vh;
}
</style>
