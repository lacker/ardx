'use strict';

let five = require('johnny-five');

let board = new five.Board();

board.on('ready', function() {

  let servo = new five.Servo(9);
  let green = new five.Led(6);
  let red = new five.Led(12);
  let button = new five.Button(2);
  let piezo = new five.Piezo(4);

  this.repl.inject({
    servo: servo,
    green: green,
    red: red,
    button: button,
  });

  console.log(servo);

  let servoMoving = false;

  button.on('down', (value) => {
    if (servoMoving) {
      console.log('stopping');
      servoMoving = false;
      servo.stop();
      green.off();
      red.on();
      piezo.frequency(five.Piezo.Notes["a4"], 200);
    } else {
      console.log('starting');
      servoMoving = true;
      // servo.sweep();
      green.on();
      red.off();
      piezo.frequency(five.Piezo.Notes["a3"], 200);
    }
  });

});
