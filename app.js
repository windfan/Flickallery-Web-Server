'use strict';

var express = require('express');
var app = express();

/*
 * Serve static assets out of public
 */
app.use(express.static('public'));

/* GET root path */
app.get('/', function(request, response){
  response.sendfile('public/index.html');
});

/* Get /photos path */
app.get('/photos', function(request, response){
  let photos = {
    "1" : 'https://c1.staticflickr.com/1/600/23577541545_007c408d75_c.jpg',
    "2" : 'https://c2.staticflickr.com/6/5649/22679451641_e9db431625_c.jpg',
    "3" : 'https://c2.staticflickr.com/6/5667/22112428156_41441e6de5_c.jpg'
  };
  response.json(photos);
});

module.exports = app;
