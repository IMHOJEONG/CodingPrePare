function reverse<T>(items: T[]): T[] {
    return items.reverse();
}

const arg = [1, 2, 3, 4, 5];

const reversed = reverse(arg);

console.log(reversed);

const arg1 = [{name: 'Lee'}, {name: 'Kim'}];

const reversed1 = reverse(arg1);

console.log(reversed1);