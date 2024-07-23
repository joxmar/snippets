export const acfFrontendForm = {
  name: 'ACF Wordpress front end form to create new post, page or CPT',
  cats: ['wordpress', 'acf', 'php'],
  language: 'php',
  snippet: `
// Submit partner finder form as a shortcode
add_action('wp_head', 'add_acf_form_head', 1); //1 here is important otherwise you'll get a blank page after submission
function add_acf_form_head() { 
    acf_form_head();
}
add_shortcode('frontend_form', 'submit_frontend_form');
function submit_frontend_form() {
  ob_start();
  
  acf_form(array(
    'post_id'		=> 'new_post',
    'post_title'	=> true,
    'form' => true,
    'new_post'		=> array(
      'post_type'		=> 'post', // or page or CPT
      'post_status'		=> 'draft' // or published
    ),
    'field_groups' => array( 206 ), // field group page ID not group id (hover on the group in ACF to see the page ID on the URL)
    'submit_value'	=> __('Submit', 'acf'),
    'updated_message' => __('Thank you for submitting your form. We will review it and get back to you soon.', 'acf'),
  ));  

  return ob_get_clean();

  // call the form in php or backend
  echo do_shortcode('[frontend_form]');
}
`,
};
