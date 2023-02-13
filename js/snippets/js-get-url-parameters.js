export const jsGetURL = {
name : "Get URL Parameters",
cats : ['javascript', 'URL'],
language : "Javascript",
snippet : `<pre><code data-language="javascript">
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString);
const applicationParam = urlParams.get('parameter-name') //parameter name
if(applicationParam !== null){
    // do something
}
</code></pre>`
}