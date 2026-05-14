let x: unknown = 'hello';

console.log((x as string).length);

console.log((<string>x).length);

// let y = 'worlddddd';
// console.log(((y as unknown) as number).length); //is not actually a number so this will return undefined
