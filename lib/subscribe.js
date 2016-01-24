'use strict';

var axon = require('axon');
var socket = axon.socket('sub');

socket.connect(3001);

socket.on('error', function(error){
  throw error;
});

module.exports = socket;
