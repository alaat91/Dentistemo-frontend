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
            lat: 57.707619,
            lng: 11.969388,
          },
        ],
        Text:
          `<h4> Your Dentist </h4>` +
          '<h6> Adress: Spannmålsgatan 20</h6>' +
          '<div> Monday: 9:00-17:00</div>' +
          '<div> Tuesday: 8:00-17:00</div>' +
          '<div> Wednesday: 7:00-16:00</div>' +
          '<div> Thursday: 9:00-17:00</div>' +
          '<div> Friday: 9:00-15:00 </div>',
      },
      {
        LatLng: [
          {
            lat: 57.685255,
            lng: 11.942625,
          },
        ],
        Text:
          `<h4> Tooth Fairy Dentist </h4>` +
          '<h6> Adress: Slottskogen </h6>' +
          '<div> Monday: 7:00-19:00</div>' +
          '<div> Tuesday: 7:00-19:00</div>' +
          '<div> Wednesday: 7:00-19:00</div>' +
          '<div> Thursday: 7:00-19:00</div>' +
          '<div> Friday: 7:00-19:00 </div>',
      },
      {
        LatLng: [
          {
            lat: 57.709872,
            lng: 11.940386,
          },
        ],
        Text:
          '<h4> The Crown </h4>' +
          '<h6> Adress: Lindholmsallén 19 </h6>' +
          '<div> Monday: 6:00-15:00</div>' +
          '<div> Tuesday: 8:00-17:00</div>' +
          '<div> Wednesday: 7:00-12:00</div>' +
          '<div> Thursday: 7:00-17:00</div>' +
          '<div> Friday: 8:00-16:00 </div>',
      },
      {
        LatLng: [
          {
            lat: 57.694723,
            lng: 11.991153,
          },
        ],
        Text:
          '<h4> Lisebergs Dentists </h4>' +
          '<h6> Adress: Liseberg </h6>' +
          '<div> Monday: 10:00-18:00</div>' +
          '<div> Tuesday: 10:00-18:00</div>' +
          '<div> Wednesday: 10:00-18:00</div>' +
          '<div> Thursday: 10:00-18:00</div>' +
          '<div> Friday: 10:00-18:00 </div>',
      },
    ]
    let map = ref(null)

    // loads the map and puts it in the div element with ref="mapDiv"
    onMounted(async () => {
      await loader.load()
      map.value = new google.maps.Map(mapDiv.value, {
        center: { lat: 57.7098281, lng: 11.9776431 },
        zoom: 13,
        streetViewControl: false,
        fullscreenControl: false,
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
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#map {
  width: 50%;
  height: 70vh;
}
</style>
