'use strict';

let five = require('johnny-five');

let board = new five.Board();

board.on('ready', function() {

  let servo = new five.Servo(9);
  let led = new five.Led(6);
  let button = new five.Button(2);

  this.repl.inject({
    servo: servo,
    led: led,
    button: button,
  });

  console.log(servo);

  let servoMoving = false;

  button.on('down', (value) => {
    if (servoMoving) {
      console.log('stopping');
      servoMoving = false;
      servo.stop();
      led.off();
    } else {
      console.log('starting');
      servoMoving = true;
      servo.sweep();
      led.on();
    }
  });

});
