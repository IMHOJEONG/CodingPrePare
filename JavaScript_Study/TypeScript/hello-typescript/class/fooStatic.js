var FooStatic = /** @class */ (function () {
    function FooStatic() {
        FooStatic.instanceCounter++;
    }
    FooStatic.instanceCounter = 0;
    return FooStatic;
}());
var fooStatic1 = new FooStatic();
var fooStatic2 = new FooStatic();
console.log(FooStatic.instanceCounter);
// console.log(fooStatic2.instanceCounter);
//# sourceMappingURL=fooStatic.js.map