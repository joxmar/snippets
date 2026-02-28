export const apiFetch = {
  name: 'Simple API fetch example',
  cats: ['javascript', 'API'],
  language: 'javascript',
  snippet: `
async function fetchData() {
  try {
    const response = await fetch("https://api.jikan.moe/v4/anime");
    const data = await response.json();
    console.log(data);
  }
  catch (error) {
    console.error(error);
  }
}

fetchData();
`,
};
