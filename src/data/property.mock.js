import Property from '../model/property';

function zeroPad(num, length) {
  return num.toString().padStart(length, '0');
}

export function fkProperties01(count = 5) {
  return new Array(count).fill({}).map((_, idx) => new Property({
    check: idx % 5 === 1,
    photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
    propertyID: `P${idx}`,
    country: 'Thailand',
    city: 'Bangkok',
    location: 'Wattana',
    projectName: 'Noble Ploenchit.',
    developerName: 'Sansiri',
    propertyType: 'Apartment',
  }));
}

export function fkProperties02(count = 5) {
  return Array.from({ length: count }, (v, i) => new Property({
    check: i % 5 === 1,
    photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
    propertyID: `P${zeroPad(i, 4)}`,
    country: 'Thailand',
    city: 'Bangkok',
    location: 'Wattana',
    projectName: 'Noble Ploenchit.',
    developerName: 'Sansiri',
    propertyType: 'Apartment',
  }));
}

export function fkProperties03(count = 5) {
  return [...new Array(count)].map((v, index) => new Property({
    check: index % 5 === 1,
    photo: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg',
    propertyID: `P${index}`,
    country: 'Thailand',
    city: 'Bangkok',
    location: 'Wattana',
    projectName: 'Noble Ploenchit.',
    developerName: 'Sansiri',
    propertyType: 'Apartment',
  }));
}

export function getNewId() {
  const arr = fkProperties02(10);
  const maxID = arr.reduce((max, v, idx) => (max > idx ? max : idx), -1);
  return `P${zeroPad(maxID, 4)}`;
}

export function getUserInfo() {
  return {
    userName: 'sss',
    email: 'ddd@gmail.com',
    token: 'ddddd',
  };
}
