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

  let led = new five.Led(10);

  let counter = -1;
  this.loop(200, () => {
    counter++;
    if (xor(counter)) {
      led.on();
    } else {
      led.off();
    }
  });

});
