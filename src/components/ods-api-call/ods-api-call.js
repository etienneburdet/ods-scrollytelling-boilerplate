const baseUrl = 'https://data.opendatasoft.com/api/v2/catalog/datasets/amenagements-velo-en-ile-de-france%40datailedefrance/'
const query = 'aggregates?select=sum(longueur) as long_tot, count(*) as num_bikepath&group_by=nom_com&limit=10'

const displayList = (records) => {
  const list = document.getElementById('top-cities-bikepath')
  records.forEach((aggregation) => {
    list.insertAdjacentHTML('beforeend', `<li>${aggregation.nom_com} : ${aggregation.long_tot / 1000} km (${aggregation.num_bikepath} bike paths)`)
  })
}

export default () => {
  fetch(baseUrl + query)
    .then(res => res.json())
    .then(data => displayList(data.aggregations))
}
