// Require the serialport node module
var serialport = require('serialport');
var SerialPort = serialport.SerialPort;
// Open the port
var port = new SerialPort("COM3", {
    baudRate: 9600,
    parser: serialport.parsers.readline("\n")
});

// Read the port data
port.on("open", function () {
    console.log('open');
    port.on('data', function(data) {
        console.log(data);
    });
});