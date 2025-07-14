export const wpAcfEscapingSanitizing = {
  name: 'Escaping and Sanitizing fields in wordpress and ACF',
  cats: ['WordPress', 'ACF', 'PHP'],
  language: 'php',
  snippet: `
// Escape HTML, replaces special characters with HTML entities
echo '<a href="..." >' . esc_html($link_title) . '</a>';

//Escape Attributes, replaces special characters with HTML entities for use in attributes.
echo '<a href="..." target="' . esc_attr($attr_str) . '">Link</a>';

// Escape URL, replaces special characters with HTML entities for use in URLs.
echo '<a href="' . esc_url($url) . '">Link</a>';

// Escape Text, replaces special characters with HTML entities for use in text.
echo '<p>' . esc_textarea($text) . '</p>';

// sanitize email, removes invalid characters from an email address.
echo '<a href="mailto:' . sanitize_email($email) . '">email@email.com</a>';

// wp_kses, allows only a specific set of HTML tags and attributes.
$allowed_html = array(
    'a' => array(
        'href' => array(),
        'title' => array(),
    ),
    'br' => array(),
    'p' => array(),
);
echo wp_kses($content, $allowed_html);

// sanitiing HTML on shortcodes added to a WYSIWYG field
echo apply_filters('the_content', get_field('content'));
`,
};
