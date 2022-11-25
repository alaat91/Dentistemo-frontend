<template>
  <div id="map" ref="mapDiv" />
</template>

<script>
import { ref, onMounted } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'
const MAP_API_KEY = 'AIzaSyDrWi2jVS_VxFVJ2P5cOfwZUPpeykLLOBg'
export default {
  name: 'App',
  setup() {
    const loader = new Loader({ apiKey: MAP_API_KEY })
    const mapDiv = ref(null)
    // HTML code example that should include data of clincs from database that
    // should be loaded onMounted
    const clinics = [
      '<h3> name of clinic </h3>' +
        '<div>maybe some description</div>' +
        '<button onclick="AFunction()">Button that takes you to the booking page of the specific clinic</button>',

      '<h3> name of another clinic </h3>' +
        '<div>another description</div>' +
        '<button onclick="AnotherFunction()">Button that takes you to the booking page of the specific clinic</button>',
    ]

    // hardcoded cordinates for clinics, should request data from database and put here
    var cords = [
      {
        LatLng: [
          {
            lat: 57.7198281,
            lng: 11.9876431,
          },
        ],
      },
      {
        LatLng: [
          {
            lat: 57.7098281,
            lng: 11.9876431,
          },
        ],
      },
    ]
    let map = ref(null)

    // loads the map and puts it in the div element with ref="mapDiv"
    onMounted(async () => {
      await loader.load()
      map.value = new google.maps.Map(mapDiv.value, {
        center: { lat: 57.7098281, lng: 11.9776431 },
        zoom: 13,
      })
      const infoWindow = new google.maps.InfoWindow()
      // creates custom markers, will be used later for showing all the different clinics
      for (var i = 0; i < cords.length; i++) {
        const marker = new google.maps.Marker({
          position: cords[i].LatLng[0],
          map: map.value,
          title: clinics[i],
        })
        // Shows the title of the marker via a infoWindow when you click on the marker
        marker.addListener('click', () => {
          infoWindow.close()
          infoWindow.setContent(marker.getTitle())
          infoWindow.open(marker.getMap(), marker)
        })
      }
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
