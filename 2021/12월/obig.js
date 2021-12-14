const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().trim().split('\n');
const n = +input[0];
const stack = [0];
const nums = input[1].split(' ').map(n => +n);

for(let i =1; i<n; i++) {
    while(nums[stack[stack.length-1]] < nums[i]) {
        const target = stack.pop();
        nums[target] = nums[i];
    }
    stack.push(i);
}

for(let i = 0; i<stack.length; i++) {
    nums[stack[i]] = -1;
}

console.log(nums.join(' ').trim());