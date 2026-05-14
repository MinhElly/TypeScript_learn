"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Polygon {
    toString() {
        return 'Polygon[area${this.getArea()}]';
    }
}
class Rectangle extends Polygon {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(3, 6);
console.log('Area', rectangle.getArea());
