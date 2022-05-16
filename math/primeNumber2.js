const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().split(' ').map(n => +n);
const [start, end] = input
const arr = new Array(end+1).fill(true);
arr[1] = false

let result = '';
for (let i = 2; i <= arr.length; i++) {
    if (arr[i] === true) {
        for (let j = i + i; j < arr.length; j = j + i) {
            arr[j] = false    
        }
        
        if (i >= start) {
            result += (i + '\n')    
        }
    }
}
console.log(result.trim());
