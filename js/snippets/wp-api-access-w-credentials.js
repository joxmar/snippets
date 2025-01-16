export const wpApiAccessLogin = {
  name: 'Wordpress REST API Access',
  cats: ['WordPress', 'PHP', 'API'],
  language: 'php',
  snippet: [
    {
      language: 'php',
      tabName: 'PHP with credentials',
      content: `
&lt;?php
//let's access the avaialble users and show 100 per page, for example.
$api_url = 'https://site.com/wp-json/wp/v2/users?per_page=100';
$username = 'username';
$password = 'UserApplicationPasswordHere';
$credentials = base64_encode("$username:$password");

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $api_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Authorization: Basic ' . $credentials
));
$output = curl_exec($ch);
curl_close($ch);

$users = json_decode($output);

print_r($users);

?&gt;
`,
    },
    {
      language: 'Javascript',
      tabName: 'With Javascript',
      content: `
async function fetchData() {
  const response = await fetch(    
    // i.e. let's say you have a site with a custom post type 'events'
    'https://site.com/wp-json/wp/v2/events?per_page=100'// you can preview this data in the browser

    // If no server or no event s aviailable, use backup json file
    // 'wp-events-backup.json'
  );
  const events = await response.json();
  return events.map((event) => ({
    title: event.title.rendered, // post title
    startDate: event.acf.start_date,// ACF field sample
    endDate: event.acf.end_date, // ACF field sample
    startTime: event.acf.starting_time,// ACF field sample
    endTime: event.acf.ending_time,// ACF field sample
    categoryId: event.cpt_taxonomy[0] || 'General', // taxonomy or default general if post hasn't been assigned
  }));
}

const allEvents = await fetchData();
`,
    },
  ],
};
