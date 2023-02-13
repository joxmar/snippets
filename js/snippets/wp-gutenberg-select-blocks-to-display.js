export const gutBlocksToDisplay= {
name : "Select blocks to display",
cats : ['PHP', 'Wordpress'],
language : "php",
snippet : `<pre><code data-language="javascript">
&lt;?php
add_filter( 'allowed_block_types_all', 'rt_allowed_block_types', 25, 2 );
 
function rt_allowed_block_types( $allowed_blocks, $editor_context ) {
    if( 'custom-post-type' === $editor_context->post->post_type ) { 
        $allowed_blocks = array(
        'core/image',
        'core/paragraph',
        'core/heading',
        'core/list',
        'core/columns',
        'core/video',
        'core/image',
        
        //ACF blocks
        'acf/block-name-dash-is-important'
        );
        return $allowed_blocks;
    } else {
        return;
    }
}
?&gt;
`
}