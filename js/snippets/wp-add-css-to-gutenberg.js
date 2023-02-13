export const gutenAddCSS = {
name : "Add stylesheets to Gutenberg and front end",
cats : ['PHP', 'Wordpress'],
language : "php",
snippet : `<pre><code data-language="javascript">
&lt;?php
// Gutenberg work editor stylesheet
add_theme_support('editor-styles');
add_editor_style( 'work-editor-styles.css' );


// OR add the styles to specific custom post type
add_theme_support('editor-styles');
function wpdocs_theme_add_editor_styles() {
  global $post;

  $my_post_type = 'posttype';

  // New post (init hook).
  if ( false !== stristr( $_SERVER['REQUEST_URI'], 'post-new.php' )
      && ( isset( $_GET['post_type'] ) === true && $my_post_type == $_GET['post_type'] )
  ) {
    add_editor_style( get_stylesheet_directory_uri() . '/work-editor-styles.css' );
  }

  // Edit post (pre_get_posts hook).
  if ( stristr( $_SERVER['REQUEST_URI'], 'post.php' ) !== false
      && is_object( $post )
      && $my_post_type == get_post_type( $post->ID )
  ) {
    add_editor_style( get_stylesheet_directory_uri() . '/work-editor-styles.css' );
  }
}
add_action( 'init',          'wpdocs_theme_add_editor_styles' );
add_action( 'pre_get_posts', 'wpdocs_theme_add_editor_styles' );


// now lets add the stylesheet to the front end CPT single page
add_action( 'wp_enqueue_scripts', 'enqueue_frontend_assets', 10 );
function enqueue_frontend_assets(){
    if( is_singular( 'posttype' ) ){
        wp_enqueue_style( 'style-posttype', get_theme_file_uri() . 'work-editor-styles.css' );
    }
}
              </code></pre>`
}