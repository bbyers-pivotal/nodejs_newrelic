// web.js
var newrelic = require("newrelic");
var express = require("express");
var app = express();

app.use(express.static('public'))

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
