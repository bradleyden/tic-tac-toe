'use strict'

const gameBoard = [
  null, null, null,
  null, null, null,
  null, null, null
]

const emptySpaces = function (value) {
  return value === null
}

let gameOver = false

const checkMatch = function () {
  if (fullRow.length === 3 && fullRow[0] === fullRow[1] && fullRow[0] === fullRow[2]) {
    console.log('Player ' + fullRow[0] + ' wins!')
    gameOver = true
  } else {
    fullRow = []
    const checkCatsGame = gameBoard.filter(emptySpaces)
    if (checkCatsGame.length === 0) {
      console.log("Cat's game!")
      gameOver = true
    }
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
  if (!gameBoard[space]) {
    gameBoard[space] = 1
    console.log(gameBoard)
    checkRowFull()
  } else {
    console.log('Space not empty!')
  }
}

const placeO = function (space) {
  if (!gameBoard[space]) {
    gameBoard[space] = 2
    console.log(gameBoard)
    checkRowFull()
  } else {
    console.log('Space not empty!')
  }
}

const checkRowFull = function () {
  fillRow(0, 3, 6)
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
}

module.export = {
  gameBoard,
  checkMatch,
  fillRow,
  checkRowFull,
  fullRow,
  placeX,
  placeO
}
