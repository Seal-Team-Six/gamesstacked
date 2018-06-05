const { expect } = require('chai')
const db = require('../index')

const Product = db.model('product')
const Genre = db.model('genre')

describe('Product model', () => {
  const data = {
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
    },
  }
  beforeEach(() => db.sync())
  describe('product', () => {
    describe('hasAName', () => {
      let superMarioBros
      beforeEach(async () => {
        const ge = await Genre.create({ genre: 'Platform' })
        superMarioBros = await Product.create(data)
        await superMarioBros.setGenres(ge)
      })
      it('returns true if name is present', () => {
        expect(superMarioBros.name).to.equal('Super Mario Bros')
      })
    })
  })
})
