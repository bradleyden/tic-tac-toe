'use strict'

const engine = require('./engine')

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
