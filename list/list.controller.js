let express = require('express'),
 listRouter = express.Router(),
 List = require('./list.model');

listRouter.get('/', (req, res) => {
    res.send('Lists!');
});