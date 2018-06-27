const { getSpawner, whoPlays } = require('./utils')
const { canSpawn } = require('./validations')
const { CELL_UNIT } = require('./constants')

const spawn = game => {
  if (!canSpawn) {
    // shit happens
    console.error("can't spawn");
    return game
  }

  const spawner = getSpawner (whoPlays (game))

  const nextGame = {...game}
  nextGame.board[spawner[0]][spawner[1]] = CELL_UNIT (whoPlays (game))
  return nextGame
}

const attack = game => (fromI, fromJ) => (toI, toJ) => {

}

const move = game => (fromI, fromJ) => (toI, toJ) => {

}

module.exports = {
  spawn,
  attack,
  move
}
