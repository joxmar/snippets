export const wpLoadArchivePlugin = {
name : "Load custom post type archive template from plugin",
cats : ['PHP', 'Wordpress'],
language : "php",
snippet : `<pre><code data-language="javascript">
&lt;?php
function get_cpt_archive_template( $archive_template ) {
  global $post;
  if ( is_archive() && get_post_type($post) == 'custom_post' ) {
       $archive_template = plugin_dir_path( __FILE__ ) . 'archive-cpt.php';
  }
  return $archive_template;
}
add_filter( 'archive_template', 'get_cpt_archive_template' );
?&gt;`
}