const db = require('./db')

// register models
const { User, Genre } = require('./models')

module.exports = {
  db,
  User,
  Genre,
}
