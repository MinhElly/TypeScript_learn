function formatValue(value: string | number): string {
    if(typeof value === 'string'){
        return value.trim().toUpperCase();
    }else{
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

function move(animal: Bird | Fish) {
    if (animal instanceof Bird) {
        animal.fly();
    } else if (animal instanceof Fish) {
        animal.swim();
    }   
}
const bird = new Bird();
const fish = new Fish();
move(bird); // The bird is flying.
move(fish); // The fish is swimming.


//===================================================
interface Car{
    make: string;
    model: string;
    year: number;
}


interface Motorcycle{
    make: string;
    model: string;
    year: number;
    type: "sport" | "cruiser";
}

function isCar(vehicle: Car | Motorcycle): vehicle is Car {
    return (vehicle as Motorcycle).type === undefined;
}

function displayVehicleInfo(vehicle: Car | Motorcycle) {
    console.log(`Make: ${vehicle.make}, Model: ${vehicle.model}, Year: ${vehicle.year}`);
    if (isCar(vehicle)) {
        console.log('This is a car.');
    } else {
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

//===================================================


interface Circle {
    kind: 'circle';
    radius: number;
}

interface Square {
    kind: 'square';
    sideLength: number;
}

type Shape = Circle | Square;

function area(shape: Shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
    }
}

const myCircle: Circle = { kind: 'circle', radius: 5 };
const mySquare: Square = { kind: 'square', sideLength: 4 }; 
console.log('Area of Circle:', area(myCircle)); // Area of Circle: 78.53981633974483
console.log('Area of Square:', area(mySquare)); // Area of Square: 16

//===================================================

interface Dog {
    bark(): void;
}

interface Cat {
    meow(): void;
}

function makeSoung(animal: Dog | Cat) {
    if ('bark' in animal) {
        animal.bark();
    } else if ('meow' in animal) {
        animal.meow();
    }
}
const dog: Dog = {
    bark() {
        console.log('Woof!');
    }   
};

const cat: Cat = {
    meow() {
        console.log('Meow!');
    }
};
makeSoung(dog); // Woof!
makeSoung(cat); // Meow!

//===================================================

function assertIsString(value: unknown): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('Value is not a string');
    }
}   

function assert(condition: unknown, message: string): asserts condition {
    if (!condition) {
        throw new Error(message);
    }
}

function processInput(input: unknown) {
    assertIsString(input);
    console.log(input.toUpperCase());
}

function processNumber(value: unknown): number {  
    assert(typeof value === 'number', 'Value must be a number');
    return value * 2;
}

try {
    const input = 'cho the dai';
    assertIsString(input);
    console.log(input.toUpperCase());
} catch (error) {
    console.log('String error: ', (error as Error).message);
}

try {
  const x = 21;
  assert(typeof x === 'number', 'Value must be a number');
  console.log(x * 2); // 42
} catch (e) {
  console.log('number error:', (e as Error).message);
}