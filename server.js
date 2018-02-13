if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI);
var db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('DB Connected'));

var PORT = process.env.PORT;
var Authcontroller = require('./backend/authentication/Authcontroller');

app.use('/api/auth', Authcontroller);




var server = app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});


