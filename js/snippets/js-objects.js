export const jsObjectsTips = {
  name: 'JavaScript Objects tips/tricks',
  cats: ['javascript'],
  language: 'javascript',
  snippet: `
// Get the values only from an object
const person = {
  name: 'Jorge',
  age: 43,
  city: 'Tegucigalpa'
};

// Object.values() method returns an array of of the values of an object.
const values = Object.values(person);
console.log(values);
// Output: ["Jorge", 43, "Tegucigalpa"]

`,
};
