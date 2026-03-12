export const jsforloop = {
  name: 'JS for loop and reverse loop',
  cats: ['javascript'],
  language: 'Javascript',
  snippet: `
const fruit =  ['apple', 'banana', 'mango' ];

// For of loop (ES6) - recommended way to loop through an array
for (const item of fruit) {
  console.log(item);
}
// returns: apple, banana, mango

// For loop OLD WAY still works but not recommended
for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}
// returns: apple, banana, mango

// Reverse loop (fruit length is 3, but array index starts from 0, so length - 1 to make sure we are at 0)
for (let i = fruit.length - 1; i >= 0; i--) {
  console.log(fruit[i]);
}
// returns: mango, banana, apple
`,
};
