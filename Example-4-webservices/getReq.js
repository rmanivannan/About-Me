// install npm express and path node modules
    var http = require('http'),
    express  = require('express'),
    path     = require('path');

//create the application using express node module
var app = express();

//setting the port
app.set('port', process.env.PORT || 3000); 

//setting up the static conten folder
app.use(app.router);
app.use(express.static(path.join(__dirname, 'basetemplate')));

//creating view folder path
app.set('views', __dirname + '/basetemplate');
app.set('view engine', 'ejs');
app.get('/',function(req, res) {
  //respond index.ejs on the request of "http://localhost:3000"
  res.render('index');
});

//listen the post method if the user hits the url of "http://domainname/**postPath**"
app.post("/mani", function(req, res){
  var header = {'Content-Type': 'application/json','charset' :'utf-8','Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Headers':'X-Requested-With'};
  res.writeHead(200, header);
  res.end(JSON.stringify({title:'Webservice Post', text: 'This object has been got from post request'}));
});

//create the server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});