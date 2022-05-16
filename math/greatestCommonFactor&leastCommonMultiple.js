const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().split(' ').map(a => +a);

const [num1, num2] = input;

//최대공약수
function getMaxNum(num1, num2) {
    let a = num1;
    let b = num2;
    while (b !== 0) {
        [a, b] = [b, a % b]
    }
    return a;
}

//최소공배수
function getMinNum(num1, num2, maxNum) {
    return (num1 * num2) / maxNum;
}

const maxNum = getMaxNum(num1, num2);
const minNum = getMinNum(num1, num2, maxNum);
console.log(maxNum);
console.log(minNum);
