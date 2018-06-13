const {Genre} = require('../models')

const genres = [
  {genre: 'Sport'},
  {genre: 'Role-playing (RPG)'},
  {genre: 'Adventure'},
  {genre: 'Point-and-click'},
  {genre: 'Simulator'},
  {genre: 'Arcade'},
  {genre: 'Tactical'},
  {genre: 'Quiz/Trivia'},
  {genre: 'Platform'},
  {genre: 'Racing'},
  {genre: 'Indie'},
  {genre: 'Turn-based strategy (TBS)'},
  {genre: 'Puzzle'},
  {genre: "Hack and slash/Beat 'em up"},
  {genre: 'Fighting'},
  {genre: 'Strategy'},
  {genre: 'Real Time Strategy (RTS)'},
  {genre: 'Pinball'},
  {genre: 'Shooter'},
  {genre: 'Music'}
]

const genreSeed = async () => {
  try {
    console.log('syncing genre db')
    console.log('genre db synced')
    await Genre.bulkCreate(genres)
  } catch (err) {
    console.error(err)
  } finally {
    console.log('Shutting genre connection')
    console.log('Genre db closed')
  }
}

module.exports = genreSeed
