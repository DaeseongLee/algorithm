const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().split(' ').map(a => +a);

const [num1, num2] = input;

function getGCF(a, b) {
    while(b > 0) {
        a = a % b;
        [a, b] = [b, a];
    }
    return a;
}

function getLCM(a, b) {
    return (a * b) / getGCF(a, b);
}

const gcf = getGCF(num1, num2);
const lcm = getLCM(num1, num2);

console.log(gcf);
console.log(lcm);
