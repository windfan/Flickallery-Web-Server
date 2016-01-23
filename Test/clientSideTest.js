'use strict';

var request = require('supertest');
var app = require('./../app');

/* GET root path  */
describe('GET /', function(){
  /*Check for 200 status code */
  it('Returns a 200 status code', function(done){
    request(app)
      .get('/')
      .expect(200, done);
  });

});

/* GET /photos path */
describe('GET /photos', function(){
  /* Check for 200 status code*/
  it('Returns a 200 status code', function(done){
    request(app)
      .get('/photos')
      .expect(200, done);
  });

  /* Check for json format */
  it('Returns a JSON format', function(done){
    request(app)
      .get('/photos')
      .expect('Content-Type', /json/, done);
  });
});
