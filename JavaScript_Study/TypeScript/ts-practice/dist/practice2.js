"use strict";
var Circle = /** @class */ (function () {
    //   radius: number;
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    //   width: number;
    //   height: number;
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
var circle = new Circle(5);
var rectangle = new Rectangle(10, 5);
console.log(circle.radius);
// console.log(rectangle.width);
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
