export const wpAcfImg = {
  name: 'Advanced Custom Fields ACF - Image field sample',
  cats: ['wordpress', 'acf', 'php'],
  language: 'php',
  snippet: `
// RECOMMENDED: ACF image field set to return an ID 
// using the WordPress function wp_get_attachment_image() 
// This renders responsive images (srcset) and includes the correct alt text and classes.
&lt;?php if (get_field('image')): 
  $image_id = get_field('image');	
  $image_size = 'large'; // (thumbnail, medium, large, full or custom size)							
  echo wp_get_attachment_image( $image_id, $image_size, '', array( 'class' => 'class_names' ) );
endif; ?&gt;

// A more manual way
// ACF image when set to return an array
&lt;?php if (get_field('image_field')):
  $image = get_field('image_field'); ?&gt;
<img src="&lt;?php echo $image['sizes']['medium']; ?&gt;" alt="&lt;?php echo $image['alt']; ?&gt;" class="class_names">
&lt;?php endif; ?&gt;
`,
};
