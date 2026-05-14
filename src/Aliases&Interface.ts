type CarYear = number;
type CarMake = string;
type CarModel = string;
type Car = {
  year: CarYear;
  make: CarMake;
  model: CarModel;
};

const carYear: CarYear = 2020;
const carMake: CarMake = "Toyota";
const carModel: CarModel = "Camry";
const car: Car = {
  year: carYear,
  make: carMake,
  model: carModel,
};

console.log(car);

interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 10,
  width: 5,
};

console.log(rectangle);

interface Animals {
  name: string;
}

interface Animals {
  age: number;
}

const dog: Animals = {
  name: "Buddy",
  age: 3,
};

console.log(dog);


interface ColoredRectangle extends Rectangle {
    color: string;
}

const coloredRectangle: ColoredRectangle = {
    height: 10,
    width: 5,
    color: "red"
};

console.log("Colored Rectangle:", coloredRectangle);