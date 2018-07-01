const whoPlays = game => (game.turn + 1) % 2
const whoIsEnemy = game => 1 - whoPlays (game)
const startingEnergy = turn => Math.floor(3 + turn/2)

module.exports = {
  whoPlays,
  startingEnergy,
  whoIsEnemy
}
