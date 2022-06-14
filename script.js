let player = 0
let computer = 0

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3)
  let computerPick = ''
  if (randomNumber === 0) {
    computerPick = 'Rock'
  } else if (randomNumber === 1) {
    computerPick = 'Paper'
  } else {
    computerPick = 'Scissors'
  }

  return computerPick
}

