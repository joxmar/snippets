export const jsParallax = {
  name: 'Simple parallax effect with vanilla JS',
  cats: ['javascript'],
  language: 'javascript',
  snippet: `
const element = document.querySelector('.element');
window.addEventListener('scroll', () => {
  let val = window.scrollY;
  element.top = val * 0.25 + 'px';
  // keep adding more elements with different speed values
  // make sure the element has a position of relative or absolute
});
`,
};
