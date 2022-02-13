const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().trim().split('');

const temp = Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
    const index = input[i].charCodeAt() - 97
    if (temp[index] === -1) {
        temp[index] = i;
    }
}

console.log(temp.join(' '));