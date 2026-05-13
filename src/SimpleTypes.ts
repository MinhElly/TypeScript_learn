//boolean

let isActive: boolean = true;
let hasPermission = false; // TypeScript tự hiểu là boolean

//number

let decimal: number = 36;
let hex: number = 0x24; // hexadecimal
let binary: number = 0b100100; // binary
let octal: number = 0o44; // octal
let float: number = 3.14; // Floating-point number

console.log(
  `Decimal: ${decimal}, Hex: ${hex}, Binary: ${binary}, Octal: ${octal}, Float: ${float}`,
);

//string
let color: string = "blue";
let fullName: string = `John Doe`;
let age: number = 30;
let sentence: string = `My name is ${fullName} and I am ${age} years old.`;

console.log(sentence);

//bigint (ES2020+)

const hugeNumber = BigInt("9007199254740991"); // Using BigInt constructor

//symbol
const uniqueKey: symbol = Symbol("description");
const obj = {
  [uniqueKey]: "This is a unique property",
};
console.log(obj[uniqueKey]); // Output: This is a unique property
