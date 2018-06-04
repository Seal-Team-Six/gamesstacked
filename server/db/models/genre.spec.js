/* global describe beforeEach it */

const { expect } = require('chai')
const db = require('../index')
const Genre = db.model('genre')

describe('Genre model', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })
    describe('created genre', () => {
      let genre

      beforeEach(() => {
        return Genre.create({
          genre: 'Action',
        })
          .then(data => {
            genre = data.genre
          })
      })

      it('returns back the correct genre when created', () => {
        expect(genre).to.be.equal('Action')
      })
    })
  })
// end describe('Genre model')
