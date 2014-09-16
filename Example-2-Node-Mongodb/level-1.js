var MongoClient = require('mongodb').MongoClient;
dbURL = 'mongodb://localhost:27017/testDB';

MongoClient.connect(dbURL, function(err, db) {
var collection = db.collection('testTable');
    collection.find().toArray(function(err,data){
      console.log(data);
    });
});