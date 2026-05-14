const person = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};

const partialPerson = {
    name: "Alice",
};
console.log("Partial Person Object:");
console.log(partialPerson);

function makeReadonly<T>(obj: T): Readonly<T> {
    return Object.freeze(obj);
}

const readonlyPerson = makeReadonly({
  name: "Alice",
  age: 30,
  email: "alice@example.com"
});

console.log("\nReadonly Person Object:");
console.log(readonlyPerson);

// try {
//   readonlyPerson.age = 31; // This will fail in strict mode
//   console.log("Modified age:", readonlyPerson.age);
// } catch (error) {
//   console.log("Error: Cannot modify readonly property 'age'");
// }