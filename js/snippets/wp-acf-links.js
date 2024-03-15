export const wpAcfLink = {
name : "Advanced Custom Fields ACF - Link field sample",
cats : ['wordpress', 'ACF'],
language : "php",
snippet : `
<?php 
  $link = get_sub_field('job_link');
  if( $link ): 
    $link_url = $link['url'];
    $link_title = $link['title'];
    $link_target = $link['target'] ? $link['target'] : '_self';
    ?>
    <a href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>"><?php echo esc_html( $link_title ); ?></a>            
<?php endif; ?>
`
}