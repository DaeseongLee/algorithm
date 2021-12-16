const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().trim().split('\n');

const n = +input[0];
const postfixNotation = input[1];
const alpha = new Array(26).fill(0);

for(let i = 0; i<n; i++) {
    alpha[i] = +input[2+i].trim();
}

function getResult(postfixNotation, alpha) {
    const stack = [];
    for(let i = 0; i<postfixNotation.length; i++) {
        const notation = postfixNotation[i]
        const ascNum = notation.charCodeAt(0);

        //연산자와 피연산자를 구분하는 방법은 ascii 코드를 통해서 구분한다
        if( (ascNum >= 65 && ascNum <=90) ) {
                stack.push(alpha[ascNum - 65]);
        } else { 
            if(stack.length > 1) {
                const num2 = stack.pop();
                const num1 = stack.pop();
                stack.push(calc(notation, num1, num2));
            }
        }
    }
    
    return stack[0].toFixed(2);
}

function calc(command, num1, num2) {
    switch(command) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            break;
    }

}

const result = getResult(postfixNotation, alpha);
console.log(result);