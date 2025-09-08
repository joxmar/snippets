export const htmlPageRefresh = {
  name: 'Refresh or Redirect a Page Automatically',
  cats: ['html'],
  language: 'html',
  snippet: `
&lt;!-- Refresh the page every 5 seconds --&gt;
&lt;meta http-equiv="refresh" content="5"&gt;

&lt;!-- Redirect to another page after 5 seconds --&gt;
&lt;meta http-equiv="refresh" content="5;url=https://www.example.com"&gt;
`,
};
