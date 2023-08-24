const request = require('request-promise-native');
const expect = require('chai').expect;

describe('Index page', function () {
  const url = 'http://localhost:7865';

  it('should have correct status code', async function () {
    const response = await request.get(url);
    expect(response.statusCode).to.equal(200);
  });

  it('should have correct result', async function () {
    const response = await request.get(url);
    expect(response).to.equal('Welcome to the payment system');
  });
});
