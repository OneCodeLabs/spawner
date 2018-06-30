const { initBoard } = require('./board')
const { spawn, move } = require('./actions')

let createGame = () => ({
  turn: 1,
  energyLeft: 5,
  board: initBoard()
})

window.App = {
  start: () => {
    console.log('app running!')
    this.game = createGame()
    App.refresh()
  },

  refresh: () => {
    const cell = (i, j) => (
      `<div class='cell' onclick='App.onCellClick(${i},${j})'></div>`
    )
    const cells = []
    const board = this.game.board
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        cells.push(cell (i, j))
      }
    }
    document.getElementById('board').innerHTML = cells.join('\n')
  },

  onCellClick: (i, j) => {
    console.log('cell clicked! ' + i + ' ' + j);
  },

  onSpawnClick: () => {
    console.log('spawn button clicked!');
  }
}

window.addEventListener('load', () => {
  App.start()
})
