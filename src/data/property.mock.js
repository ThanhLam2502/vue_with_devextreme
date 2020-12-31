import Property from '../model/property';

export default function fakeProperties(count = 5) {
  return new Array(count).fill({}).map((_, idx) => new Property({
    check: idx % 5 === 1,
    photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
    propertyID: `P00${idx}`,
    country: 'Thailand',
    city: 'Bangkok',
    location: 'Wattana',
    projectName: 'Noble Ploenchit.',
    developerName: 'Sansiri',
    propertyType: 'Apartment',
  }));
}
