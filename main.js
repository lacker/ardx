'use strict';

let five = require('johnny-five');
let board = new five.Board();

// Xors the bits in a number
function xor(n) {
  if (n <= 0) {
    return 0;
  }
  return (n & 1) ^ (xor(n >> 1));
}

board.on('ready', function() {

  console.log('board ready');

  let red = new five.Led(10);
  let green = new five.Led(6);

  red.toggle();
  green.toggle();

  let pot = new five.Sensor({
    pin: 'A1'
  });

  pot.on('read', function() {
    red.toggle();
    console.log('read something');
  });

});
