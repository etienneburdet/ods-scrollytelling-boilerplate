/* global fetch */
import mapboxgl from 'mapbox-gl'

const baseUrl = 'https://data.opendatasoft.com/api/v2/catalog/datasets/stationnement-velo-en-ile-de-france@datailedefrance/'
const query = 'exports/geojson'

mapboxgl.accessToken = 'pk.eyJ1IjoiZXRpZW5uZWJ1cmRldCIsImEiOiJja2F4bHN2MXUwMGliMnJsN2RzNXowYzQ1In0.ju6w4WN1F_CRVNXtp5L-7w'

const map = new mapboxgl.Map({
  container: 'mapbox',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [2.349, 48.831],
  zoom: 10.48,
  pitch: 0.00,
  bearing: 0.00,
  scrollZoom: false
})

const addDataLayer = (data) => {
  console.log('fetched GeoJson')
  map.addLayer({
    id: 'stationnement-velo',
    source: {
      type: 'geojson',
      data: data
    },
    type: 'circle',
    paint: {
      'circle-color': '#FFA500'
    }
  })
}

const zoomIn = () => {
  map.flyTo({
    center: [2.349, 48.831],
    zoom: 13.48,
    pitch: 0.00,
    bearing: 0.00
  })
}

const zoomOut = () => {
  map.flyTo({
    center: [2.349, 48.831],
    zoom: 10.48,
    pitch: 0.00,
    bearing: 0.00
  })
}

const initMapbox = () => {
  fetch(baseUrl + query)
    .then(response => response.json())
    .then(addDataLayer)
}

export { zoomIn, zoomOut, initMapbox }
