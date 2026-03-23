export const jsDestructureObjects = {
  name: 'Destructuring Objects in Javascript',
  cats: ['javascript'],
  language: 'Javascript',
  snippet: `
// destructuring an object.
// This is a simple solution to assign object properties to variables instead of using the dot notation.
const obj = { a: 1, b: 2, c: 3 };
const { a, b, c } = obj; // assigns each object property to the variable a=1, b=2, c=3.
console.log(a, b, c); // 1 2 3

// destructuring an object with a different variable name.
const obj2 = { a: 1, b: 2, c: 3 };
const { a: x, b: y, c: z } = obj2; // assigns each object property to the variable x=1, y=2, z=3.
console.log(x, y, z); // 1 2 3

// destructuring an object with default values.
const obj3 = { a: 1, b: 2 };
const { a: m = 0, b: n = 0, c: o = 0 } = obj3; // assigns each object property to the variable m=1, n=2, o=0 (default value).
console.log(m, n, o); // 1 2 0

// destructuring an object with nested properties.
const obj4 = { a: 1, b: { c: 2, d: 3 } };
const { a: p, b: { c: q, d: r } } = obj4; // assigns each object property to the variable p=1, q=2, r=3.
console.log(p, q, r); // 1 2 3
`,
};
