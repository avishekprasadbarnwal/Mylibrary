const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

//exporting the Schema with the collection name
module.exports = mongoose.model('Author', authorSchema);
