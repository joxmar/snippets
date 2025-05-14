export const jsDestructureArray = {
name : "Destructuring Arrays in Javascript",
cats : ['javascript'],
language : "Javascript",
snippet : `
// destructuring an array.
// This is a simple solution to assign array items to a variable instead of using the for loop.
const arr = [2, 3, 4, 5];
const [x, y, z] = arr; // assigns each arr item to the variable x=2, y=3, z=4. if there are more items in the array, they will be ignored since there aren't enough.
console.log(x, y, z); // 2 3 4

// skipping elements
const categories = ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'];
const [first, , second] = categories; // destructuring the array categories from the restaurant object. it will skip pizzeria.
console.log(first, second); // Italian Vegetarian

// nested arrays destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested; // destructuring the array nested it will skip 4.
console.log(i, j); // 2 [ 5, 6 ]

// destructuring nested array individually
const [q, , [w, e]] = nested; // destructuring the array nested it will skip 4 and we destructure the inner array once again.
console.log(q, w, e); // 2 5 6

// setting default values: it will assign default values to the variables that are not defined in the array.
const [p = 1, o = 1, u = 1] = [8, 9]; // destructuring the array
console.log(p, o, u); // 8 9 1
`
}