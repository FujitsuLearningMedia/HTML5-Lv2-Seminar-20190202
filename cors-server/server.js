var express = require('express');
var http = require('http');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/

app.use('/image', function (req, res) {
  res.sendFile("evilcat.jpg", { root: __dirname });
});

app.use('/', function (req, res) {
  res.status(200).json({ message: "CORS、成功" });
});

var server = http.createServer(app);
server.listen(5000);
