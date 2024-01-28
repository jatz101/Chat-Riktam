const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Authentication APIs', () => {
  it('should login user', (done) => {
    // Implement test case
  });

  it('should logout user', (done) => {
    // Implement test case
  });
});