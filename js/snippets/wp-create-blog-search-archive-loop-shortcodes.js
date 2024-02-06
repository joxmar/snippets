export const wpBlogSearchArchiveShortcodes = {
name : "Create blog, search and archive loops as shortcodes",
cats : ['php', 'wordpress'],
language : "php",
snippet : `
&lt;?php
// blog loop
function RS_news_post_loop_shortcode() {
	$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
	$posts_per_page = 4;

	$query_args = array(
		'post_type' => 'post',
		'posts_per_page' => $posts_per_page,
		'post_status' => 'publish',
		// 'offset' => 1,
		'offset' => ( $paged - 1 ) * $posts_per_page + 1,
		'paged' => get_query_var( 'paged' )
	);

	$query = new WP_Query( $query_args );

	if ( $query->have_posts() ) {
		$output = '<div class="et_pb_ajax_pagination_container">';
		while ( $query->have_posts() ) {
			$query->the_post();
			if ( get_field( 'press_release_link' ) ) :
				$output .= '<article class="type-post is-external">';
				// Get the ACF link value for this post
				$output .= '<p class="post-meta">' . get_the_category_list( ', ' ) . ' ' . get_the_date() . '</p>';
				$output .= '<h2 class="entry-title">' . get_the_title() . '</h2>';
				$RS_news_external_link = get_field( 'press_release_link' );
				$rs_external_url = $RS_news_external_link['url'];
				$rs_external_label = $RS_news_external_link['title'];
				$output .= '<a href="' . $rs_external_url . '" class="press-external-link" target="_blank">' . $rs_external_label . '<img src="https://rightsitehealth.com/wp-content/uploads/2023/04/noun-external-link.png" alt="open link"></a>';
				$output .= '</article>';
			else :
				$output .= '<article class="type-post">';
				if ( has_post_thumbnail() ) {
					$output .= '<a href="' . get_permalink() . '" class="entry-featured-image-url">';
					$output .= get_the_post_thumbnail( null, 'large' );
					$output .= '</a>';
				}
				$output .= '<h2 class="entry-title"><a href="' . get_permalink() . '">' . get_the_title() . '</a></h2>';
				$output .= '<p class="post-meta">' . get_the_category_list( ', ' ) . ' ' . get_the_date() . '</p>';
				$output .= '</article>';
			endif;
		}
		$output .= '</div>';

		// Add pagination links
		$output .= '<div class="rs-pagination">';
		$output .= '<div class="prev-link">' . get_previous_posts_link( 'Prev' ) . '</div>';
		$output .= '<div class="next-link">' . get_next_posts_link( 'Next', $query->max_num_pages, 1 ) . '</div>';
		$output .= '</div>';

		wp_reset_postdata();
		return $output;
	}
}
add_shortcode( 'RS_news_blog', 'RS_news_post_loop_shortcode' );




// search results loop shortcode
function RS_search_news_results_loop_shortcode() {
	// Get the search query from the URL parameter
	$query_string = get_search_query();

	// Perform the search query
	$args = array(
		's' => $query_string,
		'posts_per_page' => 4,
		'paged' => get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1
	);
	$search_query = new WP_Query( $args );

	if ( $search_query->have_posts() ) {
		$output = '<div class="et_pb_ajax_pagination_container">';
		while ( $search_query->have_posts() ) {
			$search_query->the_post();
			if ( get_field( 'press_release_link' ) ) :
				$output .= '<article class="type-post is-external">';
				// Get the ACF link value for this post
				$output .= '<p class="post-meta">' . get_the_category_list( ', ' ) . ' ' . get_the_date() . '</p>';
				$output .= '<h2 class="entry-title">' . get_the_title() . '</h2>';
				$RS_news_external_link = get_field( 'press_release_link' );
				$rs_external_url = $RS_news_external_link['url'];
				$rs_external_label = $RS_news_external_link['title'];
				$output .= '<a href="' . $rs_external_url . '" class="press-external-link" target="_blank">' . $rs_external_label . '<img src="https://rightsitehealth.com/wp-content/uploads/2023/04/noun-external-link.png" alt="open link"></a>';
				$output .= '</article>';
			else :
				$output .= '<article class="type-post">';
				if ( has_post_thumbnail() ) {
					$output .= '<a href="' . get_permalink() . '" class="entry-featured-image-url">';
					$output .= get_the_post_thumbnail( null, 'large' );
					$output .= '</a>';
				}
				$output .= '<h2 class="entry-title"><a href="' . get_permalink() . '">' . get_the_title() . '</a></h2>';
				$output .= '<p class="post-meta">' . get_the_category_list( ', ' ) . ' ' . get_the_date() . '</p>';
				$output .= '</article>';
			endif;
		}
		$output .= '</div>';

		// Add pagination links
		$output .= '<div class="rs-pagination">';
		$output .= '<div class="prev-link">' . get_previous_posts_link( 'Prev', $search_query->max_num_pages ) . '</div>';
		$output .= '<div class="next-link">' . get_next_posts_link( 'Next', $search_query->max_num_pages ) . '</div>';
		$output .= '</div>';

		wp_reset_postdata();
		return $output;
	}
}
add_shortcode( 'RS_news_results', 'RS_search_news_results_loop_shortcode' );




// Archive results loop shortcode
function RS_archive_results_loop_shortcode() {

	// Get the category slug from the URL
	$category_slug = get_query_var( 'category_name' );

	// Get the category object based on the slug
	$category = get_category_by_slug( $category_slug );

	if ( $category ) {
		$category_id = $category->term_id;

		// Build the query arguments
		$args = array(
			'cat' => $category_id,
			'posts_per_page' => 4,
			'paged' => get_query_var( 'paged' )
		);

		$archive_query = new WP_Query( $args );

		if ( $archive_query->have_posts() ) {
			$output = '<div class="et_pb_ajax_pagination_container">';
			while ( $archive_query->have_posts() ) {
				$archive_query->the_post();
				if ( get_field( 'press_release_link' ) ) :
					$output .= '<article class="type-post is-external">';
					// Get the ACF link value for this post
					$output .= '<p class="post-meta">' . get_the_category_list( ', ' ) . ' ' . get_the_date() . '</p>';
					$output .= '<h2 class="entry-title">' . get_the_title() . '</h2>';
					$RS_news_external_link = get_field( 'press_release_link' );
					$rs_external_url = $RS_news_external_link['url'];
					$rs_external_label = $RS_news_external_link['title'];
					$output .= '<a href="' . $rs_external_url . '" class="press-external-link" target="_blank">' . $rs_external_label . '<img src="https://rightsitehealth.com/wp-content/uploads/2023/04/noun-external-link.png" alt="open link"></a>';
					$output .= '</article>';
				else :
					$output .= '<article class="type-post">';
					if ( has_post_thumbnail() ) {
						$output .= '<a href="' . get_permalink() . '" class="entry-featured-image-url">';
						$output .= get_the_post_thumbnail( null, 'large' );
						$output .= '</a>';
					}
					$output .= '<h2 class="entry-title"><a href="' . get_permalink() . '">' . get_the_title() . '</a></h2>';
					$output .= '<p class="post-meta">' . get_the_category_list( ', ' ) . ' ' . get_the_date() . '</p>';
					$output .= '</article>';
				endif;
			}
			$output .= '</div>';

			// Add pagination links
			$output .= '<div class="rs-pagination">';
			$output .= '<div class="prev-link">' . get_previous_posts_link( 'Prev', $archive_query->max_num_pages ) . '</div>';
			$output .= '<div class="next-link">' . get_next_posts_link( 'Next', $archive_query->max_num_pages ) . '</div>';
			$output .= '</div>';

		}
		wp_reset_postdata();
		return $output;
	}
}
add_shortcode( 'RS_news_archive', 'RS_archive_results_loop_shortcode' );
`
}