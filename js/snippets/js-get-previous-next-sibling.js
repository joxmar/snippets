export const jsGetPrevNextSibling = {
name : "Get element previous and next siblings",
cats : ['javascript'],
language : "Javascript",
snippet : `
var item = document.querySelector('#find-me');
var prev = item.previousElementSibling;
var next = item.nextElementSibling;
`
}