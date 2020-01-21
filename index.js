'use strict'

const fs = require('fs');
const util = require('util')

const reader = require('./lib/edit-file.js');
let file = `${__dirname}/data/person.json`;



// callback methode
// fs.readFile(file, (err, data) => {
//     if (err) { throw err; }
//     console.log('Callback', data);
//   });
  