// install npm express and path
var http = require('http'),
    express = require('express'),
    path = require('path');
 
//create the application using express node module
var app = express();
app.set('port', process.env.PORT || 3000); 
app.use(express.static(path.join(__dirname, 'public')));
 
//listen the get method if the user hits the url of "http://domainname/**getPath**"
app.get('/testGetMethodUrl', function (req, res) {
  //the string will be send as the response of the get request
  res.send('<html><body><h1>Page name ***testGetMethodUrl***</h1></body></html>');
});


//create the server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));

  app.post("/", function(req, res){
    var header = {'Content-Type': 'application/json','charset' :'utf-8','Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Headers':'X-Requested-With'};
    res.writeHead(200, header);
    res.end(JSON.stringify({jsonrpc : "2.0", method : "",params : {errorcode : 1}}));
  });
  
});