"use strict";
//boolean
Object.defineProperty(exports, "__esModule", { value: true });
let isActive = true;
let hasPermission = false; // TypeScript tự hiểu là boolean
//number
let decimal = 36;
let hex = 0x24; // hexadecimal
let binary = 0b100100; // binary
let octal = 0o44; // octal
let float = 3.14; // Floating-point number
console.log(`Decimal: ${decimal}, Hex: ${hex}, Binary: ${binary}, Octal: ${octal}, Float: ${float}`);
//string
let color = "blue";
let fullName = `John Doe`;
let age = 30;
let sentence = `My name is ${fullName} and I am ${age} years old.`;
console.log(sentence);
//bigint (ES2020+)
const hugeNumber = BigInt("9007199254740991"); // Using BigInt constructor
//symbol
const uniqueKey = Symbol("description");
const obj = {
    [uniqueKey]: "This is a unique property",
};
console.log(obj[uniqueKey]); // Output: This is a unique property
