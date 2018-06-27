const { SPAWNER_0, SPAWNER_1 } = require('./constants')

const whoPlays = game => (game.turn + 1) % 2

const getSpawner = player => player === 0 ? SPAWNER_0 : SPAWNER_1

module.exports = {
  whoPlays,
  getSpawner
}
