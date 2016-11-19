var express = require('express'),
 listRouter = express.Router(),
 List = require('./list.model');

listRouter.get('/', function(req, res) {
    res.send('Lists!');
});