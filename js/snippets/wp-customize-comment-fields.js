export const wpCustomizeComments = {
name : "Add or customize Wordpress comment fields",
cats : ['php', 'wordpress'],
language : "php",
snippet : [
  {
    tabName : 'functions.php',
    content: `
    // custom comments
    // Modify comment form fields and add new field
    function custom_comment_form_fields( $fields ) {
      //update existing fields
      $fields['author'] = '<p class="comment-form-author"><label for="author">Initials <span class="required">*</span></label><input id="author" name="author" type="text" value="' . esc_attr( $commenter['comment_author'] ) . '" required maxlength="3"/></p>';
    
      //add new field
      $fields['city'] = '<p class="comment-form-city"><label for="city">City</label><input id="city" name="city" type="text" value="' . esc_attr( $commenter['comment_city'] ) . '" /></p>';
    
      //remove existing fields
      unset( $fields['email'] );
      unset( $fields['url'] );
    
      return $fields;
    }
    add_filter( 'comment_form_default_fields', 'custom_comment_form_fields' );
    
    
    // Save new field field value (i.e. city)
    function save_comment_city( $comment_id ) {
      if ( isset( $_POST['city'] ) ) {
        $city = sanitize_text_field( $_POST['city'] );
        add_comment_meta( $comment_id, 'city', $city );
      }
    }
    add_action( 'comment_post', 'save_comment_city' );
    
    
    
    //edit coment field labels
    function custom_comment_form_defaults( $defaults ) {
      $defaults['comment_notes_before'] = '<p class="comment-notes">' . __( 'Your feedback is appreciated!', 'textdomain' ) . '</p>';
      $defaults['comment_field'] = '<p class="comment-form-comment"><label for="comment">' . __( 'what do you wanna know?', 'textdomain' ) . '</label><textarea id="comment" name="comment" cols="45" rows="8" aria-required="true"></textarea></p>';
      $defaults['label_submit'] = __( 'Send Feedback', 'textdomain' );
      return $defaults;
    }
    add_filter( 'comment_form_defaults', 'custom_comment_form_defaults' );`
  },
  {
    tabName : 'comments.php',
    content: `&lt;?php

    // Display comments with custom format
    function custom_comment_display( $comment, $args, $depth ) {
      $initials = get_comment_author();
      $city = get_comment_meta( get_comment_ID(), 'city', true );
      $comment_text = get_comment_text();
      ?&gt;
    
      <li class="comment">
        <div class="comment-author">
          &lt;?php echo $initials; ?&gt;
        </div>
        &lt;?php if ( $city ) : ?&gt;
          <div class="comment-city">
            &lt;?php echo $city; ?&gt;
          </div>
        &lt;?php endif; ?&gt;
        <div class="comment-text">
          &lt;?php echo $comment_text; ?&gt;
        </div>
      </li>
    
      &lt;?php
    }
    
    if ( have_comments() ) :
      ?&gt;
      <div class="comments">
        <h2 class="comments-title">
          &lt;?php comments_number(); ?&gt;
        </h2>
        <ul>
          &lt;?php wp_list_comments( array(
            'callback' => 'custom_comment_display'
          ) ); ?&gt;
        </ul>
      </div>
    &lt;?php endif; ?&gt;
    
    
    &lt;?php
    comment_form();
    ?&gt;`
  },
  {
    tabName : 'page.php',
    content: `
    //include commnets in page
    comments_template();
    `
  }
]
}