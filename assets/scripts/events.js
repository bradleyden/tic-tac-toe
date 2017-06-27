'use strict'

const engine = require('./engine')

let isPlayerOne = true

const onClick0 = function () {
  if (isPlayerOne === true) {
    engine.placeX(0)
    isPlayerOne = false
  } else {
    engine.placeO(0)
    isPlayerOne = true
  }
}

const onClick1 = function () {
  if (isPlayerOne === true) {
    engine.placeX(1)
    isPlayerOne = false
  } else {
    engine.placeO(1)
    isPlayerOne = true
  }
}

const onClick2 = function () {
  if (isPlayerOne === true) {
    engine.placeX(2)
    isPlayerOne = false
  } else {
    engine.placeO(2)
    isPlayerOne = true
  }
}

const onClick3 = function () {
  if (isPlayerOne === true) {
    engine.placeX(3)
    isPlayerOne = false
  } else {
    engine.placeO(3)
    isPlayerOne = true
  }
}

const onClick4 = function () {
  if (isPlayerOne === true) {
    engine.placeX(4)
    isPlayerOne = false
  } else {
    engine.placeO(4)
    isPlayerOne = true
  }
}

const onClick5 = function () {
  if (isPlayerOne === true) {
    engine.placeX(5)
    isPlayerOne = false
  } else {
    engine.placeO(5)
    isPlayerOne = true
  }
}

const onClick6 = function () {
  if (isPlayerOne === true) {
    engine.placeX(6)
    isPlayerOne = false
  } else {
    engine.placeO(6)
    isPlayerOne = true
  }
}

const onClick7 = function () {
  if (isPlayerOne === true) {
    engine.placeX(7)
    isPlayerOne = false
  } else {
    engine.placeO(7)
    isPlayerOne = true
  }
}

const onClick8 = function () {
  if (isPlayerOne === true) {
    engine.placeX(8)
    isPlayerOne = false
  } else {
    engine.placeO(8)
    isPlayerOne = true
  }
}

module.exports = {
  onClick0,
  onClick1,
  onClick2,
  onClick3,
  onClick4,
  onClick5,
  onClick6,
  onClick7,
  onClick8
}
