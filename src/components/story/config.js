const storyConfig = {
  style: 'mapbox://styles/etienneburdet/ck7oikz5z0q5v1ioasmqrnuvc',
  accessToken: 'pk.eyJ1IjoiZXRpZW5uZWJ1cmRldCIsImEiOiJjajVrMThvYnEyY2xsMndyeXA1cXFtb3N3In0.BdoiQvisTCL49X935MRDXw',
  showMarkers: false,
  theme: 'light',
  alignment: 'right',
  title: '',
  subtitle: '',
  byline: '',
  footer: '',
  chapters: [{
      id: 'idf',
      title: 'Piste cycblables en Île-de-France',
      image: '',
      description: 'Il y a plein de pistes cyclables en Île de France… enfin, surtout à Paris :(',
      location: {
        center: [2.349, 48.831],
        zoom: 10.48,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [{
        layer: 'amenagements-velo',
        opacity: .9
      }],
      onChapterExit: [{
        layer: 'amenagements-velo',
        opacity: .4
      }]
    },
    {
      id: 'coupures',
      title: 'Coupures',
      image: '',
      description: 'Mais il y a aussi beaucoup de coupures, qui empêchent clairement de faire du vélo',
      location: {
        center: [2.349, 48.831],
        zoom: 10.48,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [{
        layer: 'coupures-urbaines',
        opacity: 0.9
      }],
      onChapterExit: [{
        layer: 'coupures-urbaines',
        opacity: 0
      }]
    },
    {
      id: 'fluvial',
      title: 'Coupures Fluvial',
      image: '',
      description: 'Les berges sont souvent idéales pour l\'aménagement de pistes cyclables, mais les ports restent un obstacle majeur',
      location: {
        center: [2.293, 48.836],
        zoom: 11.89,
        pitch: 60.00,
        bearing: -16.80
      },
      onChapterEnter: [{
        layer: 'coupures-urbaines',
        opacity: 0.9
      }],
      onChapterExit: [{
        layer: 'coupures-urbaines',
        opacity: 0
      }],
      onChapterExit: [{
        layer: 'indego-stations',
        opacity: 0
      }]
    },
    {
      id: 'feroviaire',
      title: 'Coupure Ferroviaires',
      image: '',
      description: 'Les installations ferroviaires (gares, ateliers, voies de remisage etc.), créent aussi de grand "déserts", difficiles à contourner en vélo.',
      location: {
        center: [2.440, 48.936],
        zoom: 14.60,
        pitch: 60.00,
        bearing: 30.00
      },
      onChapterEnter: [{
          layer: 'coupures-urbaines',
          opacity: 1
        },
        {
          layer: 'amenagements-velo',
          opacity: 1
        },
      ],
      onChapterExit: [{
          layer: 'coupures-urbaines',
          opacity: 0
        },
        {
          layer: 'amenagements-velo',
          opacity: 0.4
        }
      ]
    }
  ]
}

export {
  storyConfig
}
