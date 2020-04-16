import mapboxgl from 'mapbox-gl'

const baseUrl = 'https://data.opendatasoft.com/api/v2/catalog/datasets/amenagements-velo-en-ile-de-france%40datailedefrance/'
const query = 'exports/geojson'

mapboxgl.accessToken = 'pk.eyJ1IjoiZXRpZW5uZWJ1cmRldCIsImEiOiJjajVrMThvYnEyY2xsMndyeXA1cXFtb3N3In0.BdoiQvisTCL49X935MRDXw'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [2.349, 48.831],
  zoom: 10.48,
  pitch: 0.00,
  bearing: 0.00,
  scrollZoom: false
})


const addDataLayer = (data) => {
  map.addLayer({
    id: 'coupures-urbaines',
    source: {
      type: 'geojson',
      data: data
    },
    type: 'line',
    paint: {
      'line-color': '#FFA500'
    }
  })
}

export default () => {

  fetch(baseUrl + query)
    .then(response => response.json())
    .then(addDataLayer)
}
