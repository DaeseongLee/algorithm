const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().split(' ');

const first = input[0].concat(input[1]);
const second = input[2].concat(input[3]);

console.log(+first + +second);