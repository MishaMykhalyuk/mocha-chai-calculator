var assert = require('chai').assert,
	calculator = require('../index.js');

describe("add", function(){
	it('should add two number', function(){
		assert.equal(calculator.add(2, 3), 5);
	})
});

describe("subtract", function(){
	it('should subtract two number', function(){
		assert.equal(calculator.subtract(10, 3), 7);
	})
});

describe("multiplication", function(){
	it('should multiplication two number', function(){
		assert.equal(calculator.multiplication(2, 3), 6);
	})
});

describe("division", function(){
	it('should division two number', function(){
		assert.equal(calculator.division(6, 3), 2);
	})
});
