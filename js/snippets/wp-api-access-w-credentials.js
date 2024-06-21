export const wpApiAccessLogin = {
  name: 'Wordpress REST API Access with Credentials',
  cats: ['WordPress', 'PHP', 'API'],
  language: 'php',
  snippet: `
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
};
