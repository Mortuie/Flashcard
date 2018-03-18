if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI);
var db = mongoose.connection;
var path = require('path');
var PORT = process.env.PORT;


db.on('error', (err) => {
    console.log(err);
    process.exit();
});

db.once('open', () => console.log('DB Connected'));

var Authcontroller = require('./backend/authentication/Authcontroller');
var StackController = require('./backend/Routes/StackController');

app.use(express.static(path.resolve(__dirname, 'frontend', 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

app.use('/api/auth', Authcontroller);
app.use('/api/stack', StackController);



var server = app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});


