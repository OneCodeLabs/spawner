const { whoPlays, startingEnergy } = require('./turn')
const { canSpawn, canMove } = require('./validations')
const { getSpawner } = require('./board')
const { CELL_EMPTY, CELL_UNIT, COST_SPAWN, COST_MOVE } = require('./constants')

const spawn = game => {
  if (!canSpawn (game)) {
    throw new Error('cant spawn')
  }

  const spawner = getSpawner (whoPlays (game))

  const nextGame = {...game}
  nextGame.board[spawner[0]][spawner[1]] = CELL_UNIT (whoPlays (game))
  nextGame.energyLeft -= COST_SPAWN
  return nextGame
}

const endTurn = game => {
  const nextGame = {...game}
  nextGame.turn++
  nextGame.energyLeft = startingEnergy (nextGame.turn)
  return nextGame
}

const attack = (fromI, fromJ) => (toI, toJ) => game => {
  console.error('attack is not implemented yet');
  return game
}

const move = (fromI, fromJ) => (toI, toJ) => game => {
  if (!canMove (fromI, fromJ) (toI, toJ) (game)) {
    throw new Error('cant move')
  }

  const nextGame = {...game}
  nextGame.board[toI][toJ] = nextGame.board[fromI][fromJ]
  nextGame.board[fromI][fromJ] = CELL_EMPTY
  nextGame.energyLeft -= COST_MOVE
  return nextGame
}

module.exports = {
  spawn,
  attack,
  move,
  endTurn
}
