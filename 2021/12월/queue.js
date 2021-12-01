const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().split('\n');


class Queue {
    constructor() {
        this.queue = [];
        this.result = [];
    }

    push(x) {
        this.queue.push(x);
    }

    pop() {
        if(this.isEmpty()) {
            this.result.push(-1);
            return;
        }
        this.result.push(this.queue.shift());
    }

    size() {
        this.result.push(this.queue.length);
    }

    front() {
        if(this.isEmpty()) {
            this.result.push(-1);
            return;
        }
        this.result.push(this.queue[0]);
    }

    back() {
        if(this.isEmpty()) {
            this.result.push(-1);
            return;
        }
        this.result.push( this.queue[this.queue.length-1]);
    }

    empty() {
        this.result.push( this.isEmpty() ? 1 : 0);
    }

    isEmpty() {
        return this.queue.length === 0
    }
}
const queue = new Queue();

for(let i = 1; i<= +input[0]; i++) {
    const [command, value] = input[i].trim().split(' ');
    switch(command) {
        case 'push':
            queue.push(value);
            break;
        case 'pop':
            queue.pop();
            break;
        case 'size':
            queue.size();
            break;
        case 'empty':
            queue.empty();
            break;
        case 'front':
            queue.front();
            break;
        case 'back':
            queue.back();
            break;
        default:
            break;
    }
}

console.log(queue.result.join('\n'));