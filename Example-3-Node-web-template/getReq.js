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

//create the server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});