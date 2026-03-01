export const apiFetch = {
  name: 'Simple API fetch example',
  cats: ['javascript', 'API'],
  language: 'javascript',
  snippet: `
let apiData;
console.log('loading...');

async function fetchData() {
  try {
    const response = await fetch("https://api.jikan.moe/v4/anime");
    apiData = await response.json();
    init(); // we start our shit here, otherwise data is still loading.
  }
  catch (error) {
    console.error(error);
  }
}

fetchData();

function init() {
  console.clear();
  console.table(apiData);
}
`,
};
