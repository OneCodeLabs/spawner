const { SPAWNER_0, SPAWNER_1, ROWS, COLUMNS, CELL_EMPTY } = require('./constants')

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

const getSpawner = player => player === 0 ? SPAWNER_0 : SPAWNER_1

module.exports = {
  initBoard,
  getSpawner
}
