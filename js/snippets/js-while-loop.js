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

// while loop with counter
let i = 0;
while (i < 5) {
  console.log('Hello world ' + i);
  i++;

  // if it reaches 5, then do something right before exiting the loop
  if (i === 5) {
    console.log("You've reached 5, buh-bye!");
  }
}
/* returns:
Hello world 0
Hello world 1
Hello world 2
Hello world 3
Hello world 4
You've reached 5, buh-bye!
*/
`
}