export default (response) => {
  const percent = response.progress
  const gauge = document.querySelector('#ods-gauge .column-feature')
  gauge.setAttribute('value', percent)
}
