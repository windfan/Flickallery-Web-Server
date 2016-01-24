'use strict';

$(function(){
  var socket = io.connect();

  socket.on('photo', function(photo){
    var img = $('<img src="'+photo.url+'">');
    $('.photo-wrapper').prepend(img);
    setTimeout(function(){
      img.addClass('on');
    }, 0);
  });
});