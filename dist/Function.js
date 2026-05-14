"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTime() {
    return new Date().getTime();
}
function printHello() {
    console.log("Hello, World!");
}
function multiply(a, b) {
    return a * b;
}
function pow(value, exponent = 10) {
    return value ** exponent;
}
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
console.log("Division result:", divide({ dividend: 10, divisor: 2 }));
function add(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log("Addition result:", add(1, 2, 3, 4, 5));
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction = (value) => value * -1;
console.log("Negate result:", negateFunction(5));
