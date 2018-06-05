/* global describe beforeEach it */

const { expect } = require('chai');
const db = require('../index');
const User = db.model('user');

describe('User model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody;

      beforeEach(() => {
        return User.create({
          firstName: 'Big',
          lastName: 'Homie',
          email: 'BG@aol.com',
          imageUrl:
            'http://www.elmwoodmeatplant.com/images/New/S-Navy-White-Leather-New-Era-Fitted-Cap-830142.jpg',
          address: '456 h st',
          city: 'NY',
          state: 'NY',
          zipCode: '98734',
          phone: '7897897633',
          password: 'tacotaco'
        }).then(user => {
          cody = user;
        });
      });

      xit('returns true if the password is correct', () => {
        expect(cody.correctPassword('tacotaco')).to.be.equal(true);
      });

      xit('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('trex')).to.be.equal(false);
      });
    }); // end describe('correctPassword')
  }); // end describe('instanceMethods')
}); // end describe('User model')
