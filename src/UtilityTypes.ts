interface Point {
    x: number;
    y: number;
}

let pointPart: Partial<Point> = {};
pointPart.x = 10;
pointPart.y = 20;

console.log(pointPart); // { x: 10, y: 20 }


interface Car {
    make: string;
    model: string;
    mileage ?: number;
}

let myCar: Required<Car> = {
    make: 'Toyota',
    model: 'Corolla',
    mileage: 50000
};

console.log(myCar); // { make: 'Toyota', model: 'Corolla', mileage: 50000 }

const nameAgeMap: Record<string, number> = {
    'Alice': 30,
    'Bob': 25,
    'Charlie': 35
};
console.log(nameAgeMap); // { Alice: 30, Bob: 25, Charlie: 35 }

interface Person {
    name: string;
    age: number;
    location ?: string;
}
const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
};

console.log(bob); // { name: 'Bob' }



type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true;

type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

type PointPrinter = (p: { x: number; y: number; }) => void;
const point2: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};

