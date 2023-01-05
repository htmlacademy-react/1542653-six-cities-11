import faker from 'faker';

export const getRandomCoordinates = () => ({
  lng: Number(faker.address.longitude()),
  lat: Number(faker.address.latitude())
});
