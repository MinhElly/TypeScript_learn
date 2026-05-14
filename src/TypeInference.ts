// TypeScript infers these variable types
let personName = "Alice";      // inferred as string
let age = 30;                  // inferred as number
let isActive = true;           // inferred as boolean
let numbers = [1, 2, 3];       // inferred as number[]
let mixed = [1, "two", true]; // inferred as (string | number | boolean)[]

// Using the inferred types
console.log(personName.toUpperCase()); // Works because personName is inferred as string
console.log(age.toFixed(2));          // Works because age is inferred as number
// personName.toFixed(2);             // Error: Property 'toFixed' does not exist on type 'string'

console.log(numbers);
console.log(mixed);

//====================================
// TypeScript infers the type of this object
const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  active: true,
  details: {
    age: 30,
    address: {
      city: "New York",
      country: "USA"
    }
  }
};

// Accessing inferred properties
console.log(user.name.toUpperCase());
console.log(user.details.age.toFixed(0));
console.log(user.details.address.city.toLowerCase());