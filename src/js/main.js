const { whoPlays, whoIsEnemy } = require('./turn')
const { initBoard } = require('./board')
const { spawn, move, attack, endTurn } = require('./actions')

let createGame = () => ({
  turn: 1,
  energyLeft: 3,
  board: initBoard()
})

window.App = {
  start: () => {
    console.log('app running!')
    this.game = createGame()
    App.refresh()
  },

  refresh: () => {
    const marker = (i, j) => (this.selected && this.selected[0]===i && this.selected[1]===j) ? `marked-${whoPlays (this.game)}` : ''
    const cell = (i, j, element) => (
      `<div class='cell c${i}-${j} ${marker(i,j)}' onclick='App.onCellClick(${i},${j})'> <div class='${element}'></div> </div>`
    )
    const cells = []
    const board = this.game.board
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        cells.push(cell (i, j, board[i][j]))
      }
    }
    document.getElementById('board').innerHTML = cells.join('\n')
  },

  onCellClick: (i, j) => {
    const board = this.game.board

    if (this.selected) {
      if (this.selected[0]===i && this.selected[1]===j) {
        this.selected = undefined
      } else if (Math.abs(this.selected[0] - i) + Math.abs(this.selected[1] - j) === 1) {
        if (board[i][j] === `u${whoIsEnemy (this.game)}`) {
          this.game = attack (...this.selected) (i, j) (this.game)
        } else {
          this.game = move (...this.selected) (i, j) (this.game)
        }
        this.selected = undefined
      } else {
        console.log('cant move more than 1 position');
      }
    } else if (board[i][j] === `u${whoPlays (this.game)}`) {
      this.selected = [i, j]
    }
    App.refresh()
  },

  onSpawnClick: () => {
    this.game = spawn (this.game)
    App.refresh()
  },

  onEndTurnClick: () => {
    this.game = endTurn (this.game)
    this.selected = undefined
    console.log(this.game);
    App.refresh()
  }
}

window.addEventListener('load', () => {
  App.start()
})
