'use strict';

let five = require("johnny-five");

let board = new five.Board();

board.on("ready", function() {

  let green = new five.Led(13);
  let red = new five.Led(10);
  let big = new five.Led(7);

  console.log('strobing');
  green.strobe(1000);
  red.strobe(500);
  big.strobe(250);

  // Make leds available in repl
  this.repl.inject({
    green: green,
    red: red,
    big: big,
  });

  // try "on", "off", "toggle", "strobe", "stop" (stops strobing)
});
