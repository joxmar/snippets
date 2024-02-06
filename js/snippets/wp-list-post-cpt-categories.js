export const wpListPostCptCategories = {
name : "List Wordpress Post and Custom post type categories anywhere",
cats : ["php", "wordpress"],
language : "php",
snippet : `
/*************** List all categories ANYWHERE OUTSIDE THE LOOP */
$cat_types = get_terms( array(
	'taxonomy' => 'post_type_categories',
	'hide_empty' => false // by default it wont return cats without post assigned so here we are talling it to give us ALL cats.
) );

foreach ( $cat_types as $type ) {
	//all the terms available 
	echo 'name: ' . $type->name;
	echo 'slug: ' . $type->slug;
	echo 'term_group: ' . $type->term_group;
	echo 'term_taxonomy_id: ' . $type->term_taxonomy_id;
	echo 'taxonomy: ' . $type->taxonomy;
	echo 'description: ' . $type->description;
	echo 'parent: ' . $type->parent; // will return only the child categories of that specific parent
	echo 'count: ' . $type->count;
	echo 'filter: ' . $type->filter;
	echo 'id: ' . $type->term_id;
}

//another way is get_categories, same principle but is more fo regular posts.
$categories = get_categories( array(
	'taxonomy' => 'post_type_categories',
) );



/*************** List all categories assigned to each post INSIDE THE LOOP */
// WP_Query(args) stuff 
// if (have posts) while (have posts) stuff
// post details name etc

//cats with links
echo get_the_term_list( get_the_ID(), 'events_categories', '', ', ', '' );

//cats without links
$terms = get_the_terms( get_the_ID(), 'events_categories' );
if ( $terms && ! is_wp_error( $terms ) ) {
	$category_names = array();
	foreach ( $terms as $term ) {
		echo $term->name . ' ';
	}
}

// endif (have posts) while (have posts) stuff


/*************** list categories for a custom post INSIDE THE single-cpt.php FILE or single.php*/
//WITHOUT links
$cat_types = get_the_terms( $post->ID, 'taxonomy_categories' );
foreach ( $cat_types as $type ) {
	//all the terms available 
	echo 'name: ' . $type->name;
}

//WITH links
$cat_types = get_the_terms( $post->ID, 'taxonomy_categories' );
foreach ( $cat_types as $type ) {
	$category_link = get_term_link( $type );
	echo '<a href="' . esc_url( $category_link ) . '">' . esc_html( $type->name ) . '</a>, ';
}

`
}