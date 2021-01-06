const faker = require('faker');

function generateProperties(count = 50) {
  const properties = [];
  for (let idx = 0; idx < count; idx += 1) {
    const check = faker.random.boolean();
    const photo = faker.image.imageUrl();
    const id = idx + 1;
    const country = faker.address.country();
    const city = faker.address.city();
    const location = faker.address.streetName();
    const projectName = faker.commerce.productName();
    const developerName = faker.internet.userName();
    const propertyType = faker.name.jobType();

    properties.push({
      check,
      photo,
      id,
      country,
      city,
      location,
      projectName,
      developerName,
      propertyType,
    });
  }
  return { properties };
}

module.exports = generateProperties;
