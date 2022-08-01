const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().trim().split('\n')

for (let i = 1; i <= input[0]; i++) {
    const nums = input[i].split(' ')
    for (let j = 1; j <= nums[0]; j++) {
        console.log(nums[j])
    }
}