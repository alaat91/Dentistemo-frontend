<template>
  <div ref="mapDiv" style="width: 100%; height: 80vh" />
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
    onMounted(async () => {
      await loader.load()
      map.value = new google.maps.Map(mapDiv.value, {
        center: { lat: 57.7098281, lng: 11.9776431 },
        zoom: 13,
      })
    })
    return { mapDiv }
  },
}
</script>
