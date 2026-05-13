// Explicit Type Annotations in TypeScript

//Basic Explicit Type Annotations

let greeting: string = "Hello, TypeScript!"; // string

let userCount: number = 42; // number

let isLoading: boolean = true; // boolean
    
let scores: number[] = [95, 88, 76]; // array of numbers

console.log(greeting);
console.log(`User Count: ${userCount}`);
console.log(`Is Loading: ${isLoading}`);
console.log(`Scores: ${scores.join(", ")}`);


//Hàm có tham số và kiểu trả về rõ ràng

function greet(name: string): string {
  return `Hello, ${name}!`;
}

greet("Alice");
// greet(123); //lỗi

console.log(greet("Bob"));


//Các Inference Types Cơ Bản

let username = "Alice";
console.log(`Username: ${username}`); // TypeScript tự hiểu là string

let score = 100;
console.log(`Score: ${score}`); // TypeScript tự hiểu là number

let flags = [true, false, true];
console.log(`Flags: ${flags.join(", ")}`); // TypeScript tự hiểu là boolean[]

function add(a: number, b: number) {
  return a + b; // TypeScript tự hiểu là number
}
console.log(`Addition: ${add(5, 10)}`);

//Suy luận theo đối tượng
const user = {
    name: "Alice",
    age: 30,
    isAdmin: true,
};

console.log(user.name); // TypeScript tự hiểu là string
// console.log(user.email); //Error. Vì thuộc tính email k tồn tại -> output: undefined

