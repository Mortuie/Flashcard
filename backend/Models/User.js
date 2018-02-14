var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        dropDups: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        dropDups: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');