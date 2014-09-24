var express = require('express');


var app = express();

var http = require('http');

app.set('port', 4000);


http.createServer(app).listen(app.get('port'), function(req, res){
  console.log('Express server listening on port ' + app.get('port'));

  app.post("/", function(req, res){
    console.log("req body :  " + req.body);
    //req.setTimeout(60 * 60 * 1000);
    //processRequest(req.body, req, res);
    console.log('got the req')
  });
});
