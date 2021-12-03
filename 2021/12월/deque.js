const fs = require('fs');
const input = fs.readFileSync('../dev/stdin').toString().split('\n');

class Deque {
    constructor() {
        this.deque = [];
        this.result = '';
    }

    push_front(x) {
        this.deque.unshift(x)
        return;
    }

    push_back(x) {
        this.deque.push(x);
        return;
    }
    
    pop_front() {
        if(this.isEmpty()) {
            return this.result += '-1\n';
        }
        return this.result += this.deque.shift() + '\n';
    }

    pop_back() {
        if(this.isEmpty()) {
            return this.result += '-1\n';
        }
        return this.result += this.deque.pop() + '\n';
    }
    size() {
        return this.result += this.deque.length + '\n';
    }

    empty() {
        this.result += this.isEmpty() ? '1' : '0';
        return this.result += '\n';
    }

    front() {
        if(this.isEmpty()) {
            return this.result += '-1\n';
        }
        return this.result += this.deque[0] + '\n';
    }

    back() {
        if(this.isEmpty()) {
            return this.result += '-1\n';
        }
        return this.result += this.deque[this.deque.length - 1] + '\n';
    }

    isEmpty() {
        return this.deque.length === 0;
    }
}

const deque = new Deque();

for(let i = 1; i<=input[0]; i++) {
    const [command, value] = input[i].trim().split(' ');
    switch(command) {
        case 'push_back':
            deque.push_back(value);
            break;
        case 'push_front':
            deque.push_front(value);
            break;
        case 'pop_front':
            deque.pop_front();
            break;
        case 'pop_back':
            deque.pop_back();
            break;
        case 'size':
            deque.size();
            break;
        case 'empty':
            deque.empty();
            break;
        case 'front':
            deque.front();
            break;
        case 'back':
            deque.back();
            break;
        default:
            break;      
    }
}

console.log(deque.result.trim());