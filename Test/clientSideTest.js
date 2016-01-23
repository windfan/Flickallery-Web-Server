'use strict';

var request = require('supertest');
var app = require('./../app');

/* GET root path  */
describe('GET /', function(){

  /* Check for 200 status code */
  it('Returns a 200 status code', function(done){
    request(app)
      .get('/')
      .expect(200, done);
  });

  /* Check for HTML format */
  it('Returns HTML format', function(done){
    request(app)
      .get('/')
      .expect('Content-Type', /html/, done);
  });

  // /* Check for index file with photos */
  // it('Returns an index.html', function(done){
  //   request(app)
  //     .get('/')
  //     .expect(/photos/i, done);
  // });
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

  /* Check for return contents */
  it('Returns an object of photo URLs', function(done){
    request(app)
      .get('/photos')
      .expect(JSON.stringify({
        "1": 'https://c1.staticflickr.com/1/600/23577541545_007c408d75_c.jpg',
        "2": 'https://c2.staticflickr.com/6/5649/22679451641_e9db431625_c.jpg',
        "3": 'https://c2.staticflickr.com/6/5667/22112428156_41441e6de5_c.jpg'
      }), done);
  });
});
