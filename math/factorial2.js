//팩토리얼을 구하자
const fs = require('fs');
let input = +fs.readFileSync('../dev/stdin').toString()

let count = 0;
while (input >= 5) {
    count += Math.floor(input / 5)
    input = input / 5
}

console.log(count);

