interface IPerson{
    name: string;
    sayHello(): void;
}

class Person3 implements IPerson{
    constructor(public name: string) {}

    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}

function greeter(person: IPerson): void {
    person.sayHello();
}

const me = new Person3('Lee');
greeter(me);
