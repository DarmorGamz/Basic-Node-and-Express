require('dotenv').config()
require('body-parser')

var bodyParser = require('body-parser');


var express = require('express');
var app = express();


app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
})
app.use("/public", express.static(__dirname + "/public"));
app.use(function middleware(req, res, next) {
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next();
});
app.get('/:word/echo', function(req, res) {
  res.send({echo: req.params.word});
});
app.get("/name", function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  res.json({
    name: `${firstName} ${lastName}`
  });
});
app.get('/now', function middleware(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.send({time: req.time});
});
app.get('/json', function (req, res) {
  if(process.env.MESSAGE_STYLE == 'uppercase') {
    res.json({"message": "HELLO JSON"})
  } else {
    res.json({"message": "Hello json"})
  }
})




































 module.exports = app;
