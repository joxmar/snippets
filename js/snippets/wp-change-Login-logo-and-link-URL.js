export const wpChangeLoginLogo = {
name : "Change Wordpress login logo and link URL",
cats : ['php', 'wordpress'],
language : "php",
snippet : `
&lt;?php
// add logo from acf options page
function ll_login_logo() {
	$output = '';
	if ( get_field( 'site_logo', 'option' ) ) :
		$logo_image = get_field( 'site_logo', 'option' );
		echo '<style type="text/css">
		h1 a {background-image: url(' . $logo_image['sizes']['large'] . ') !important; }
		</style>';

	endif;
}
add_action( 'login_enqueue_scripts', 'll_login_logo' );


// change login logo link (wordpress.com) to site url
function custom_loginlogo_url( $url ) {
	return get_site_url();
}
add_filter( 'login_headerurl', 'custom_loginlogo_url' );
`
}