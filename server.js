var express = require('express');
var app = express();

var server = app.listen(3000, function() {
    console.log('Przyładowa app nasłuchuje na localhost:3000')
})

app.get('/', function (req, res) {
    res.send('Hello world');
})

