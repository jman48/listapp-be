'use strict';

let express = require('express'),
    listRouter = express.Router(),
    List = require('./list.model');

/**
 * Get all lists
 */
listRouter.get('/', (req, res) => {
    List.find({}, (err, lists) => {
        if (err) {
            return handleError(err, res);
        }

        res.json(lists);
    })
});

/**
 * Get a single list by id
 */
listRouter.get('/:id', (req, res) => {
    List.findById(req.params.id, (err, list) => {
        if (err) {
            return handleError(err, res);
        }

        res.json(list);
    })
});

/**
 * Create a single new list
 */
listRouter.post('/', (req, res) => {
    let newList = new List();
    newList.name = req.body.name;

    newList.save((err) => {
        if (err) {
            return handleError(err, res);
        }

        res.sendStatus(201);
    });
});

/**
 * Delete a single list by id
 */
listRouter.delete('/:id', (req, res) => {
    List.findById(req.params.id, (err, list) => {
        if (err) {
            return handleError(err, res);
        }

        list.remove((err) => {
            if (err) {
                return handleError(err, res);
            }

            res.sendStatus(204);
        });
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

module.exports = listRouter;