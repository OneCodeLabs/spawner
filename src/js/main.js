const { initBoard } = require('./board')
const { spawn, move } = require('./actions')

let createGame = () => ({
  turn: 1,
  energyLeft: 5,
  board: initBoard()
})

// game = spawn (game)
// game = move (0, 3) (1, 3) (game)

window.App = {
  start: () => {
    console.log('app running!')
    this.game = createGame()
  }
}

window.addEventListener('load', () => {
  App.start()
})
