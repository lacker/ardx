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

  let red = new five.Led(10);
  let green = new five.Led(6);

  let pot = new five.Sensor({
    pin: 'A0',
    freq: 250,
  });

  pot.on('read', function() {
    console.log(this.raw);
  });

});
