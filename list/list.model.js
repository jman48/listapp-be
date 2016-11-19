let mongoose = require('mongoose'),
 Schema = mongoose.Schema;

let listSchema = new Schema({
    name: String,
    items: []
});

let List = mongoose.model('List', listSchema);

module.exports = List;