'use strict'

const store = require('./store')

const signUpSuccess = (data) => {
  console.log(data)
}
const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  store.user = data.user
  $('.logged-out').hide()
  $('.logged-in').show()
  $('.logged-in').prepend('Hello, ' + data.user.email)
  $('#create-game').show(400)
  $('#load-game').show(400)
  $('.instructions').text('Start a new game, or select one you\'ve already started!')
}

const signInFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
  console.log('Successfully changed password')
}

const changePasswordFailure = (error) => {
  console.log('change password failed: ', error)
}

const signOutSuccess = (data) => {
  $('#create-game').hide()
  $('#load-game').hide()
  $('.logged-in').hide()
  $('.logged-out').show()
  $('#game-board').hide()
  console.log('Successfully signed out')
}

const signOutFailure = (error) => {
  console.log('could not sign out: ', error)
}

let currentGame

const createGameSuccess = (data) => {
  $('#game-board').show(400)
  $('.instructions').text('Try to get 3 in a row! Good luck!')
  console.log(data.game.id)
  currentGame = data.game
}

const getCurrentGame = function () {
  return currentGame.id
}

const createGameFailure = (error) => {
  console.log('could not sign out: ', error)
}

const loadGamesSuccess = (data) => {
  console.log(data.games.length)
  $('.game-count').text('You have played ' + data.games.length + ' games!')
}

const loadGamesFailure = (error) => {
  console.log('could not sign out: ', error)
}

const updateGameSuccess = (data) => {
  console.log('Game Updated')
}

const updateGameFailure = (error) => {
  console.log('could not sign out: ', error)
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
  getCurrentGame
}
