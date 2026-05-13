"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const names = [];
names.push("Alice", "Bob", "Charlie");
console.log(names);
//readonly array
const names2 = ["Dylan"];
//names2.push("Eve"); // Error: Property 'push' does not exist on type 'readonly string[]'.
//Type Inference
const numbers = [1, 2, 3]; // TypeScript infers this as number[]
numbers.push(4); // This is allowed
console.log(numbers);
console.log(numbers);
let head = numbers[0];
console.log(head);
