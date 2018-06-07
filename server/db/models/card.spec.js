const {expect} = require('chai')
const db = require('../index')
const Card = db.model('card')

describe('CreditCard model', () => {
  beforeEach(() => db.sync({force: true}))
  describe('saved credit card', () => {
    let card

    beforeEach(async () => {
      card = await Card.create({
        number: '4111111111111111',
        exp: '03/20',
        CVV: '111'
      })
    })

    it('returns true if credit card number is correct', () => {
      expect(card.correctNumber('4111111111111111')).to.be.equal(true)
    })
    it('returns true if CVV is correct', () => {
      expect(card.correctCVV('111')).to.be.equal(true)
    })
    it('returns the correct exp date', () => {
      expect(card.exp).to.be.equal('03/20')
    })
  })
})
