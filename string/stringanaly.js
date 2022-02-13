const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().split('\n');

let result = '';
for (let i = 0; i < input.length; i++) {
    const str = input[i];
    if (str === '') continue;
    // 소문자, 대문자, 숫자, 공백
    const temp = [0, 0, 0, 0];
    for (let j = 0; j < str.length; j++) {
        if (str[j] >= 'a' && str[j] <= 'z') {
            temp[0]++;
        } else if (str[j] >= 'A' && str[j] <= 'Z') {
            temp[1]++;
        } else if (str[j] >= '0' && str[j] <= '9') {
            temp[2]++;
        } else if (str[j] === ' ') {
            temp[3]++;
        } 
    }
    result += temp.join(' ') + '\n';
}

console.log(result.trim());