'use strict'

const gameBoard = [
  null, null, null,
  null, null, null,
  null, null, null
]

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
  $('.display-board').text('')
  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = null
    $('.img' + i).attr('src', 'http://i.imgur.com/aXEZ7g0.png')
  }
  console.log(gameBoard)
}

const checkMatch = function () {
  console.log(fullRow)
  console.log(gameBoard)
  if (fullRow.length === 3 && fullRow[0] === fullRow[1] && fullRow[0] === fullRow[2]) {
    console.log('Game should end here')
    gameOver = true
    $('.display-board').text('Player ' + fullRow[0] + ' Wins!')
  } else {
    fullRow = []
  }
}

const checkCatsGame = function () {
  const fullBoardArray = gameBoard.filter(emptySpaces)
  if (fullBoardArray.length === 0) {
    $('.display-board').text('Cat\'s Game!')
    gameOver = true
  }
}

let fullRow = []

const fillRow = function (slot1, slot2, slot3) {
  if (gameBoard[slot1] && gameBoard[slot2] && gameBoard[slot3]) {
    fullRow.push(gameBoard[slot1])
    fullRow.push(gameBoard[slot2])
    fullRow.push(gameBoard[slot3])
    checkMatch()
  }
}

const placeX = function (space) {
  if (!gameBoard[space] && !gameOver) {
    gameBoard[space] = 1
    $('.img' + space).attr('src', 'http://i.imgur.com/hzyUO3c.png')
    isPlayerOne += 1
    checkRowFull()
  } else {
    console.log('Space not empty!')
  }
}

const placeO = function (space) {
  if (!gameBoard[space] && !gameOver) {
    gameBoard[space] = 2
    $('.img' + space).attr('src', 'http://i.imgur.com/YLJbqbr.png')
    isPlayerOne += 1
    checkRowFull()
  } else {
    console.log('Space not empty!')
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
    fillRow(2, 5, 8)
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
  checkCatsGame
}
