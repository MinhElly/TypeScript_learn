"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person = new Person("Alice");
console.log(person.getName());
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea());
class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
    getArea() {
        return super.getArea();
    }
}
const square = new Square(4);
console.log(square.getArea());
