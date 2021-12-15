const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().trim();

let result = '';
let temp = '';
for(let i = 0; i<input.length; i++) {
    if(input[i] === '<') {
        while(true) {
            word = input[i]
            result += word;
            if(word === '>') {
                break;
            }
            i++;
        }
    } else { 
        temp = '';
        while(true) {
            if(i > input.length-1 || input[i] === '<') {
                result += setReverse(temp);  
                i--;
                break;
            }
            temp += input[i];
            i++;
        }
    }
}

function setReverse(word) {
    const w =  word.split(' ');
    let reverseStr = '';
    for(let i = 0; i<w.length; i++) {
        reverseStr += w[i].split('').reverse().join('') +' ';
    }
    return reverseStr.trim();
}
console.log(result.trim());