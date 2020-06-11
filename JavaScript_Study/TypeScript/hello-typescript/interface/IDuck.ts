interface IDuck {
    quack():void;
}

class MallardDuck implements IDuck {
    quack(){
        console.log('Quack!');
    }
}

class RedheadDuck {
    quack() {
        console.log('q~uack!');
    }
}

function makeNoise(duck: IDuck): void{
    duck.quack();
}

makeNoise(new MallardDuck());
makeNoise(new RedheadDuck());

interface IPerson2 {
    name: string;
}

function sayHello(person: IPerson2): void{
    console.log(`Hello ${person.name}`);
}

const me2 = { name: 'Lee', age: 18};
sayHello(me2);