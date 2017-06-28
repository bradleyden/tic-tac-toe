'use strict'

const engine = require('./engine')
const getFormFields = require(`../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onClick0 = function () {
  if (engine.playerOneCheck()) {
    engine.placeX(0)
  } else {
    engine.placeO(0)
  }
}

const onClick1 = function () {
  if (engine.playerOneCheck()) {
    engine.placeX(1)
  } else {
    engine.placeO(1)
  }
}

const onClick2 = function () {
  if (engine.playerOneCheck()) {
    engine.placeX(2)
  } else {
    engine.placeO(2)
  }
}

const onClick3 = function () {
  if (engine.playerOneCheck()) {
    engine.placeX(3)
  } else {
    engine.placeO(3)
  }
}

const onClick4 = function () {
  if (engine.playerOneCheck()) {
    engine.placeX(4)
  } else {
    engine.placeO(4)
  }
}

const onClick5 = function () {
  if (engine.playerOneCheck()) {
    engine.placeX(5)
  } else {
    engine.placeO(5)
  }
}

const onClick6 = function () {
  if (engine.playerOneCheck()) {
    engine.placeX(6)
  } else {
    engine.placeO(6)
  }
}

const onClick7 = function () {
  if (engine.playerOneCheck()) {
    engine.placeX(7)
  } else {
    engine.placeO(7)
  }
}

const onClick8 = function () {
  if (engine.playerOneCheck()) {
    engine.placeX(8)
  } else {
    engine.placeO(8)
  }
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signInFailure)
}

const addHandlers = () => {
  $('.space0').on('click', onClick0)
  $('.space1').on('click', onClick1)
  $('.space2').on('click', onClick2)
  $('.space3').on('click', onClick3)
  $('.space4').on('click', onClick4)
  $('.space5').on('click', onClick5)
  $('.space6').on('click', onClick6)
  $('.space7').on('click', onClick7)
  $('.space8').on('click', onClick8)
  $('.reset-button').on('click', engine.resetGame)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-pw').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
