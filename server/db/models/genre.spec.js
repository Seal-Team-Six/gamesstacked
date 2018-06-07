/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Genre = db.model('genre')

describe('Genre model', () => {
  beforeEach(async () => db.sync({force: true}))
  describe('created genre', () => {
    let genre

    beforeEach(async () => {
      genre = await Genre.create({
        genre: 'Action'
      })
    })

    it('returns back the correct genre when created', () => {
      expect(genre.genre).to.be.equal('Action')
    })
  })
})
// end describe('Genre model')
