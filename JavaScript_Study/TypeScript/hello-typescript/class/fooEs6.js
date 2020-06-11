class FooEs6 {
    constructor(prop) {
        this.prop = prop;
    }

    static staticMethod() {
        return 'staticMethod';
    }

    prototypeMethod() {
        return this.prop;
    }
}

console.log(FooEs6.staticMethod());

const fooEs6 = new FooEs6(123);

// console.log(fooEs6.staticMethod());