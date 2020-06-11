// let foo: string = 'hello'; // 변수 foo는 string 타입
// let bar : number = true; // 컴파일 시점에 에러 발생
function multiply1(x, y) {
    return x * y;
}
// 함수 표현식
var multiply2 = function (x, y) { return x * y; };
console.log(multiply1(10, 2));
console.log(multiply2(10, 3));
// console.log(multiply1(true, 1)); // 컴파일 에러
var isDone = false; // boolean
var n = null;
var u = undefined;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var color = "blue";
color = 'red';
var myName = "Lee";
var greeting = "Hello, my name is " + myName + ".";
var obj = {};
var list1 = [1, 'two', true];
var list2 = [1, 2, 3];
var list3 = [1, 2, 3];
var tuple;
tuple = ['hello', 10];
// tuple = [10, 'hello'];
// tuple = ['hello', 10, 'world', 100];
// tuple.push(true);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
;
var c1 = Color1.Green;
console.log(c1);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
var c2 = Color2.Green;
console.log(c2);
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
;
var c3 = Color3.Blue;
console.log(c3);
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
function warnUser() {
    console.log("This is my warning message");
}
function infiniteLoop() {
    while (true) { }
}
function error(message) {
    throw new Error(message);
}
var primitiveStr;
primitiveStr = 'hello';
// primitiveStr = new String('hello');
var objectStr;
objectStr = 'hello';
objectStr = new String('hello');
var today = new Date();
var elem = document.getElementById('myId');
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
var foo1, bar, baz;
foo1 = "Hello";
bar = 123;
// baz = 'true';
function add(x, y) {
    return x + y;
}
console.log(add(10, 10));
// console.log(add('10', '10'));
//# sourceMappingURL=app.js.map