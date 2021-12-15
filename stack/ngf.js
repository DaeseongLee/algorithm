const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().trim().split('\n');
const n = input[0];

const seq = input[1].split(' ').map(n => +n);

//1 풀이
// const stack = [];
// const map = new Map();
// for(let i = 0; i< n; i++) {
//     const number =  seq[i];
//     let count = map.get(number);
//     if(!count) {
//         map.set(number, 1);
//     } else {
//         map.set(number, ++count);
//     }
// }

// for(let i = 0; i < n; i++) {
//     if(stack.length > 0 ) {
//         let number = map.get(seq[stack[stack.length-1]]) ;
//         const compareValue = map.get(seq[i]);

//         while ( number < compareValue) {
//             seq[stack.pop()] = seq[i];
//             number = map.get(seq[stack[stack.length-1]]);
//         }
    
//     }
//     stack.push(i);
// }

// while(stack.length > 0) {
//     seq[stack.pop()] = -1;
// }

// console.log(seq.join(' '));


// const countNum = (n, numArr) => {
//     console.log(numArr);
//     const max = numArr.reduce((prev, curr) => {
//         return prev > curr ? prev : curr;
//     })
    
//     let countArr = new Array(max + 1).fill(0);
//     for (let i = 0; i < n; i++) {
//         countArr[numArr[i]]++;
//         console.log(countArr);
//     }    
    
//     return countArr;
// }

// const getNGF = (n, numArr, countArr) => {
//     const stack = [];
//     for (let i = 0; i < n; i++) {
//         while (stack.length && countArr[numArr[stack[stack.length - 1]]] < countArr[numArr[i]]){
//             numArr[stack.pop()] = numArr[i];
//         }            
//         stack.push(i);
//     }
    
//     while(stack.length) {
//         numArr[stack.pop()] = -1;
//     }
    
//     return numArr;
// }



function setCountArrayForEachNum(n, seq) {
    const maxNum = seq.reduce((prev, curr) => prev > curr ? prev:curr);
    const array =  new Array(maxNum+1).fill(0);
    for(let i =0; i<n; i++) {
        array[seq[i]]++;
    };
    return array;
};

function setNGF(n, seq, countArrayForEachNum) {
    const stack = [];
    for(let i=0; i<n; i++) {
        while(stack.length > 0 && countArrayForEachNum[seq[stack[stack.length - 1]]] < countArrayForEachNum[seq[i]]) {
            seq[stack.pop()] = seq[i];
        }
        stack.push(i);
    }

    while(stack.length > 0) {
        seq[stack.pop()] = -1;
    }

    return seq;
}

const countArrayForEachNum = setCountArrayForEachNum(n, seq);
const result = setNGF(n, seq, countArrayForEachNum);

console.log(result.join(' '));