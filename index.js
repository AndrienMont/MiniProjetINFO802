var app = require('express')();
var http = require('http').Server(app);
var soap = require('soap');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});


const url = 'http://127.0.0.1:8000/?wsdl';
soap.createClient(url, function (err, client) {
    if (err) {
        console.error(err);
    } else {
        // Call the 'tripTime' method on the SOAP service
        client.tripTime({ distance: 100, vitesse: 50, points: 2 }, function (err, result) {
            if (err) {
                console.error(err);
            } else {
                console.log(result);
            }
        });
    }
});