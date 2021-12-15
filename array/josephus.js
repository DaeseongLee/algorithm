//풀이 1
const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().split(' ');
const [N, K] = input;
const josephus = [];

for(let i = 1; i<= N; i++) {
    josephus.push(i);
}

const result = []
let i = 1;
let j = 1;
while(josephus.length > 0) {
    if(i === K * j) {
        result.push(josephus.shift());
        j++;
    } else {
        josephus.push(josephus.shift());
    }
    i++;
}

console.log('<' + result.join(', ') + '>');


//풀이2
// const stdin = require('fs').readFileSync('/dev/stdin').toString();
// const [N, K] = stdin.split(' ').map(Number);

// const people = Array(N).fill(1).map((x, i) => x + i);
// let idx = K - 1;
// const answer = [];
// while (people.length) {
//   answer.push(people.splice(idx, 1));
//   idx += K - 1;
//   idx %= people.length;
// }

// console.log(`<${answer.join(', ')}>`);