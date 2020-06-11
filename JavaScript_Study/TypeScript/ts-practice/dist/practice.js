"use strict";
var count = 0;
count += 1;
// count = '갑자기 문자열';
var message = "hello world";
var done = true;
var numbers = [1, 2, 3];
var messages = ["hello", "world"];
// messages.push(1);
var mightBeUndefined = undefined;
var nullableNumber = null;
var color = "red";
color = "yellow";
// color = 'green';
function sum(x, y) {
    return x + y;
}
sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
function returnNothing() {
    console.log("I am just saying hello world");
}
