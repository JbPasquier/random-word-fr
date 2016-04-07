'use strict';
var assert = require('assert');
var randomWordFR = require('./');

it('should return a random word', function () {
	assert(randomWordFR().length > 1);
});
