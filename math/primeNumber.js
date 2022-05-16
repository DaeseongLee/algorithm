const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().split('\n');

let count = 0;
const inputs = input[1].split(' ');
for (let i = 0; i < inputs.length; i++) {
    count += (checkPrimeNumber(+inputs[i]) ? 1:0)
}

//소수: 1보다 큰 자연수 중 1과 자기 자신만을 약수로 가지는 수
function checkPrimeNumber(n) {
    if (n > 1) {
        for (let i = 2; i < n; i++) {
            if ( (n % i) === 0) {
                return false
            }
        }
        return true        
    }
    return false
}

console.log(count)