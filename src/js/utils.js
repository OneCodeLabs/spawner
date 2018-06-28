const { SPAWNER_0, SPAWNER_1, ROWS, COLUMNS, CELL_EMPTY } = require('./constants')

const whoPlays = game => (game.turn + 1) % 2

const getSpawner = player => player === 0 ? SPAWNER_0 : SPAWNER_1

const startingEnergy = turn => Math.floor(3 + turn/2)

const initBoard = () => {
  const board = []
  for (let i = 0; i < ROWS; i++) {
    const row = []
    for (let j = 0; j < COLUMNS; j++) {
      row.push(CELL_EMPTY)
    }
    board.push(row)
  }
  return board
}

let createGame = () => ({
  turn: 1,
  board: initBoard()
})

module.exports = {
  whoPlays,
  getSpawner,
  startingEnergy,
  initBoard,
  createGame
}
