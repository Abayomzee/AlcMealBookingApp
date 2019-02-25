const expect = require('chai').expect;
const request = require('request');
import nyc from 'nyc';

it('Main page content', function(done) {
    request('http://localhost:9001' , function(error, response, body) {
        expect(body).to.equal('the api is working fine now');
        done();
    });
});

// it('Main page status', function(done) {
//     request('http://localhost:9001/api/v1/meals' , function(error, response, body) {
//         expect(response.statusCode).to.equal(200);
//         done();
//     });
// });

// it('Main page status', function(done) {
//     request('http://localhost:9001/api/v1/meals/4' , function(error, response, body) {
//         expect(response.statusCode).to.equal(200);
//         done();
//     });
// });