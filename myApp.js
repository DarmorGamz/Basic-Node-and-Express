require('dotenv').config()

var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
})

app.use("/public", express.static(__dirname + "/public"));
app.use(function middleware(req, res, next) {
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next();
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
