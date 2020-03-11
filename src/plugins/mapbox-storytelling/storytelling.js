import mapboxgl from 'mapbox-gl'
import scrollama from 'scrollama'

export default (config) => {

  const layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
  }

  const alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
  }

  function getLayerPaintType(layer) {
    const layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
  }

  function setLayerOpacity(layer) {
    const paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function(prop) {
      map.setPaintProperty(layer.layer, prop, layer.opacity);
    });
  }

  const story = document.getElementById('story');
  const features = document.createElement('div');
  features.classList.add(alignments[config.alignment]);
  features.setAttribute('id', 'features');

  const header = document.createElement('div');

  if (config.title) {
    const titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
  }

  if (config.subtitle) {
    const subtitleText = document.createElement('h2');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
  }

  if (config.byline) {
    const bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
  }

  if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
  }

  config.chapters.forEach((record, idx) => {
    const container = document.createElement('div');
    const chapter = document.createElement('div');

    if (record.title) {
      const title = document.createElement('h3');
      title.innerText = record.title;
      chapter.appendChild(title);
    }

    if (record.image) {
      const image = new Image();
      image.src = record.image;
      chapter.appendChild(image);
    }

    if (record.description) {
      const story = document.createElement('p');
      story.innerHTML = record.description;
      chapter.appendChild(story);
    }

    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
      container.classList.add('active');
    }

    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    features.appendChild(container);
  });

  story.appendChild(features);

  const footer = document.createElement('div');

  if (config.footer) {
    const footerText = document.createElement('p');
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
  }

  if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
  }

  mapboxgl.accessToken = config.accessToken;

  const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";
    return {
      url: url + suffix
    }
  }

  const map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    scrollZoom: false,
    transformRequest: transformRequest
  });

  const marker = new mapboxgl.Marker();
  if (config.showMarkers) {
    marker.setLngLat(config.chapters[0].location.center).addTo(map);
  }

  // instantiate the scrollama
  const scroller = scrollama();

  map.on("load", function() {
    // setup the instance, pass callback functions
    scroller
      .setup({
        step: '.step',
        offset: 0.5,
        progress: true
      })
      .onStepEnter(response => {
        const chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.add('active');
        map.flyTo(chapter.location);
        if (config.showMarkers) {
          marker.setLngLat(chapter.location.center);
        }
        if (chapter.onChapterEnter.length > 0) {
          chapter.onChapterEnter.forEach(setLayerOpacity);
        }
      })
      .onStepExit(response => {
        const chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.remove('active');
        if (chapter.onChapterExit.length > 0) {
          chapter.onChapterExit.forEach(setLayerOpacity);
        }
      });
  });

  // setup resize event
  window.addEventListener('resize', scroller.resize);

}
