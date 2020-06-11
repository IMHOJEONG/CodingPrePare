var FooReadOnly = /** @class */ (function () {
    function FooReadOnly() {
        this.MAX_LEN = 5;
        this.MSG = 'hello';
    }
    FooReadOnly.prototype.log = function () {
        // this.MAX_LEN = 10;
        // this.MSG = 'Hi';
        console.log("MAX_LEN: " + this.MAX_LEN);
        console.log("MSG: " + this.MSG);
    };
    return FooReadOnly;
}());
//# sourceMappingURL=fooReadonly.js.map