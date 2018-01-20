var express = require('express');
var app = express();
var http = require('http');

var PORT = 3001;

app.get("/", (res, req) => {
    req.send("XD");
});


var server = app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});


