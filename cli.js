#!/usr/bin/env node
'use strict';
var meow = require('meow');
var randomWordFR = require('./');

meow([
	'Exemple',
	'  $ random-word-fr',
	'  montagne'
]);

console.log(randomWordFR());
