const checkIfString = (value: unknown) => {
    return typeof value === 'string' ? true : false;
};

console.log("Is 'hello' a string?", checkIfString('hello'));
console.log("Is 42 a string?", checkIfString(42));
console.log("Is true a string?", checkIfString(true));

console.log("In TypeScript, the type 'IsString<string>' would be: true");
console.log("In TypeScript, the type 'IsString<number>' would be: false");

//===================================================

function createArray(item : unknown){
    return Array.isArray(item) ? item : [item];
}

function extractString(item: unknown){
    return typeof item === 'string' ? item : null;
}

console.log("String to Array:", createArray("hello"));
console.log("Number to Array:", createArray(42));

const mixedArray = ["hello", 42, true, "world"];
console.log("Mixed Array:", mixedArray);
console.log("Filering strings from union: ");
const stringsOnly = mixedArray.filter(item => typeof item === 'string');
console.log(stringsOnly);

//===================================================

function greet() { 
  return "Hello, world!"; 
}

function getNumber() { 
  return 42; 
}

// Simulating ReturnType
function getReturnType(fn) {
  const result = fn();
  return typeof result;
}

console.log("Return type of greet:", getReturnType(greet)); // string
console.log("Return type of getNumber:", getReturnType(getNumber)); // number

// Simulating ElementType inference
function getElementType(arr:unknown[]) {
  if (arr.length === 0) return "unknown";
  return typeof arr[0];
}

console.log("Element type of number array:", getElementType([1, 2, 3])); // number
console.log("Element type of string array:", getElementType(["a", "b", "c"])); // string

// In TypeScript, this would be handled at compile time
console.log("In TypeScript, the type 'ReturnType<typeof greet>' would be: string");
console.log("In TypeScript, the type 'ElementType<number[]>' would be: number");