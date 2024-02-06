export const registerAcfBlockTemplate = {
name : "registrer ACF field group, block and, template in 1 file",
cats : ['php', 'wordpress'],
language : "php",
snippet : [
  {
    tabName : 'functions.php',
    content: `
    if (function_exists('acf_register_block_type')) {            
      add_action('acf/init', 'register_acf_block_types');      
    }

    function register_acf_block_types(){      
      require_once get_template_directory() . '/path/to/wp-acf-register-field-block-template.php';
    }
    `
  },
  {
    tabName : 'wp-acf-register-field-block-template.php',
    content: `
    &lt;?php

    acf_add_local_field_group( array(
      'key' => 'group_64108c896a306',
      'title' => 'BLOCK: Content block',
      'fields' => array(
        array(
          'key' => 'field_64108c89be24b',
          'label' => 'Content Block',
          'name' => 'content_block',
          'aria-label' => '',
          'type' => 'wysiwyg',
          'instructions' => '',
          'required' => 0,
          'conditional_logic' => 0,
          'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
          ),
          'default_value' => '',
          'tabs' => 'all',
          'toolbar' => 'full',
          'media_upload' => 1,
          'delay' => 0,
        ),
        array(
          'key' => 'field_641daa7d1be29',
          'label' => 'Link',
          'name' => 'content_link_repeater',
          'aria-label' => '',
          'type' => 'repeater',
          'instructions' => '',
          'required' => 0,
          'conditional_logic' => 0,
          'wrapper' => array(
            'width' => '',
            'class' => '',
            'id' => '',
          ),
          'layout' => 'table',
          'pagination' => 0,
          'min' => 0,
          'max' => 0,
          'collapsed' => '',
          'button_label' => 'Add a Link',
          'rows_per_page' => 20,
          'sub_fields' => array(
            array(
              'key' => 'field_641daaa01be2a',
              'label' => 'Link',
              'name' => 'link',
              'aria-label' => '',
              'type' => 'link',
              'instructions' => '',
              'required' => 0,
              'conditional_logic' => 0,
              'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'return_format' => 'array',
              'parent_repeater' => 'field_641daa7d1be29',
            ),
          ),
        ),
      ),
      'location' => array(
        array(
          array(
            'param' => 'block',
            'operator' => '==',
            'value' => 'acf/single-content-block',
          ),
        ),
      ),
      'menu_order' => 0,
      'position' => 'normal',
      'style' => 'default',
      'label_placement' => 'top',
      'instruction_placement' => 'label',
      'hide_on_screen' => '',
      'active' => true,
      'description' => '',
      'show_in_rest' => 0,
    ) );
    
    
    // Register ACF block with the custom render callback    
    acf_register_block_type( array(
      'name' => 'single_content_block',
      'title' => __( 'Content' ),
      'description' => __( '' ),
      'render_callback' => 'll_content_block_render',
      'icon' => 'editor-alignleft',
      'keywords' => array( 'gallery', 'images', 'slider' ),
      'example' => array( // image preview based from https://allisontarr.com/2021/08/13/custom-previews-for-acf-gutenberg-blocks/
        'attributes' => array(
          'mode' => 'preview',
          'data' => array(
            '_is_preview' => 'true'
          )
        )
      ),
    ) );
    
    
    /**
     * Content Block Callback Function.
     *
     * @param   array $block The block settings and attributes.
     * @param   string $content The block inner HTML (empty).
     * @param   bool $is_preview True during AJAX preview.
     * @param   (int|string) $post_id The post ID this block is saved to.
     */
    function ll_content_block_render( $block, $content = '', $is_preview = false, $post_id = 0 ) {
      if ( ! empty( $block['data']['_is_preview'] ) ) { ?&gt;
        <figure>
          <img src="&lt;?php echo get_stylesheet_directory_uri(); ?&gt;/includes/blocks/block-previews/block-content.jpg"
            alt="Preview of what the Accordion custom block appears minimized">
        </figure>
      &lt;?php } else {
        if ( get_field( 'content_block' ) ) :
    
          $block_data = return_acf_block_id();
          ?&gt;
          <!-- single content block, default 1 column content -->
          <section &lt;?php echo $block_data['id'];
          echo $block_data['label']; ?&gt; class="bg-white section-y-padding ll-container-lg">
            &lt;?php echo get_field( 'content_block' ); ?&gt;
            &lt;?php if ( have_rows( 'content_link_repeater' ) ) : ?&gt;
    
              &lt;?php while ( have_rows( 'content_link_repeater' ) ) :
                the_row(); ?&gt;
    
                &lt;?php
                $link = get_sub_field( 'link' );
                if ( $link ) :
                  $link_url = $link['url'];
                  $link_title = $link['title'];
                  $link_target = $link['target'] ? $link['target'] : '_self';
                  ?&gt;
                  <a href="&lt;?php echo esc_url( $link_url ); ?&gt;" target="&lt;?php echo esc_attr( $link_target ); ?&gt;"
                    class="brand-button secondary-button">
                    &lt;?php echo esc_html( $link_title ); ?&gt;
                  </a>
                &lt;?php endif; ?&gt;
    
              &lt;?php endwhile; ?&gt;
    
            &lt;?php endif; ?&gt;
    
            &lt;?php if ( get_field( 'test_field' ) ) : ?&gt;
              &lt;?php echo get_field( 'test_field' ); ?&gt;
            &lt;?php endif; ?&gt;
    
    
          </section>
          <!-- single content block -->
          &lt;?php
        endif;
      }
    }`
  }
]
}