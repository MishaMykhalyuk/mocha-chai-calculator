const chai = require('chai')
const calculator = require('../index.js')
const expect = chai.expect
const assert = chai.assert

describe('add', function () {
  it('Should add two numbers', function () {
    assert.equal(calculator.add(2, 3), 5)
  })
})

describe('subtract', function () {
  it('Should subtract two numbers', function () {
    assert.equal(calculator.subtract(10, 3), 7)
  })
})

describe('multiplication', function () {
  it('Should multiplication two numbers', function () {
    assert.equal(calculator.multiplication(2, 3), 6)
  })
})

describe('division', function () {
  it('Should division two numbers', function () {
    assert.equal(calculator.division(6, 3), 2)
  })
})

describe('power', function () {
  it('Should power number', function () {
    const powered = calculator.pow(7, 2)

	expect(powered).to.be.a('number')
	expect(powered).to.equal(49)
  })
})
