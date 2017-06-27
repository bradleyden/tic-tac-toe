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
  $('.space0').on('click', events.onClick0)
  $('.space1').on('click', events.onClick1)
  $('.space2').on('click', events.onClick2)
  $('.space3').on('click', events.onClick3)
  $('.space4').on('click', events.onClick4)
  $('.space5').on('click', events.onClick5)
  $('.space6').on('click', events.onClick6)
  $('.space7').on('click', events.onClick7)
  $('.space8').on('click', events.onClick8)
})
// use require without a reference to ensure a file is bundle
require('./example')
