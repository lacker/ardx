'use strict';

let five = require('johnny-five');

let board = new five.Board();

board.on('ready', function() {

  let servo = new five.Servo(9);
  let led = new five.Led(6);

  this.repl.inject({
    servo: servo,
    led: led,
  });

  setInterval(() => {
    servo.to(Math.random() * 180);
    led.toggle();
  }, 1000);

});
