const {expect} = require('chai')
const db = require('../index')
const Product = db.model('product')

describe('Product model', () => {
  beforeEach(() => {
   return db.sync({force: true})
  })
  describe('product', () => {
    describe('hasAName', () => {
      let superMarioBros
      beforeEach(() => {
        return Product.create({
          name: 'Super Mario Bros',
          slug: 'super-mario-bros',
          summary: 'lorem ipsum',
          totalRating: 8.9,
          price: 59.99,
          inventory: 4,
          screenshots: [
            {
              url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/jdawjmjvjr3ncwukwyud.jpg',
            },
            {
              url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/vx8qaybealaigmk6euyc.jpg',
            },
          ],
          videos: null,
          cover: {
            url: 'images.igdb.com/igdb/image/upload/t_screenshot_big/hivpg7wyyuhicfdtma9t.jpg',
          }
        }).then(product => {
          superMarioBros = product
        })
      })
      it('returns true if name is present', () => {
        expect(superMarioBros.name).to.equal('Super Mario Bros')
      })
    }) 
  })
})
