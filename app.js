'use strict';

var express = require('express');
var app = express();

/*
 * Serve static assets out of public
 */
app.use(express.static('public'));

app.get('/', function(request, response){
  response.send('Test Done!\n');
});
app.listen(3000, function(){
  console.log('Listening to port 3000');
});
