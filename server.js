var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
    res.render('main');
});

app.get('/main', function(req, res){
    res.render('main');
});

app.get('/log-in', function(req, res){
    res.render('log-in');
});

app.get('/logged', function(req, res){
    res.render('logged');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).render('error')
});