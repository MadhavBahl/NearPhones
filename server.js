const path = require ('path');
var express = require ('express');
const bodyParser = require ('body-parser');
var app = express ();
var http = require ('http').Server (app);
var io = require ('socket.io') (http);

app.use (express.static (__dirname + '/public'));
app.set ('views', __dirname + '/views');
app.set ('view engine', 'html');
const interPort = process.env.PORT || 3000;
app.use (bodyParser());

app.get ('/', (req, res) => {
    res.render ('index.html');
});

// Require the serialport node module
var serialport = require('serialport');
var SerialPort = serialport.SerialPort;
// Open the port
var port = new SerialPort("COM11", {
    baudRate: 9600,
    parser: serialport.parsers.readline("\n")
});
// Read the port data

port.on("open", function () {
    io.on ('connection', (socket) => {
        console.log(`A new user connected ${socket.id}`);


        // socket.emit ('playSongBackend', "PLay Song from backend");

        
        // port.on("open", function () {
            console.log('open');
            port.on('data', function(data) {
                console.log(data[0]);
                console.log (typeof data);
                /* Change from this  line! */
                
                // if (data[0] == "y")  {
                    socket.emit ('serialData', data[0]);
                // }
                
                /* Change from this  line! END */
        
            });
        // });

        socket.emit ('hello', "Hey Yo");


        // socket.emit ('pauseSongBackend', "Song was paused from backend");

        socket.on ('check', (message) => {
            console.log ('Checking connection', message);
        });
    });

});




http.listen (interPort, () => {
    console.log (`Server is up at port ${port}`);
});