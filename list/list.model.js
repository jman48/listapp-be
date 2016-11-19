var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listSchema = new Schema({
    name: String,
    items: []
});

var List = mongoose.model('List', listSchema);

module.exports = List;