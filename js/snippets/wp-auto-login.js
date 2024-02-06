export const autoLogin = {
name : "Automatic Login",
cats : ['PHP', 'Wordpress'],
language : "php",
snippet : `
&lt;?php
/*
Plugin Name: Auto Login
Plugin URI: http://hbt.io/
Version: 1.0.0
Author: Harri Bell-Thomas
Author URI: http://hbt.io/
*/


//Based on this post https://www.wpexplorer.com/automatic-wordpress-login-php/
function autologin() {
	// PARAMETER TO CHECK FOR
	if ($_GET['autologin'] == 'demo') {
		
		// ACCOUNT USERNAME TO LOGIN TO
		$creds['user_login'] = 'demo';
		
		// ACCOUNT PASSWORD TO USE
		$creds['user_password'] = 'demo';
		
		$creds['remember'] = true;
		$autologin_user = wp_signon( $creds, false );
		
		if ( !is_wp_error($autologin_user) ) 
			header('Location: wp-admin'); // LOCATION TO REDIRECT TO
	}
}
// ADD CODE JUST BEFORE HEADERS AND COOKIES ARE SENT
add_action( 'after_setup_theme', 'autologin' );


// next would be to find a way to actually get the password from the DB and login with that instead
// WP passwords in the DB are hashed so maybe this can help with it:
// https://maxrice.com/allow-wordpress-login-with-sha1-password-hash/
?&gt;`
}