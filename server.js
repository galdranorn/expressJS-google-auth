var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var stringifyFile;

app.use(bodyParser.json());
app.use('/', function (req, res, next) {
    fs.readFile('./test.json', 'utf8', function(err, data) {
        if (err) throw err;
        stringifyFile = data
        next();
    })
})

app.get('/getNote', function (req, res) {
    res.send(stringifyFile);
});

app.post('/updateNote/:note', function (req, res) {
    fs.writeFile ('./test.json', stringifyFile, function(err) {
        if (err) throw err;
        stringifyFile += req.params.note;
        console.log('file updated with ' + req.params.note);
    })
});

app.listen(3000);