'use strict';

$(function(){
  var socket = io.connect();

  socket.on('photo', function(photo){
    $('.photo').remove();
    var img = $('<img class="photo" src="'+photo.photo_id+'">');
    $('.photo-wrapper').prepend(img);
    setTimeout(function(){
      img.addClass('on');
    }, 0);
  });
});
