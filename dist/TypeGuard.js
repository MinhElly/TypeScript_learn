"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatValue(value) {
    if (typeof value === 'string') {
        return value.trim().toUpperCase();
    }
    else {
        return value.toFixed(2);
    }
}
const result1 = formatValue('  hello world  ');
console.log(result1); // 'HELLO WORLD'
const result2 = formatValue(3.14159);
console.log(result2); // '3.14'
// ======================================================
class Bird {
    fly() {
        console.log('The bird is flying.');
    }
}
class Fish {
    swim() {
        console.log('The fish is swimming.');
    }
}
function move(animal) {
    if (animal instanceof Bird) {
        animal.fly();
    }
    else if (animal instanceof Fish) {
        animal.swim();
    }
}
const bird = new Bird();
const fish = new Fish();
move(bird); // The bird is flying.
move(fish); // The fish is swimming.
function isCar(vehicle) {
    return vehicle.type === undefined;
}
function displayVehicleInfo(vehicle) {
    console.log(`Make: ${vehicle.make}, Model: ${vehicle.model}, Year: ${vehicle.year}`);
    if (isCar(vehicle)) {
        console.log('This is a car.');
    }
    else {
        console.log('This is a motorcycle.');
    }
}
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
};
const motorcycle = {
    make: 'Harley-Davidson',
    model: 'Street 750',
    year: 2019,
    type: 'cruiser'
};
displayVehicleInfo(car); // Make: Toyota, Model: Corolla, Year: 2020. This is a car.
displayVehicleInfo(motorcycle); // Make: Harley-Davidson, Model: Street 750, Year: 2019. This is a motorcycle.
function area(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
    }
}
const myCircle = { kind: 'circle', radius: 5 };
const mySquare = { kind: 'square', sideLength: 4 };
console.log('Area of Circle:', area(myCircle)); // Area of Circle: 78.53981633974483
console.log('Area of Square:', area(mySquare)); // Area of Square: 16
function makeSoung(animal) {
    if ('bark' in animal) {
        animal.bark();
    }
    else if ('meow' in animal) {
        animal.meow();
    }
}
const dog = {
    bark() {
        console.log('Woof!');
    }
};
const cat = {
    meow() {
        console.log('Meow!');
    }
};
makeSoung(dog); // Woof!
makeSoung(cat); // Meow!
//===================================================
function assertIsString(value) {
    if (typeof value !== 'string') {
        throw new Error('Value is not a string');
    }
}
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}
function processInput(input) {
    assertIsString(input);
    console.log(input.toUpperCase());
}
function processNumber(value) {
    assert(typeof value === 'number', 'Value must be a number');
    return value * 2;
}
try {
    const input = 'cho the dai';
    assertIsString(input);
    console.log(input.toUpperCase());
}
catch (error) {
    console.log('String error: ', error.message);
}
try {
    const x = 21;
    assert(typeof x === 'number', 'Value must be a number');
    console.log(x * 2); // 42
}
catch (e) {
    console.log('number error:', e.message);
}
