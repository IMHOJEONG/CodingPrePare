// let foo: string = 'hello'; // 변수 foo는 string 타입

// let bar : number = true; // 컴파일 시점에 에러 발생

function multiply1(x: number, y: number): number{
    return x * y;
}

// 함수 표현식
const multiply2 = (x:number, y:number): number => x*y;

console.log(multiply1(10, 2));

console.log(multiply2(10,3));

// console.log(multiply1(true, 1)); // 컴파일 에러

let isDone: boolean = false; // boolean

let n: null = null;

let u: undefined = undefined;

let decimal : number = 6;

let hex : number = 0xf00d;

let binary: number = 0b1010;

let octal: number = 0o744;

let color: string = "blue";

color = 'red';

let myName: string = `Lee`;

let greeting: string = `Hello, my name is ${ myName }.`;

const obj: object = {};

let list1: any[] = [1, 'two', true];

let list2: number[] = [1, 2, 3];

let list3: Array<number> = [1, 2, 3];

let tuple: [string, number];

tuple = ['hello', 10];
// tuple = [10, 'hello'];
// tuple = ['hello', 10, 'world', 100];
// tuple.push(true);

enum Color1 {Red, Green, Blue};
let c1: Color1 = Color1.Green;

console.log(c1);

enum Color2 { Red = 1, Green, Blue};
let c2: Color2 = Color2.Green;

console.log(c2);

enum Color3 { Red =1, Green = 2,Blue =4};
let c3: Color3 = Color3.Blue;

console.log(c3);

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

function warnUser(): void {
    console.log("This is my warning message");
}

function infiniteLoop(): never {
    while (true) {}
}

function error(message: string): never {
    throw new Error(message);
}

let primitiveStr: string; 
primitiveStr = 'hello';
// primitiveStr = new String('hello');

let objectStr: String;
objectStr = 'hello';
objectStr = new String('hello');


const today: Date = new Date();

const elem: HTMLElement = document.getElementById('myId');

class Person{}

const person: Person = new Person();

let foo1: string, bar: number, baz:boolean;

foo1 = "Hello";
bar = 123;
// baz = 'true';

function add (x: number, y: number):number {
    return x+y;
}

console.log(add(10, 10));
// console.log(add('10', '10'));