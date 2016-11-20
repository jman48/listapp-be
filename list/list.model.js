'use strict';

let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Item = require('../item/item.model').Type;

let listSchema = new Schema({
    name: String,
    items: [Item]
});

let List = mongoose.model('List', listSchema);

module.exports = List;