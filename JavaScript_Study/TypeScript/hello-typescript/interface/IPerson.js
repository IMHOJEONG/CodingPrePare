var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    Person3.prototype.sayHello = function () {
        console.log("Hello " + this.name);
    };
    return Person3;
}());
function greeter(person) {
    person.sayHello();
}
var me = new Person3('Lee');
greeter(me);
//# sourceMappingURL=IPerson.js.map