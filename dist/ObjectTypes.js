"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car = {
    type: "sedan",
    model: "Toyota Camry",
    year: 2020
};
console.log(car);
const nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
