export const wpLoadArchivePlugin = {
name : "Load custom post type archive, category and single templates from plugin",
cats : ['PHP', 'Wordpress'],
language : "php",
snippet : `
&lt;?php
function load_custom_event_templates( $template ) {
	if ( is_post_type_archive( 'events' ) && file_exists( plugin_dir_path( __FILE__ ) . 'templates/archive-events.php' ) ) {
		$template = plugin_dir_path( __FILE__ ) . 'templates/archive-events.php';
	}
	if ( is_tax( 'events_categories' ) && file_exists( plugin_dir_path( __FILE__ ) . 'templates/category-events.php' ) ) {
		$template = plugin_dir_path( __FILE__ ) . 'templates/category-events.php';
	}

	if ( is_singular( 'events' ) && file_exists( plugin_dir_path( __FILE__ ) . 'templates/single-events.php' ) ) {
		$template = plugin_dir_path( __FILE__ ) . 'templates/single-events.php';
	}
	return $template;
}
add_filter( 'archive_template', 'load_custom_event_templates' );
add_filter( 'single_template', 'load_custom_event_templates' );
`
}