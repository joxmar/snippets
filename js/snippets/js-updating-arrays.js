export const updateArrays = {
  name : "arrays: add, remove and update",
  cats : ['javascript'],
  language : "javascript",
  snippet : `
  // Add value at the end of the array
  const names = ['Nancy','Emily','Alina','Astro'];
names.push('Cosmo'); 
console.log(names); 
// returns ['Nancy', 'Emily', 'Alina', 'Astro', 'Cosmo']

// Add value at the beginning of the array
names.unshift('Jorge'); 
console.log(names); 
// returns ['Jorge', 'Nancy', 'Emily', 'Alina', 'Astro', 'Cosmo']

// Remove the last element in the array
names.pop(); 
console.log(names); 
// returns ['Jorge', 'Nancy', 'Emily', 'Alina', 'Astro']

// Remove the first element in the array
names.shift()
console.log(names);
//returns ['Nancy', 'Emily', 'Alina', 'Astro']

//storing either pop() or unshift() into a variable will save the array's length instead of the actual array
const names = ['Nancy','Emily','Alina','Astro', 'Cosmo'];
let newName = names.unshift('Jorge');
console.log(newName);
//returns 6

// storing pop into a variable will save the removed element.
const names = ['Jorge', 'Nancy', 'Emily', 'Alina', 'Astro', 'Cosmo'];
let kickedOut = names.pop();
console.log(kickedOut); 
// returns Cosmo

// update elements in the array (arrays start counting from 0)
const names = ['Jorge', 'Nancy', 'Emily', 'Alina', 'Astro', 'Cosmo'];
names[0] = 'Martin'; // first element
names[2] = 'Ivette'; // third element
console.log(names); 
// returns ['Martin', 'Nancy', 'Ivette', 'Alina', 'Astro', 'Cosmo']
  `
}