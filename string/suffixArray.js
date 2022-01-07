const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().trim().split('');

const temp = [];
while(input.length > 0) {
    if(temp.length > 0) {
        temp.push(input.pop() + temp[temp.length-1]);
    }else {
        temp.push(input.pop());
    }
}

temp.sort();

let result = '';
for(let i =0; i<temp.length; i++) {
    result += temp[i] + '\n';
}
console.log(result.trim());
