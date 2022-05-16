//팩토리얼을 구하자
const fs = require('fs');
let input = +fs.readFileSync('../dev/stdin').toString()

let result = 1;
while (input > 0) {
    result *= (input--)
}
console.log(result);