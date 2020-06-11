class Foo2{
    constructor(public x:string) {}
}

const foo2 = new Foo2('Hello');
console.log(foo2);
console.log(foo.x);

class Bar2 {
    constructor(private x:string){}
}

const bar2 = new Bar2('Hello');

console.log(bar2);

// console.log(bar2.x);

class Foo3 {
    constructor(x:string){
        console.log(x);
    }
}

const foo3 = new Foo3('Hello');
console.log(foo3);