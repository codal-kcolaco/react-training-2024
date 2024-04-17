let originalArray = [1, 2, 3];
let copyArray = [...originalArray];
console.log(copyArray);

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let concatenatedArray = [...array1, ...array2];
console.log(concatenatedArray);

let numbers = [1, 2, 3];
let sum = (a, b, c) => a + b + c;
console.log(sum(...numbers));

originalArray = [1, 2, 3];
let newArray = [...originalArray, 4, 5, 6];
console.log(newArray);

let originalObject = { a: 1, b: 2 };
let newObject = { ...originalObject, c: 3 };
console.log(newObject);
