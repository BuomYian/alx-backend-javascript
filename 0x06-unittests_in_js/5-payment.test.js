const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment.js');
const Utils = require('./utils.js');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', function () {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(function () {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should log the correct message and be called once with totalAmount 100 and totalShipping 20', function () {
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
  });

  it('should log the correct message and be called once with totalAmount 10 and totalShipping 10', function () {
    sendPaymentRequestToApi(10, 10);

    expect(calculateNumberStub.calledWith('SUM', 10, 10)).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
  });
});
