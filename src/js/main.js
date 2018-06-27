
let game = {
  turn: 1,
  board: initBoard()
}

game = spawn (game)

const startingEnergy = turn => Math.floor(3 + turn/2)

const initBoard = () => {

}

window.addEventListener('load', () => {
  console.log('app running!')
})
