var express     = require('express');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var methodOverride = require('method-override');

var port = process.env.PORT || 8080;
var app = express();

app.use(express.static(__dirname + '/www/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded());

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(morgan('dev'));


// SERVER
app.listen(port);
console.log('http://localhost:' + port);
exports = module.exports = app;
