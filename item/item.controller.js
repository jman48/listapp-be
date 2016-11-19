let express = require('express'),
    itemRouter = express.Router({mergeParams: true}),
    List = require('../list/list.model'),
    Item = require('./item.model').Model;

itemRouter.get('/', (req, res) => {
    res.send('Items!');
});

module.exports = itemRouter;