'use strict';

let express = require('express'),
    itemRouter = express.Router({mergeParams: true}),
    List = require('../list/list.model'),
    Item = require('./item.model').Model;

/**
 * Get all items for a list
 */
itemRouter.get('/', (req, res) => {
    List.findById(req.params.listId, (err, list) => {
        if (err) {
            return handleError(err, res);
        }

        res.json(list.items);
    });
});

/**
 * Add a new item to a list
 */
itemRouter.post('/', (req, res) => {
    List.findById(req.params.listId, (err, list) => {
        if (err) {
            return handleError(err, res);
        }

        let item = new Item();
        item.name = req.body.name;
        list.items.push(item);

        list.save((err) => {
            if (err) {
                return handleError(err, res);
            }

            //Item created and added to list successfully
            res.sendStatus(201);
        });
    });
});

/**
 * Delete a single item from a list by the items id
 */
itemRouter.delete('/:itemId', (req, res) => {
    List.findByIdAndUpdate(req.params.listId,
        //Use native mongoDB $pull method to delete from nested document
        {
            $pull: {
                items: {_id: req.params.itemId}
            }
        },
        (err) => {
            if (err) {
                return handleError(err, res);
            }

            res.sendStatus(204);
        });
});

/**
 * A generic error handler. Will log error and return status 500
 */
function handleError(err, res) {
    console.log(`ERROR: ${err}`);

    //Do not send error message as we do not want to expose any internal working of our application
    res.sendStatus(500);
}

module.exports = itemRouter;