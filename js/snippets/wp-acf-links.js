export const wpAcfLink = {
name : "Advanced Custom Fields ACF - Link field sample",
cats : ['wordpress', 'ACF'],
language : "php",
snippet : `
&lt;?php 
  $link = get_sub_field('field_name');
  if( $link ): 
    $link_url = $link['url'];
    $link_title = $link['title'];
    $link_target = $link['target'] ? $link['target'] : '_self';
    ?&gt;
    &lt;a href="&lt;?php echo esc_url( $link_url ); ?&gt;" target="&lt;?php echo esc_attr( $link_target ); ?&gt;"&gt;&lt;?php echo esc_html( $link_title ); ?&gt;&lt;/a&gt;            
&lt;?php endif; ?&gt;
`
}