import { Offer } from '../types/offers-type';

const offers: Offer[] = [
  {
    id: 1,
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    images: [
      'img/1.png'
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/15990949.jpg?k=f1d1235ee48c6a5588f9b46afcbf3cbf4a0aabfa54260ffd1832b2ee05b43d7e&o=&hp=1',
    price: 180,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment'
  },
  {
    id: 2,
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Paris'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    images: [
      'img/1.png'
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage:'https://cf.bstatic.com/xdata/images/hotel/max500/181999164.jpg?k=6deaac4c6e76d6912da990fbd692676fb55cd1c5486313a8acf7e7ab6d44e8e9&o=&hp=1',
    price: 100,
    rating: 4,
    title: 'Best Stay Jeuneurs',
    type: 'apartment'
  },
  {
    id: 3,
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Cologne'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    images: [
      'img/1.png'
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/213326529.jpg?k=b99976e5f9ec1d467adecfa0250643e38b6858ff41b107438996af8e23a7b724&o=&hp=1',
    price: 60,
    rating: 3,
    title: 'Musée Pompidou',
    type: 'room'
  },
  {
    id: 4,
    bedrooms: 5,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Cologne'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/1.png',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    images: [
      'img/1.png'
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/107785720.jpg?k=38ba6bb98644cdce1cf8d76a7dc7e8f1d458327a96a678855bd0329970449cf7&o=&hp=1',
    price: 250,
    rating: 5,
    title: 'Elysees Opera',
    type: 'house'
  }
];

//const offers:Offer[] = [];


export default offers;
