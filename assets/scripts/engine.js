'use strict'


const blankToken = 'https://raw.githubusercontent.com/bradleyden/tic-tac-toe/master/assets/images/blank-token.png'
const xToken = 'https://raw.githubusercontent.com/bradleyden/tic-tac-toe/master/assets/images/X-token.png'
const oToken = 'https://raw.githubusercontent.com/bradleyden/tic-tac-toe/master/assets/images/O-token.png'

const gameBoard = [
  null, null, null,
  null, null, null,
  null, null, null
]

const updateImages = function () {
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === 1) {
      $('.img' + i).attr('src', xToken)
    } else if (gameBoard[i] === 2) {
      $('.img' + i).attr('src', oToken)
    }
  }
}

const emptySpaces = function (value) {
  return value === null
}

let isPlayerOne = 0

const playerOneCheck = function () {
  if (isPlayerOne % 2 === 0) {
    return true
  } else {
    return false
  }
}

let gameOver = false

const resetGame = function () {
  isPlayerOne = 0
  gameOver = false
  fullRow = []
  $('#display-board').text('')
  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = null
    $('.img' + i).attr('src', blankToken)
  }
}

const checkMatch = function () {
  if ((fullRow.length >= 3) && (fullRow[0] === fullRow[1]) && (fullRow[0] === fullRow[2])) {
    for (let i = 0; i < gameBoard.length; i++) {
      if ((i !== fullRowIndex[0]) && (i !== fullRowIndex[1]) && (i !== fullRowIndex[2])) {
        gameBoard[i] = null
        $('.img' + i).attr('src', blankToken)
      }
    }
    fullRowIndex = []
    $('#display-board').text('Player ' + fullRow[0] + ' Wins! Congratulations, Player ' + fullRow[0] + '!')
    gameOver = true
  } else {
    fullRow = []
    fullRowIndex = []
  }
}

const checkCatsGame = function () {
  const fullBoardArray = gameBoard.filter(emptySpaces)
  if (fullBoardArray.length === 0) {
    $('#display-board').text('Cat\'s Game!')
    gameOver = true
  }
}

let fullRow = []
let fullRowIndex = []

const fillRow = function (slot1, slot2, slot3) {
  if (gameBoard[slot1] && gameBoard[slot2] && gameBoard[slot3]) {
    fullRow.push(gameBoard[slot1])
    fullRow.push(gameBoard[slot2])
    fullRow.push(gameBoard[slot3])
    fullRowIndex.push(slot1, slot2, slot3)
    checkMatch()
  }
}

const placeX = function (space) {
  if (!gameBoard[space] && !gameOver) {
    gameBoard[space] = 1
    $('.img' + space).attr('src', xToken)
    isPlayerOne += 1
    checkRowFull()
  }
}

const placeO = function (space) {
  if (!gameBoard[space] && !gameOver) {
    gameBoard[space] = 2
    $('.img' + space).attr('src', oToken)
    isPlayerOne += 1
    checkRowFull()
  }
}

const checkRowFull = function () {
  if (!gameOver) {
    fillRow(0, 3, 6)
  }
  if (!gameOver) {
    fillRow(1, 4, 7)
  }
  if (!gameOver) {
    fillRow(2, 5, 8)
  }
  if (!gameOver) {
    fillRow(0, 1, 2)
  }
  if (!gameOver) {
    fillRow(3, 4, 5)
  }
  if (!gameOver) {
    fillRow(6, 7, 8)
  }
  if (!gameOver) {
    fillRow(0, 4, 8)
  }
  if (!gameOver) {
    fillRow(6, 4, 2)
  }
  if (!gameOver) {
    checkCatsGame()
  }
}

const gameStatus = function () {
  return gameOver
}

module.exports = {
  gameBoard,
  checkMatch,
  fillRow,
  checkRowFull,
  fullRow,
  placeX,
  placeO,
  resetGame,
  playerOneCheck,
  checkCatsGame,
  updateImages,
  gameStatus
}
