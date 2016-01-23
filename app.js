'use strict';

var express = require('express');
var app = express();

/*
 * Serve static assets out of public
 */
app.use(express.static('public'));

/* GET root path */
app.get('/', function(request, response){
  response.send('Test Done!\n');
});

/* Get /photos path */
app.get('/photos', function(request, response){
  response.json('Photo Path Test Done!');
});

module.exports = app;
