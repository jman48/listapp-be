var express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Welcome from List App API');
});

var server = app.listen(process.env.PORT || 8082, function() {
    var host = server.address().address,
        port = server.address().port;

    console.log('Server listining ar http://%s:%s', host, port);
})