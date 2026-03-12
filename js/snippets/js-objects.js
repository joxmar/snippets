export const jsObjectsTips = {
  name: 'JavaScript Objects tips/tricks',
  cats: ['javascript'],
  language: 'javascript',
  snippet: `
// Object
const person = {
  name: 'Jorge',
  age: 43,
  city: 'Tegucigalpa'
};

// CORRECT WAY to loop through an object with Object.entries()
// This method returns an array of the key-value pairs of an object.
for (const [key, value] of Object.entries(person)) {
  console.log(\`\${key}: \${value}\`);
}
// Output:
// name: Jorge
// age: 43
// city: Tegucigalpa

// Get the values only from an object with Object.values(). 
// This method returns an array of of the values of an object.
const values = Object.values(person);
console.log(values);
// Output: ["Jorge", 43, "Tegucigalpa"]

// Get the keys only from an object with Object.keys().
// This method returns an array of the keys of an object.
const keys = Object.keys(person);
console.log(keys);
// Output: ["name", "age", "city"]

`,
};
