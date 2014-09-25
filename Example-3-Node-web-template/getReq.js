// install npm express and path node modules
    var http = require('http'),
    express  = require('express'),
    path     = require('path');

//create the application using express node module
var app = express();

//setting the port
app.set('port', process.env.PORT || 3000); 

//
app.set('views', __dirname + '/basetemplate');
app.set('view engine', 'ejs');

//setting up the static conten folder
app.use(app.router);
app.use(express.static(path.join(__dirname, 'basetemplate')));

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