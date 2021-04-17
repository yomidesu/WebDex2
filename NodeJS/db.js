const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pokemon', (err) => {
    if (!err)
        console.log('Succesfully connected, Professor!');
    else
        console.log('Error in connecting to DB : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;