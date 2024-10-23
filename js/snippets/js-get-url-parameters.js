export const jsGetURL = {
  name: 'Get URL Parameters',
  cats: ['javascript', 'php'],
  language: 'Javascript',

  snippet: [
    {
      language: 'javascript',
      tabName: 'Javascript',
      content: `
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString);
const applicationParam = urlParams.get('parameter-name') //parameter name
if(applicationParam !== null){
    // do something
}`,
    },
    {
      language: 'php',
      tabName: 'PHP',
      content: `
if (isset($_GET['param-name'])) {
  $param_value = $_GET['param-name'];
  // do something
}`,
    },
  ],
};
