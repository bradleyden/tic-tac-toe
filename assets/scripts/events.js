'use strict'

const engine = require('./engine')
const getFormFields = require(`../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const pushUpdate = {
  "game": {
    "cell": {
      "index": 0,
      "value": "x"
    },
    "over": false
  }
}

const update = api.updateGame

const onClick0 = function () {
  if (engine.playerOneCheck()) {
    engine.placeX(0)
    pushUpdate.game.cell.index = 0
    pushUpdate.game.cell.value = "x"
  } else {
    engine.placeO(0)
    pushUpdate.game.cell.index = 0
    pushUpdate.game.cell.value = "o"
  }
  if (engine.gameStatus()) {
    pushUpdate.game.over = true
  }
  update(pushUpdate)
}

const onClick1 = function () {
  if (engine.playerOneCheck()) {
    engine.placeX(1)
    pushUpdate.game.cell.index = 1
    pushUpdate.game.cell.value = "x"
  } else {
    engine.placeO(1)
    pushUpdate.game.cell.index = 1
    pushUpdate.game.cell.value = "o"
  }
  if (engine.gameStatus()) {
    pushUpdate.game.over = true
  }
  update(pushUpdate)
}

const onClick2 = function () {
  if (engine.playerOneCheck()) {
    engine.placeX(2)
    pushUpdate.game.cell.index = 2
    pushUpdate.game.cell.value = "x"
  } else {
    engine.placeO(2)
    pushUpdate.game.cell.index = 2
    pushUpdate.game.cell.value = "o"
  }
  if (engine.gameStatus()) {
    pushUpdate.game.over = true
  }
  update(pushUpdate)
}

const onClick3 = function () {
  if (engine.playerOneCheck()) {
    engine.placeX(3)
    pushUpdate.game.cell.index = 3
    pushUpdate.game.cell.value = "x"
  } else {
    engine.placeO(3)
    pushUpdate.game.cell.index = 3
    pushUpdate.game.cell.value = "o"
  }
  if (engine.gameStatus()) {
    pushUpdate.game.over = true
  }
  update(pushUpdate)
}

const onClick4 = function () {
  if (engine.playerOneCheck()) {
    engine.placeX(4)
    pushUpdate.game.cell.index = 4
    pushUpdate.game.cell.value = "x"
  } else {
    engine.placeO(4)
    pushUpdate.game.cell.index = 4
    pushUpdate.game.cell.value = "o"
  }
  if (engine.gameStatus()) {
    pushUpdate.game.over = true
  }
  update(pushUpdate)
}

const onClick5 = function () {
  if (engine.playerOneCheck()) {
    engine.placeX(5)
    pushUpdate.game.cell.index = 5
    pushUpdate.game.cell.value = "x"
  } else {
    engine.placeO(5)
    pushUpdate.game.cell.index = 5
    pushUpdate.game.cell.value = "o"
  }
  if (engine.gameStatus()) {
    pushUpdate.game.over = true
  }
  update(pushUpdate)
}

const onClick6 = function () {
  if (engine.playerOneCheck()) {
    engine.placeX(6)
    pushUpdate.game.cell.index = 6
    pushUpdate.game.cell.value = "x"
  } else {
    engine.placeO(6)
    pushUpdate.game.cell.index = 6
    pushUpdate.game.cell.value = "o"
  }
  if (engine.gameStatus()) {
    pushUpdate.game.over = true
  }
  update(pushUpdate)
}

const onClick7 = function () {
  if (engine.playerOneCheck()) {
    engine.placeX(7)
    pushUpdate.game.cell.index = 7
    pushUpdate.game.cell.value = "x"
  } else {
    engine.placeO(7)
    pushUpdate.game.cell.index = 7
    pushUpdate.game.cell.value = "o"
  }
  if (engine.gameStatus()) {
    pushUpdate.game.over = true
  }
  update(pushUpdate)
}

const onClick8 = function () {
  if (engine.playerOneCheck()) {
    engine.placeX(8)
    pushUpdate.game.cell.index = 8
    pushUpdate.game.cell.value = "x"
  } else {
    engine.placeO(8)
    pushUpdate.game.cell.index = 8
    pushUpdate.game.cell.value = "o"
  }
  if (engine.gameStatus()) {
    pushUpdate.game.over = true
  }
  update(pushUpdate)
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
    .catch(ui.signOutFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
  engine.resetGame()
}

const onLoadGames = function (event) {
  event.preventDefault()
  api.getAllGames()
    .then(ui.loadGamesSuccess)
    .catch(ui.loadGamesFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  api.updateGame()
  .then(ui.updateGameSuccess)
  .catch(ui.updateGameFailure)
}

$(() => {
  $('#game-board').hide()
  $('#create-game').hide()
  $('#load-game').hide()
  $('.logged-in').hide()
})

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
  // $('#reset-button').on('click', engine.resetGame)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-pw').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#load-game').on('click', onLoadGames)
  $('#create-game').on('click', onNewGame)
}

module.exports = {
  addHandlers,
  onUpdateGame
}
