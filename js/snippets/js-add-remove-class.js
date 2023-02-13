export const jsaddRemoveHasClass = {
name : "Add, Remove, Toggle, has/contains Classes",
cats : ['javascript'],
language : "Javascript",
snippet : `<pre><code data-language="javascript">
let element = document.getElementById('#element');
//add classes
element.classList.add('snippet-container', 'bg-white', 'rounded-xl', 'drop-shadow-2xl', 'mt-10');

//remove classes
element.classList.remove('snippet-container', 'bg-white', 'rounded-xl', 'drop-shadow-2xl', 'mt-10');

//toggle classes
element.classList.toggle('snippet-container', 'bg-white', 'rounded-xl', 'drop-shadow-2xl', 'mt-10');

//comntains class - can only check one class at a time
element.classList.contains('snippet-container');
</code></pre>`
}