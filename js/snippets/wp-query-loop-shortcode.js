export const wpQueryShortcode = {
  name: 'Create a Custom Post Query Loop Shortcode',
  cats: ['php', 'wordpress'],
  language: 'php',
  snippet: `
// passing the post type as an attribute in the shortcode
function custom_post_type_shortcode( $atts ) {
    // Extract shortcode attributes, setting 'post_type' default to 'post'
    $atts = shortcode_atts( array(
        'post_type' => 'post'
    ), $atts, 'custom_post_type' );

    // Start output buffering
    ob_start();

    // Set up the query arguments, using the post type from the shortcode attribute
    $args = array(
        'post_type'      => sanitize_text_field( $atts['post_type'] ),
        'posts_per_page' => 5,
        'orderby'        => 'date',
        'order'          => 'DESC'
    );

    // Execute the query
    $query = new WP_Query( $args );

    // Start the loop
    if ( $query->have_posts() ) {
        echo '<div class="custom-post-type-list">';

        while ( $query->have_posts() ) {
            $query->the_post();
            ?&gt;
            <div class="post-item">
                <h2>&lt;?php the_title(); ?&gt;</h2>
                <p>&lt;?php the_excerpt(); ?&gt;</p>
                <a href="&lt;?php the_permalink(); ?&gt;">Read More</a>
            </div>
            &lt;?php
        }

        echo '</div>';
    } else {
        echo '<p>No posts found.</p>';
    }

    // Reset post data to avoid conflicts
    wp_reset_postdata();

    // Get the output buffer content and clean the buffer
    return ob_get_clean();
}
add_shortcode( 'custom_post_type', 'custom_post_type_shortcode' );
// ussage: [custom_post_type post_type="your_custom_post_type"]
`,
};
