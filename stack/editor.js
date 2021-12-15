const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().split('\n');

// let str  = input[0].trim().split('');
// let cursor = str.length;

// for(let i = 2; i<input.length; i++) {
//     const [command, word] = input[i].trim().split(' ');
//     switch(command) {
//         case 'L':
//             if(cursor > 0) {
//                 cursor--;
//             }
//             break;
//         case 'D':
//             if(cursor < str.length) {
//                 cursor++;
//             }
//             break;
//         case 'B':
//             if(cursor>0) {
//                 str.splice(cursor-1, 1);
//                 cursor--;
//             }
//             break;
//         case 'P':
//             str.splice(cursor, 0, word);
//             cursor++;
//             break;
//         default:
//             break;
//     }
// }
// console.log(str.join('').trim());

const stack1 = input[0].trim().split('');
const stack2 = [];

for(let i = 2; i<input.length; i++) {
    const [command, word] = input[i].trim().split(' ');
    switch(command) {
        case 'L':
            if(stack1.length > 0) {
                stack2.push(stack1.pop());
            }
            break;
        case 'D':
            if(stack2.length > 0) {
                stack1.push(stack2.pop());
            }
            break;
        case 'B':
            if(stack1.length > 0) {
                stack1.pop();
            }
            break;
        case 'P':
            stack1.push(word);
            break;
        default:
            break;
    }
}

console.log([...stack1, ...stack2.reverse()].join(''));