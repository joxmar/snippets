export const diviFormSenderEmail = {
name : "snippet name, make sure it has serchable keywords",
cats : ['wordpress', 'divi'],
language : "php",
snippet : `
//Divi's default is mail@domain.com
function custom_wp_mail_from($email) {
  return 'yournewaddress@domain.com';
}
add_filter('wp_mail_from', 'custom_wp_mail_from');
`
}