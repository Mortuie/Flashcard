var mongoose = require('mongoose');

var StackSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        dropDups: true,
        require: true,
    },
    cards: {
        type: Array,
        required: true,
    },
});

mongoose.model('Stack', StackSchema);

module.exports = mongoose.model('Stack');