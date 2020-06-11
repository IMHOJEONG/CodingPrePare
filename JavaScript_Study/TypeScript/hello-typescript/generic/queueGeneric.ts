class Queue1<T> {
    protected data: Array<T> = [];
    push(item: T) {
        this.data.push(item);
    }

    pop(): T {
        return this.data.shift();
    }
}

const numberQueue1 = new Queue1<number>();

numberQueue1.push(0);
numberQueue1.push(+'1');

console.log(numberQueue1.pop().toFixed());
console.log(numberQueue1.pop().toFixed());

const stringQueue = new Queue1<string>();

stringQueue.push('Hello');
stringQueue.push('World');

console.log(stringQueue.pop().toUpperCase());
console.log(stringQueue.pop().toUpperCase());

const myQueue = new Queue1<{name:string, age: number}>();
myQueue.push({name: 'Lee', age: 10});
myQueue.push({name: 'Kim', age: 20});

console.log(myQueue.pop());
console.log(myQueue.pop());