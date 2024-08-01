export const wpUploadMultipleCategories = {
  name: 'Create or Upload multiple categories in WordPress',
  cats: ['php', 'wordpress'],
  language: 'php',
  snippet: `
function add_demo_subcategories() {
  $demo_cats = [    
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',    
  ];

  foreach ($demo_cats as $cat_name) {
      // Check if the term already exists to avoid duplication
      if (!term_exists($cat_name, 'category')) { // The category taxonomy or 'custom-post' taxonomy
          // Insert the term
          wp_insert_term(
              $cat_name,   // The term name
              'category',  // The category taxonomy or 'custom-post' taxonomy
              array(
                  'parent' => 8, // The ID of the parent category if you want to add them as subcategories
              )
          );
      }

      // NOTE the slug will be automatically generated from the term name with dashes
  }
}

add_action('init', 'add_demo_subcategories');
`,
};
