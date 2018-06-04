// const {expect} = require('chai') const db = require('../index') const Product
// = db.model('product') describe('Product model', () => {   beforeEach(() => {
//    return db.sync({force: true})   })   describe('instanceMethods', () => {
//   describe('hasAName', () => {       let superMarioBros       beforeEach(()
// => {         return Product           .create({           name: 'Super Mario
// Bros',           slug: 'super-mario-bros',           summary: 'lorem ipsum',
//          totalRating: 8.9,           price: 59.99,           inventory: 4,
//        images:
// 'http://images.igdb.com/igdb/image/upload/t_thumb/riadn8t0d8mvlbsutcof.jpg',
//          videos: null         })           .then(product => {
// superMarioBros = product           })       })       it('returns true if name
// is present', () => {         expect(superMarioBros.name.to.equal('Super Mario
// Bros'))       })     }) // end describe('correctPassword')   }) // end
// describe('instanceMethods') }) // end describe('User model')