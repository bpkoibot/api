var mongoose = require('mongoose');

var lotrSchema = new mongoose.Schema({
    name: String,
    type: String,
    role: String,
    specAbility: String
},
    {
        collection: 'lotr'
    });

module.exports = mongoose.model('lotrModel', lotrSchema);