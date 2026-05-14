const car: {
    type: string;
    model: string;
    year: number;
} = {
    type: "sedan",
    model: "Toyota Camry",
    year: 2020
};

console.log(car); 

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.