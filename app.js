let express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    lists = require('./list/list.controller'),
    items = require('./item/item.controller');

mongoose.connect(process.env.DATABASE_URL, (err, database) => {
    if (err) {
        console.log(`ERROR connecting to MongoDB database at ${process.env.DATABASE_URL}.`);
        console.log(`Reported error is: ${err}`);
    } else {
        console.log('Successfully connected to database');
    }
});

//Allow Cross origin requests so we can access our api from any where!
app.use(cors());
app.use(bodyParser.json());

app.use('/lists', lists);
app.use('/lists/:listId/items', items);

app.get('/', function(req, res) {
    res.send('Welcome from List App API');
});

let server = app.listen(process.env.PORT || 8082, function() {
    let host = server.address().address,
        port = server.address().port;

    console.log('Server listening ar http://%s:%s', host, port);
});