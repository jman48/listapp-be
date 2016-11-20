'use strict';

let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let itemSchema = new Schema({
    name: String
});

let Item = mongoose.model('Item', itemSchema);

module.exports = {
    Model: Item,
    Type: itemSchema
};