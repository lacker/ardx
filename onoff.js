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

  let onMode = false;

  button.on('down', (value) => {
    if (onMode) {
      console.log('stopping');
      onMode = false;
      servo.stop();
      green.off();
      red.on();
    } else {
      console.log('starting');
      onMode = true;
      green.on();
      red.off();
    }
  });

  let piezoHigh = false;
  let counter = -1;
  this.loop(200, () => {
    counter++;
    let index = counter % 3;
    if (index == 0) {
      piezoHigh = onMode;
    }

    let notes = onMode ? ['c4', 'e4', 'g4'] : ['c3', 'e3', 'g3'];

    piezo.frequency(five.Piezo.Notes[notes[index]], 200);
  });

});
