var pv = 'scripts/vendor/';
var pl = 'scripts/libs/';
require(["jquery", pv + "dropdown.js", pv + "prettify.js", pl + 'Noduino.js', pl + 'Noduino.Socket.js', pl + 'Logger.HTML.js'], function($, dd, p, NoduinoObj, Connector, Logger) {
    var Noduino = null;


    function addButton(Button, dir) {
        //walkLED.listButton[Button.pin] = Button;

        Button.on('release', function(e) {
            $('#btn-' + e.pin).removeClass('btn-warning');
        });

        Button.on('push', function(e) {
            /*var newDirection = walkLED.direction;

            switch (e.pin) {
                case '04': newDirection = -1; break;
                case '02': newDirection =  1; break;
            }

            Noduino.log('gui', 'Pushed Button ' + e.pin);
            $('#btn-' + e.pin).addClass('btn-warning');

            if (newDirection != walkLED.direction) {
                startSequence(newDirection, walkLED.interval);
            }*/
        });
    }


    var createObjects = function(board) {

        console.log(Noduino);

        //Noduino.write('99000001'); //toggle debug mode on

        //ABCDEFGHIJ

        //Write is AB = commandID, CD = pin number, EFG = data value to send to command, HIJ = aux

        $('#elevator-up-btn').click(function(e) {
            e.preventDefault();
            Noduino.write('8000016000'); //move elevator up at speed of 128
        });

        $('#elevator-jog-up-btn').click(function(e) {
            e.preventDefault();
            Noduino.write('7800128000'); //job elevator up at speed of 128
        });

        $('#elevator-down-btn').click(function(e) {
            e.preventDefault();
            Noduino.write('81000160000'); //move elevator down at speed of 128
        });

        $('#elevator-jog-down-btn').click(function(e) {
            e.preventDefault();
            Noduino.write('79001280000'); //jog elevator down at speed of 128
        });

        $('#platform-start-btn').click(function(e) {
            e.preventDefault();
            Noduino.write('84002550000'); //rotate platform clockwise full speed
        });

        $('#platform-stop-btn').click(function(e) {
            e.preventDefault();
            Noduino.write('85000000000'); //stop platform
        });

        /*Noduino.write('81000000000'); //move elevator down
         Noduino.write('82000000000'); //hard stop elevator
         Noduino.write('83000000000'); //soft stop elevator
         Noduino.write('84002550000'); //rotate platform clockwise*/

        //board.withButton({}, function(err, Button) { addButton(Button); $('#btn-02').click(function(e) {e.preventDefault(); Button.setOn(); Button.setOff(); }); });

        /*board.withLED({pin: 12}, function(err, LED) { readyLED(LED); });
        board.withLED({pin: 11}, function(err, LED) { readyLED(LED); });
        board.withLED({pin: 10}, function(err, LED) { readyLED(LED); });
        board.withLED({pin:  9}, function(err, LED) { readyLED(LED); });
        board.withLED({pin:  8}, function(err, LED) { readyLED(LED); });
        board.withLED({pin:  7}, function(err, LED) { readyLED(LED); });
        board.withButton({pin:  2}, function(err, Button) { addButton(Button); $('#btn-02').click(function(e) {e.preventDefault(); Button.setOn(); Button.setOff(); }); });
        board.withButton({pin:  4}, function(err, Button) { addButton(Button); $('#btn-04').click(function(e) {e.preventDefault(); Button.setOn(); Button.setOff(); }); });
        board.withAnalogInput({pin:  'A0'}, function(err, AnalogInput) {
            AnalogInput.on('change', function(a) {
                $('#interval-slide').val(a.value);
                $('#interval-value').val(a.value + 'ms');
                walkLED.interval = a.value; startSequence(walkLED.direction, walkLED.interval);
            });
        });*/

    };

    $(document).ready(function(e) {
        $('#connect').click(function(e) {
            e.preventDefault();

            if (!Noduino || !Noduino.connected) {
                Noduino = new NoduinoObj({debug: true, host: 'http://' + location.hostname + ':8090', logger: {container: '#connection-log'}}, Connector, Logger);
                Noduino.connect(function(err, board) {
                    $('#connection-status .alert').addClass('hide');
                    if (err) {
                        $('#connection-status .alert-error').removeClass('hide'); }
                    else {
                        $('#connection-status .alert-success').removeClass('hide'); createObjects(board); }
                });
            }
        });
    });
});