//4보다 큰 모든 짝수는 두홀 수 소수의 합으로 나타낼 수 있다.
const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().split('\n').map(n => +n);
const max = Math.max(...input);



// 소수 구하기
const arr = new Array(max+1).fill(true);
for (let i = 2; i < Math.sqrt(max) + 1; i++) {
    if (arr[i] === true) {
        for (let j = i + i; j < arr.length; j= j + i) {
            arr[j] = false
        }
    }
}
let result = ''
// 2를 제외하고 짝수인 소수는 없다.
for (let i = 0; i < input.length; i++) {   
    const number = input[i]
    for (let j = 3; j < number; j++) {
        if (arr[j] === true) {
            if (arr[number - j] === true) {
                result += `${number} = ${j} + ${number - j} \n`;
                break
            }      
        }

        if (j + 3 > number) {
            result += "Goldbach's conjecture is wrong."
            break
        }
    }
}

console.log(result.trim())

