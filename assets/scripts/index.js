'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
$(() => {
  $('.space0').on('click', events.onClick(0))
  $('.space1').on('click', events.onClick(1))
  $('.space2').on('click', events.onClick(2))
  $('.space3').on('click', events.onClick(3))
  $('.space4').on('click', events.onClick(4))
  $('.space5').on('click', events.onClick(5))
  $('.space6').on('click', events.onClick(6))
  $('.space7').on('click', events.onClick(7))
  $('.space8').on('click', events.onClick(8))
})
// use require without a reference to ensure a file is bundle
require('./example')
