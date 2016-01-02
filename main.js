'use strict';

let five = require("johnny-five");

let board = new five.Board();

board.on("ready", function() {

  let led = new five.Led(13);

  led.strobe(1000);

  // Make led available in repl
  this.repl.inject({
    led: led
  });

  // try "on", "off", "toggle", "strobe", "stop" (stops strobing)
});
