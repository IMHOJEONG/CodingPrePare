var MallardDuck = /** @class */ (function () {
    function MallardDuck() {
    }
    MallardDuck.prototype.quack = function () {
        console.log('Quack!');
    };
    return MallardDuck;
}());
var RedheadDuck = /** @class */ (function () {
    function RedheadDuck() {
    }
    RedheadDuck.prototype.quack = function () {
        console.log('q~uack!');
    };
    return RedheadDuck;
}());
function makeNoise(duck) {
    duck.quack();
}
makeNoise(new MallardDuck());
makeNoise(new RedheadDuck());
function sayHello(person) {
    console.log("Hello " + person.name);
}
var me2 = { name: 'Lee', age: 18 };
sayHello(me2);
//# sourceMappingURL=IDuck.js.map