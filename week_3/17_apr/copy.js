// shallow copy
let originalArray = [
  [1, 2],
  [3, 4],
];
const shallowCopy = [...originalArray];

shallowCopy[0][0] = 5;

console.log(originalArray); // Output: [[5, 2], [3, 4]]

// deep copy using json
originalArray = [
  [1, 2],
  [3, 4],
];
let deepCopy = JSON.parse(JSON.stringify(originalArray));

deepCopy[0][0] = 5;

console.log(originalArray); // Output: [[1, 2], [3, 4]]
