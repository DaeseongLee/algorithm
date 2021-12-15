// const fs = require('fs');
// const input = fs.readFileSync('../dev/stdin').toString().split('\n');
// let n = input[0];

// const stack = [];
// let result = '';
// let cnt = 1;
// let k = 1;
// let i = 1;

// while(cnt<=n) {
//     for(let j = k; k<= +input[i]; k++) {  
//         stack.push(k);
//         result += '+\n';
//     }
//     k = +input[i] + 1;
//     while(+input[i] === stack[stack.length-1]) {
//         stack.pop();
//         result += '-\n';
//         i++;
//     }
//     cnt++;
// }
// if(stack.length > 0) {
//     result = 'NO';
// }


// console.log(result.trim());


const pairs = input.slice(1)
const stack = [];
let result = ''

let c = 0
for (let i = 1; i <= n; i++) {
    result += '+\n'
    stack.push(i);

    while (stack.length > 0 && stack[stack.length - 1] === pairs[c]) {
        c++;
        stack.pop();
        result += '-\n'
    }
}
stack.length == 0 ? console.log(result.trim()) : console.log("NO");