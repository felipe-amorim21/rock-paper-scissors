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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase()
  switch (playerSelection) {
    case 'ROCK':
      if (computerSelection === 'Rock') {
        return "It's a DRAW"
      } else if (computerSelection === 'Paper') {
        computer++
        return 'You LOSE! Paper beats Rock'
      } else {
        player++
        return 'You WIN! Rock beats Scissors'
      }
    case 'PAPER':
      if (computerSelection === 'Paper') {
        return "It's a DRAW"
      } else if (computerSelection === 'Rock') {
        computer++
        return 'You LOSE! Scissors beats Paper'
      } else {
        player++
        return 'You WIN! Paper beats Rock'
      }
    case 'SCISSORS':
      if (computerSelection === 'Scissors') {
        return "It's a DRAW"
      } else if (computerSelection === 'Rock') {
        computer++
        return 'You LOSE! Rock beats Scissors'
      } else {
        player++
        return 'You WIN! Scissors beats Paper'
      }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("What's your move?")
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
    if (i === 4) {
      if (player > computer) {
        console.log('You are the Winner')
      } else if (computer > player) {
        console.log('You are the loser, Computer Wins')
      } else {
        console.log("It's a Draw! Play again")
      }
    }
  }
}

game()
