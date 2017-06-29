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
  $('.login-status').html('<form id="sign-out"><fieldset><input type="submit" class="btn btn-primary btn-lg" name="submit" value="Sign Out"></fieldset></form><button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#changePwModal">Change Password</button>')
  $('.login-status').prepend('Hello, ' + data.user.email)
  console.log(data)
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
  $('.login-status').html("<form id='sign-in'><fieldset><input type='text' placeholder='Email' name='credentials[email]'><input type='password' placeholder='Password' name='credentials[password]'><input type='submit' name='submit' value='Sign in!'></fieldset></form><button type='button' class='btn btn-primary btn-lg' data-toggle='modal' data-target='#signUpModal'>Sign Up!</button>")
  console.log('Successfully signed out')
}

const signOutFailure = (error) => {
  console.log('could not sign out: ', error)
}
let currentGame

const createGameSuccess = (data) => {
  console.log('New game created: ', data)
  currentGame = data.game
}

const getCurrentGame = function () {
  return currentGame.id
}

const createGameFailure = (error) => {
  console.log('could not sign out: ', error)
}

const loadGamesSuccess = (data) => {
  console.table(data.games)
}

const loadGamesFailure = (error) => {
  console.log('could not sign out: ', error)
}

const updateGameSuccess = (data) => {
  $('.game-info').text('Game ' + data.game.cells)
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
