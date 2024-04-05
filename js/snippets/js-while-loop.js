export const jsWhileLoop = {
name : "JS while loop",
cats : ['javascript'],
language : "Javascript",
snippet : `
let dice = Math.trunc(Math.random() * 6) + 1;

// while loop, exit when dice is 6
while (dice !== 6) {
  console.log('You rolled a ' + dice);
  dice = Math.trunc(Math.random() * 6) + 1;

  // if it hit 6, then do something right before exiting the loop
  if (dice === 6) {
    console.log('You won! Rolled a 6!');
  }
}
`
}