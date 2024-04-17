export const overrideAcfWysiwygColors = {
name : "Override Wordpress ACF WYSIWYG Colors",
cats : ['php', 'wordpress', 'acf'],
language : "php",
snippet : `
&lt;?php
function ka_override_MCE_options( $init ) {

	$custom_colors = '
        "fabb2b", "Yellow",
        "e5ebf0", "Light Blue",
        "003b71", "Medium Blue",
        "042240", "Dark Blue",
        "f16061", "Red",
        "929292", "Medium Gray",
        "262626", "Charcoal"
    ';
	// build color grid palette
	$init['textcolor_map'] = '[' . $custom_colors . ']';

	// change the number of rows in the grid if the number of colors changes
	// 8 swatches per row
	$init['textcolor_rows'] = 1;

	return $init;
}
add_filter( 'tiny_mce_before_init', 'ka_override_MCE_options' );
`
}