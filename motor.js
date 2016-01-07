'use strict';

let five = require('johnny-five');

let board = new five.Board();

board.on('ready', function() {

  let motor = new five.Motor({pin: 9});
  motor.start();
  console.log('started motor. type motor.stop() to stop it');

  this.repl.inject({
    motor: motor,
  });
});
