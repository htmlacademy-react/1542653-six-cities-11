import { Review } from '../types/reviews-type';

const reviews:Review[] = [
  {
    id: 1,
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Tue Nov 01 2022 18:43:27 GMT+0300 (Москва, стандартное время)',
    rating: 4,
    user: {
      id: 1,
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
      name: 'Oliver',
    },
  },
  {
    id: 2,
    comment: 'We really liked the professional attitude of the staff, who treated us very well.',
    date: 'Tue Oct 31 2022 19:00:00 GMT+0300 (Москва, стандартное время)',
    rating: 5,
    user: {
      id: 2,
      avatarUrl: 'https://tipik.ru/wp-content/uploads/2019/08/%D0%9F%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD-015.jpg',
      isPro: true,
      name: 'Dwight',
    },
  },
  {
    id: 3,
    comment: 'Did the job - but very expensive… ',
    date: 'Tue Oct 30 2022 17:45:00 GMT+0300 (Москва, стандартное время)',
    rating: 3,
    user: {
      id: 3,
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmu47Tzi-9snKDIgESxyXseGsGpnzPnssk5g&usqp=CAU',
      isPro: false,
      name: 'Walter',
    },
  },
  {
    id: 4,
    comment: 'This delayed check in as we needed to ring the owner in order to access the property via a series of key codes/ a fob and pin code. Entering the property was really not straightforward at all. This delay was unnecessarily inconvenient.',
    date: 'Tue Sep 28 2022 16:25:00 GMT+0300 (Москва, стандартное время)',
    rating: 2,
    user: {
      id: 4,
      avatarUrl: 'https://vraki.net/sites/default/files/mood/a_1_0.jpg',
      isPro: true,
      name: 'Annette',
    },
  },
  {
    id: 5,
    comment: 'Just Awful!!!',
    date: 'Tue Jul 10 2022 10:00:58 GMT+0300 (Москва, стандартное время)',
    rating: 1,
    user: {
      id: 1,
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkHfyUXpFU_i8g1PIp_T-hSSyb8PYePWprg&usqp=CAU',
      isPro: false,
      name: 'Dorothy',
    },
  }
];

export default reviews;
