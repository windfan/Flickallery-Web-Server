'use strict';

var request = require('supertest');
var app = require('./../app');

describe('GET /', function(){

  it('Returns a 200 status code', function(done){
    request(app)
      .get('/')
      .expect(200, done);
  });

});
