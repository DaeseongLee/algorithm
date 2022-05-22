//팩토리얼을 구하자
const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().split(' ').map(n => +n);

const [num1, num2] = input;
const five = getFiveCount(num1) - (getFiveCount(num2) + getFiveCount(num1 - num2))
const second = getSecondCount(num1) - (getSecondCount(num2) + getSecondCount(num1-num2))


console.log(Math.min(five,second))

function getFiveCount(number) {
    let count = 0;
    for (let i = 5; i <= number; i= i * 5) {
        count += Math.floor(number / i)
    }
    return count 
}

function getSecondCount(number) {
    let count = 0;
    for (let i = 2; i <= number; i= i * 2) {
        count += Math.floor(number / i)
    }
    return count 
}




