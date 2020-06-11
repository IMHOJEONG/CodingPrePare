class FooStatic {
    static instanceCounter = 0;
    constructor(){
        FooStatic.instanceCounter++;
   }
}

var fooStatic1 = new FooStatic();
var fooStatic2 = new FooStatic();

console.log(FooStatic.instanceCounter);
// console.log(fooStatic2.instanceCounter);