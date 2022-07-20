let player = 0
let computer = 0

const body = document.querySelector('body')
const scissors = document.createElement('button')
const rock = document.createElement('button')
const paper = document.createElement('button')
const div = document.createElement('div')
const score = document.createElement('div')
const playerScore = document.createElement('div')
const computerScore = document.createElement('div')

scissors.style.cssText = 'padding: 15px 32px;'
rock.style.cssText = 'padding: 15px 32px;'
paper.style.cssText = 'padding: 15px 32px;'

scissors.textContent = 'Scissors'
rock.textContent = 'Rock'
paper.textContent = 'Paper'

div.style.cssText = 'width: 20vh; height: 5vh ; border: 5px solid red'
score.style.cssText = 'width: 20vh; height: 5vh ; border: 5px solid blue'

body.appendChild(rock)
body.appendChild(paper)
body.appendChild(scissors)
body.appendChild(div)
body.appendChild(score)
body.appendChild(playerScore)
body.appendChild(computerScore)

playerScore.textContent = 'Player ' + player
computerScore.textContent = 'Computer ' + computer

const buttons = document.querySelectorAll('button')

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

function endGame() {
  if (player >= 5 && computer < 5) {
    score.textContent = 'Game Over. You Win!'
    div.textContent = ''
    removeButton()
  } else if (player < 5 && computer >= 5) {
    score.textContent = 'Game Over. You Lose!'
    div.textContent = ''
    removeButton()
  }
}

function removeButton() {
  buttons.forEach(btn => btn.removeEventListener('click', getPlayerSelection))
}

function getPlayerSelection(e) {
  div.textContent = playRound(e.target.textContent, computerPlay())
  playerScore.textContent = 'Player ' + player
  computerScore.textContent = 'Computer ' + computer
  endGame()
}

function game() {
  scissors.addEventListener('click', getPlayerSelection)
  rock.addEventListener('click', getPlayerSelection)
  paper.addEventListener('click', getPlayerSelection)
}
game()
