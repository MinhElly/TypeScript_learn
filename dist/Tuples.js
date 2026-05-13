"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ourTuple;
ourTuple = [5, "Hello", true];
ourTuple.push('Something new and wrong'); //
console.log(ourTuple);
const ourReadonlyTuple = [10, false, "World"];
// ourReadonlyTuple.push('This will cause an error'); 
// console.log(ourReadonlyTuple);
const graph = [10.36, 20.29];
console.log(graph);
const graph2 = [38.26, 20.29];
const [x, y] = graph2;
console.log(`x: ${x}, y: ${y}`);
