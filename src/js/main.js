const { createGame } = require('./utils')
const { spawn } = require('./actions')

let game = createGame()

game = spawn (game)
game = spawn (game)

console.log(game)

window.addEventListener('load', () => {
  console.log('app running!')
})
