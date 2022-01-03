const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().trim().split('');
const count = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
    count[input[i].charCodeAt()-97] ++;
}

console.log(count.join(' '));