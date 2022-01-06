const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().split('');

let result = ''
for(let i =0; i<input.length; i++) {
    const index = input[i].charCodeAt(0);
    let calcedIndex = 0;
    if (index === 32) {
        result +=  input[i];
        continue;
    }else if(index >= 65 && index <= 90) {
        if(index + 13 > 90) {
            calcedIndex = index - 13;
        } else {
            calcedIndex = index + 13;
        } 
    } else if(index >= 97 && index <= 122) {
        if(index + 13 > 122) {
            calcedIndex = index - 13;
        } else {
            calcedIndex = index + 13;
        } 
    } else {
        calcedIndex = index;
    }
    result += String.fromCharCode(calcedIndex);
}

console.log(result);