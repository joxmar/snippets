export const wpAcfImg = {
  name: 'Advanced Custom Fields ACF - Image field sample',
  cats: ['wordpress', 'acf', 'php'],
  language: 'php',
  snippet: `
<?php if (get_field('image_field')):
  $image = get_field('image_field'); ?>
<img src="<?php echo $image['sizes']['medium']; ?>" alt="<?php echo $image['alt']; ?>">
<?php endif; ?>
`,
};
