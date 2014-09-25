// install npm express and path node modules
    var http = require('http'),
    express  = require('express'),
    path     = require('path');


//create the application using express node module
var app = express();

//setting the port
app.set('port', process.env.PORT || 3000); 


//Service for get method
//listen the get method if the user hits the url of "http://domainname/**getPath**"
app.get('/testGetMethodUrl', function (req, res) {
  //the string will be send as the response of the get request
  res.send('<html><body><h1>Page name ***testGetMethodUrl***</h1><script src="http://localhost/ims-test/js/libs/jquery/jquery-min.js"></script></body></html>');
});
//Service for post method

//listen the post method if the user hits the url of "http://domainname/**postPath**"
app.post("/mani", function(req, res){
  var header = {'Content-Type': 'application/json','charset' :'utf-8','Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Headers':'X-Requested-With'};
  res.writeHead(200, header);
  res.end(JSON.stringify({title:'Webservice Post', text: 'This object has been got from post request'}));
});

app.set('views', __dirname + '/basetemplate');
app.set('view engine', 'ejs');

app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

app.use(express.cookieParser('mbridge-vdc'));
app.use(express.session({
  secret: 'mbridge-vdc',
  cookie: { maxAge: 1 * 7 * 24 * 60 * 60 * 1000 } // 1 weeks}
  //cookie: { maxAge: 2 * 60 * 60 * 1000 } // 2 hour}
}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'basetemplate')));
app.use(express.errorHandler());


app.get('/',function(req, res) {
  res.render('index', 
    {
      is_secure  : 'http',
      server_url : 'http'+'://' + req.header('host')
    });
});


//create the server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));

  
});