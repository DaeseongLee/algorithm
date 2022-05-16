const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().split('\n');


//최대공약수
function getMaxNum(num1, num2) {
    while (num2 !== 0) {
        [num1, num2] = [num2, num1 % num2]
    }
    return num1;
}

//최소공배수
function getMinNum(num1, num2, maxNum) {
    return (num1 * num2) / maxNum;
}

for (let i = 1; i <= +input[0]; i++){
    const [num1, num2] = input[i].split(' ').map(n => +n);
    const maxNum = getMaxNum(num1, num2);
    console.log(getMinNum(num1, num2, maxNum));
}