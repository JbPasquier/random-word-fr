'use strict';
var fs = require('fs');
var uniqueRandomArray = require('unique-random-array');
var wordListPath = __dirname + '/words.txt';

module.exports = uniqueRandomArray(fs.readFileSync(wordListPath, 'utf8').split('\n'));
