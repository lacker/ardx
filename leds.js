'use strict';

let five = require("johnny-five");

let board = new five.Board();

board.on("ready", function() {

  // Put one led on each of these pins
  let led = [2, 3, 4, 5, 7, 9, 11, 13].map(x => new five.Led(x));

  // Make leds available in repl
  this.repl.inject({
    led: led,
  });

  let tick = 0;
  setInterval(() => {
    let s = '';
    for (let i in led) {
      if (tick & (1 << i)) {
        led[i].on();
        s = '1' + s;
      } else {
        led[i].off();
        s = '0' + s;
      }
    }
    console.log('tick', s);
    tick++;
  }, 250);
});
