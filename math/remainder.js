const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().split(' ');

const [A, B, C] = input.map(component => +component);


console.log((A + B) % C);
console.log(((A % C) + (B % C )) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
// (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
// (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?

// 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 
// 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.