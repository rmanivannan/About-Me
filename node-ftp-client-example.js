
var ftpClient = require('ftp-client'),
    config = {
        host: '{abc}.com.my', // Domain name
        //port: 8443,
        user: '{username}',
        password: '{password}'
    },
    options = {
        logging: 'basic'
    },
    client = new ftpClient(config, options);
 
    client.connect(function () {
        client.upload(
          ['./util/**'],            // Local folder inside project
          '/httpdocs/test/pages',   // remote server location of host ({abc}.com.my)
          {
            //baseDir: 'test',
            overwrite: 'older'
          }, function (result) {
            console.log(result);
        });

        client.download(
            '/httpdocs/test/pages', // remote server location of host ({abc}.com.my)
            './util',               // Local folder inside project
            {
              overwrite: 'all'
            }, function (result) {
              console.log(result);
            });
     
    });
