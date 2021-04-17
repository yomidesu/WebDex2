const mongoose = require('mongoose');

var Pokemon = mongoose.model('pokemon', {
    natdex_num: {type: Number},
    name: { type: String},
    height: {type: Number},
    weight: {type: Number},
    type: {type: String},
    ability: {type: String},
    dex_entry: {type: String}
}, 'pokemon')

module.exports = { Pokemon };