export const jsSpreadOperator = {
  name: 'Arrays: Spread Operator',
  cats: ['javascript'],
  language: 'javascript',
  snippet: `
  // Spread Operators unpack arrays or objects into individual elements.
  const spreadArr = [7, 8, 9];
  const spreadMe = [1, 2, ...spreadArr]; // [ 1, 2, 7, 8, 9 ]
  
  // a string can also be spreaded into an array.
  const str = 'Jorge';
  const letters = [...str, ' ', '!']; // [ 'J', 'o', 'r', 'g', 'e', ' ', '!' ]

  // you can also use the spread operator as an argument to a function.
  function spellString(...args) {
    console.log(args); // logs the arguments passed to the function.
  }

  spellString(...str); // [ 'J', 'o', 'r', 'g', 'e']

  // you can also use the spread operator to copy objects, true clone not reference.
  const obj = { a: 1, b: 2 };
  const objCopy = { ...obj }; // { a: 1, b: 2 }
  objCopy.a = 3; // changes only the copy, not the original object.
  console.log(obj); // { a: 1, b: 2 }
  console.log(objCopy); // { a: 3, b: 2 }
`,
};
