let express = require('express'),
 listRouter = express.Router(),
 List = require('./list.model');

/**
 * Get a single list by id
 */
listRouter.get('/:id', (req, res) => {
    List.findById(req.params.id, (err, list) => {
        if (!err) {
            res.json(list);
        } else {
            handleError(err, res);
        }
    })
});

/**
 * A generic error handler. Will log error and return status 500
 */
function handleError(err, res) {
    console.log(`ERROR: ${err}`);
    res.sendStatus(500);
}