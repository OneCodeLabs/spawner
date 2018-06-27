const { getSpawner, whoPlays } = require('./utils')
const { CELL_EMPTY } = require('./constants')

const canSpawn = game => {
  const spawner = getSpawner (whoPlays (game))
  return game.board[spawner[0]][spawner[1]] === CELL_EMPTY
}

module.exports = {

}
