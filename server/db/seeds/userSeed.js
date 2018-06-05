const { User } = require('../models');
const db = require('../');

const faker = require('faker');

// Helpers functions
const floor = function(random) {
  return Math.floor(random);
};

const random = function(min = 0, max) {
  return Math.random() * (max - min + 1) + min;
};

// Database seed
db
  .sync({ force: true })
  .then(() => {
    const UserData = [];

    // Create Silly Name Universities and Faker addresses
    for (let i = 0; i < 10; i++) {
      UserData.push({
        firstName: `${faker.name.firstName()}`,
        lastName: `${faker.name.lastName()}`,
        email: `${faker.internet.email()}`,
        imageUrl: `${faker.image.imageUrl()}`,
        address: `${faker.address.streetAddress()} ${faker.address.streetName()}`,
        city: `${faker.address.city()}`,
        state: `${faker.address.state()}`,
        zipCode: `${faker.address.zipCode()}`,
        phone: `${faker.phone.phoneNumber()}`,
        password: `password`,
      });
    }

    return User.bulkCreate(UserData, { returning: true });
  })

  .then(() => {
    console.log('[SUCCESS]: Database synced successfully.');
  })
  .catch(err => {
    console.log('[ERROR]: Database not synced successfully.');
    console.log(err);
  })
  .finally(() => {
    db.close();
  });
