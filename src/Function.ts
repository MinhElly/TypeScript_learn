function getTime() : number {
    return new Date().getTime();
}

function printHello(): void {
    console.log("Hello, World!");
}

function multiply(a: number, b: number): number {
    return a * b;
}

function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}

console.log("Division result:", divide({ dividend: 10, divisor: 2 }));

function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log("Addition result:", add(1, 2, 3, 4, 5));

type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;
console.log("Negate result:", negateFunction(5));