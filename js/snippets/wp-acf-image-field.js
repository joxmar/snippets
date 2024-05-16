export const wpAcfImg = {
  name: 'Advanced Custom Fields ACF - Image field sample',
  cats: ['wordpress', 'acf', 'php'],
  language: 'php',
  snippet: `
&lt;?php if (get_field('image_field')):
  $image = get_field('image_field'); ?&gt;
<img src="&lt;?php echo $image['sizes']['medium']; ?&gt;" alt="&lt;?php echo $image['alt']; ?&gt;">
&lt;?php endif; ?&gt;
`,
};
