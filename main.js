'use strict';

let five = require('johnny-five');

let board = new five.Board();

board.on('ready', function() {

  let servo = new five.Servo(9);

  this.repl.inject({
    servo: servo,
  });

  servo.sweep();
});
