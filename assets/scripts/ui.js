'use strict'

const store = require('./store')

const signUpSuccess = (data) => {
}
const signUpFailure = () => {
}

const signInSuccess = (data) => {
  store.user = data.user
  $('.logged-out').hide()
  $('.logged-in').show()
  $('.greeting').text('Hello, ' + data.user.email)
  $('#create-game').show(400)
  $('.instructions').text('Start a new game!')
}

const signInFailure = () => {
}

const changePasswordSuccess = (data) => {
}

const changePasswordFailure = () => {
}

const signOutSuccess = (data) => {
  $('#create-game').hide()
  $('.logged-in').hide()
  $('.logged-out').show()
  $('#game-board').hide()
  $('.instructions').text('Welcome to Tic-Tac-Toe! Please sign in or sign up to start playing!')
}

const signOutFailure = (eror) => {
}

let currentGame

const createGameSuccess = (data) => {
  $('#game-board').show(400)
  $('.instructions').text('Try to get 3 in a row! Good luck!')
  currentGame = data.game
}

const getCurrentGame = function () {
  return currentGame.id
}

const createGameFailure = () => {
}

const checkWins = (gamesArray) => {
  if ((gamesArray.cells[0] + gamesArray.cells[3] + gamesArray.cells[6] === 'xxx') ||
      (gamesArray.cells[1] + gamesArray.cells[4] + gamesArray.cells[7] === 'xxx') ||
      (gamesArray.cells[2] + gamesArray.cells[5] + gamesArray.cells[8] === 'xxx') ||
      (gamesArray.cells[0] + gamesArray.cells[1] + gamesArray.cells[2] === 'xxx') ||
      (gamesArray.cells[3] + gamesArray.cells[4] + gamesArray.cells[5] === 'xxx') ||
      (gamesArray.cells[6] + gamesArray.cells[7] + gamesArray.cells[8] === 'xxx') ||
      (gamesArray.cells[0] + gamesArray.cells[4] + gamesArray.cells[8] === 'xxx') ||
      (gamesArray.cells[6] + gamesArray.cells[4] + gamesArray.cells[2] === 'xxx')) {
    return true
  } else {
    return false
  }
}

const checkLosses = (gamesArray) => {
  if ((gamesArray.cells[0] + gamesArray.cells[3] + gamesArray.cells[6] === 'ooo') ||
      (gamesArray.cells[1] + gamesArray.cells[4] + gamesArray.cells[7] === 'ooo') ||
      (gamesArray.cells[2] + gamesArray.cells[5] + gamesArray.cells[8] === 'ooo') ||
      (gamesArray.cells[0] + gamesArray.cells[1] + gamesArray.cells[2] === 'ooo') ||
      (gamesArray.cells[3] + gamesArray.cells[4] + gamesArray.cells[5] === 'ooo') ||
      (gamesArray.cells[6] + gamesArray.cells[7] + gamesArray.cells[8] === 'ooo') ||
      (gamesArray.cells[0] + gamesArray.cells[4] + gamesArray.cells[8] === 'ooo') ||
      (gamesArray.cells[6] + gamesArray.cells[4] + gamesArray.cells[2] === 'ooo')) {
    return true
  } else {
    return false
  }
}

let winCount
let lossCount

const loadGamesSuccess = (data) => {
  const gamesArray = data.games
  const winsArray = gamesArray.filter(checkWins)
  const lossArray = gamesArray.filter(checkLosses)
  $('#win-count').text('Games Won: ' + winsArray.length)
  $('#loss-count').text('Games Lost: ' + lossArray.length)
}

const loadGamesFailure = () => {
}

const updateGameSuccess = (data) => {
}

const updateGameFailure = () => {
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createGameSuccess,
  createGameFailure,
  loadGamesSuccess,
  loadGamesFailure,
  updateGameSuccess,
  updateGameFailure,
  getCurrentGame,
  winCount,
  lossCount
}
