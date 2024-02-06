export const wpGetAllCpt = {
name : "Get all wordpress registered custom post types",
cats : ['php', 'wordpress'],
language : "php",
snippet : `
&lt;?php 
 $choices               = [];
 $post_types            = get_post_types( [
    'public'  => true,
    // 'show_ui' => true,
 ], 'objects' );

 //show all registered posttypes in WP
 foreach ( $post_types as $post_type ) {
    echo $post_type->labels->menu_name . ': ' .$post_type->name . '<br>';

   //run this below on the front end (page.php) to view all available in array
    // echo '<pre>';
    // print_r($post_type);
    // echo '</pre>';
 } 


// Exlude specific post types from loop
$post_types_to_exclude = [ 'attachment', 'page' ]; //we're using post type name not label
foreach ( $post_types as $post_type ) {
  if ( ! in_array( $post_type->name, $post_types_to_exclude, true ) ) {
    echo $post_type->labels->menu_name . ': ' .$post_type->name . '<br>';
  }
}
`
}