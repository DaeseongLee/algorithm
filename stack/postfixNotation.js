const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().trim().split('');

const stack = [];
let result = '';
for (let i = 0; i < input.length; i++) {
    const str = input[i];
    switch (str) {
        case '(':
            stack.push('(');
            break;
        case ')':
            while (stack[stack.length - 1] !== '(') {
                result += stack.pop();
            }
            stack.pop();
            break;
        case '*':
        case '/':
            while (stack.length > 0 && (stack[stack.length - 1] === '*' || stack[stack.length - 1] === '/')) {
                result += stack.pop();
            }
            stack.push(str);
            break;
        case '+':
        case '-':
            while(stack.length > 0 && stack[stack.length - 1] !== '(') {
                result += stack.pop();
            }
            stack.push(str);
            break;
        default:
            result += str;
            break;
        }
}

while (stack.length > 0) {
    result += stack.pop();
}
console.log(result);