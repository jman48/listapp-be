let express = require('express'),
    itemRouter = express.Router({mergeParams: true}),
    List = require('../list/list.model'),
    Item = require('./item.model').Model;

itemRouter.get('/', (req, res) => {
    List.findById(res.params.listId, (err, list) => {
        if (err) {
            return handleError(err, res);
        }

        res.json(list.items);
    });
});

/**
 * A generic error handler. Will log error and return status 500
 */
function handleError(err, res) {
    console.log(`ERROR: ${err}`);

    //Do not send error message as we do not want to expose any internal working or our application
    res.sendStatus(500);
}

module.exports = itemRouter;