import faker from 'faker';
import dayjs from 'dayjs';
import { randomInt } from './util';
import { User } from './types/user-type';
import { CommentTemplateType, Review } from './types/reviews-type';

export const getRandomCoordinates = () => ({
  lng: Number(faker.address.longitude()),
  lat: Number(faker.address.latitude())
});

export const getFakeUser = (): User => ({
  avatarUrl: faker.internet.avatar(),
  email: faker.internet.email(),
  id: randomInt(586, 3648),
  isPro: Math.random() > 0.5,
  name: faker.name.firstName(1),
  token: faker.datatype.uuid()
});

export const getFakeCommentTemplate = (): CommentTemplateType => ({
  offerId: randomInt(256, 9642),
  comment: faker.random.words(88),
  rating: randomInt(1, 5)
});

export const getFakeReview = (comment: CommentTemplateType): Review => ({
  comment: comment.comment,
  date: dayjs(faker.date.recent()).format(),
  id: comment.offerId,
  rating: comment.rating,
  user: getFakeUser(),
});
