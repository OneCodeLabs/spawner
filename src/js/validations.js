const { getSpawner } = require('./board')
const { whoPlays } = require('./turn')
const { CELL_EMPTY, CELL_UNIT, COST_SPAWN, COST_MOVE, COST_ATTACK } = require('./constants')

const canSpawn = game => {
  const spawner = getSpawner (whoPlays (game))
  return game.board[spawner[0]][spawner[1]] === CELL_EMPTY && game.energyLeft >= COST_SPAWN
}

const canMove = (fromI, fromJ) => (toI, toJ) => game => (
  belongsToPlayer (game.board[fromI][fromJ]) (whoPlays (game)) &&
  game.board[toI][toJ] === CELL_EMPTY &&
  Math.abs(toI - fromI) + Math.abs(toJ - fromJ) === 1 &&
  game.energyLeft >= COST_MOVE
)

const belongsToPlayer = unit => player => unit === CELL_UNIT (player)

module.exports = {
  canSpawn,
  canMove
}
