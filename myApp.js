
var express = require('express');
var app = express();
app.get('/api/timestamp/:date_string', function (req, res) {
  theDate = new Date(req.params.date_string);
  if(isNaN(theDate))
    {res.json({"error":"Invalid Date"})}
  else {
    var miliseconds = theDate.getTime();
    var utcString = theDate.toUTCString();
    res.json({"unix":miliseconds,"utc":utcString})
       }})
//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
