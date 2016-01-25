'use strict';

var host = process.env.PHOTOS_HOST || "http://localhost:8000/photos";
var request = require('request');


/* Get photos from the pub/sub server
 * @param {Function} callback
 */
module.exports.get = function(callback) {
  request(host, function(error, response, data){
    data = JSON.parse(data);
    if(data.error) return callback(error, []);
    callback(null, data.data);
  });
};
