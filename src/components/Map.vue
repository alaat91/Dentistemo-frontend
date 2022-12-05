<template>
  <div id="map" ref="mapDiv" />
</template>

<script>
import { ref, onMounted } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'
const MAP_API_KEY = 'AIzaSyDrWi2jVS_VxFVJ2P5cOfwZUPpeykLLOBg'
export default {
  name: 'Map',
  setup() {
    const loader = new Loader({ apiKey: MAP_API_KEY })
    const mapDiv = ref(null)

    // HTML code example and cordinates for clinics, data for clincs should come
    // from database that should be loaded onMounted
    var clinics = [
      {
        LatLng: [
          {
            lat: 57.7198281,
            lng: 11.9876431,
          },
        ],
        Text:
          '<h3> name of clinic </h3>' +
          '<div> maybe some description </div>' +
          '<button onclick="AFunction()"> Button that takes you to the booking page of the specific clinic </button>',
      },
      {
        LatLng: [
          {
            lat: 57.7098281,
            lng: 11.9876431,
          },
        ],
        Text:
          '<h3> name of another clinic </h3>' +
          '<div>another description</div>' +
          '<button onclick="AFunction()">Button that takes you to the booking page of the specific clinic</button>',
      },
    ]
    let map = ref(null)

    // loads the map and puts it in the div element with ref="mapDiv"
    onMounted(async () => {
      await loader.load()
      map.value = new google.maps.Map(mapDiv.value, {
        center: { lat: 57.7098281, lng: 11.9776431 },
        zoom: 13,
        mapId: '400e49ec652bde74',
      })
      const infoWindow = new google.maps.InfoWindow()

      // One of the different kinds of marker that can be found at
      // google.maps.SymbolPath
      const symbolPathMarker = {
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        fillColor: 'blue',
        scale: 6,
      }

      // creates custom markers, will be used later for showing all the different clinics
      const marker = new google.maps.Marker({
        position: { lat: 57.7098281, lng: 11.9776431 },
        map: map.value,
        title: 'ttestt',
        icon: symbolPathMarker,
      })
      for (var i = 0; i < clinics.length; i++) {
        const marker = new google.maps.Marker({
          position: clinics[i].LatLng[0],
          map: map.value,
          title: clinics[i].Text,
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
  height: 70vh;
}
</style>
