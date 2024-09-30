export const cssDynamicNumbering = {
  name: 'Dynamic numbering with CSS counter',
  cats: ['css'],
  language: 'CSS',
  snippet: `
ul.counter {
  list-style: none;
  list-style-position: outside;
  counter-reset: my-counter;
}

ul.counter li {
  counter-increment: my-counter; /* you can change the counter increments i.e. by 10,20,30 etc: my-counter 10  */
}

ul.counter li:before {
  content: counter(my-counter, decimal-leading-zero); /* adds 0 at the beginig for 1 - 9, or letters like lower-alpha, lower-roman */
  /* content: 'number ' counter(my-counter) '! '; */ /* Or you can even add text before/after the number */
}
/* Doesn't have to be with UL, you can do it with divs or any other elements */
`,
};
