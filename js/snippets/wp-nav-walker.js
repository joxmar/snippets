export const wpNavWalker = {
  name: 'Wordpress Custom Menu with Nav Walker',
  cats: ['php', 'Wordpress'],
  language: 'php',
  snippet: `
class My_Menu_Walker extends Walker_Nav_Menu {
  // Ensure child detection works for our if statements
  public function display_element($element, &$children_elements, $max_depth, $depth, $args, &$output) {
      $id_field = $this->db_fields['id'];
      $element->has_children = !empty($children_elements[$element->$id_field]);
      parent::display_element($element, $children_elements, $max_depth, $depth, $args, $output);
  }
  // Lets get all the attributes from the menu items from the backend.
  public function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {        
    // 1. Gather Attributes from the menu item on thwe backend
    $atts = array();
    $atts['title']  = ! empty( $item->attr_title ) ? $item->attr_title : '';
    $atts['target'] = ! empty( $item->target )     ? $item->target     : '';
    $atts['rel']    = ! empty( $item->xfn )        ? $item->xfn        : '';
    $atts['href']   = ! empty( $item->url )        ? $item->url        : '';

    $attributes = '';
    foreach ( $atts as $attr => $value ) {
        if ( ! empty( $value ) ) {
            $value = ( 'href' === $attr ) ? esc_url( $value ) : esc_attr( $value );
            $attributes .= ' ' . $attr . '="' . $value . '"';
        }
    }
    
    // Start first LI element at the root of the menu
    $output .= '<li class="' . esc_attr(implode(' ', (array)$item->classes)) . '">';

    // --- LEVEL 0: TOP LEVEL STRUCTURE ---
    if ($depth === 0) {            
        $output .= '<a class="main-link" href="' . esc_url($item->url) . '" ' . $attributes . '>' . $item->title . '</a>';            
    }

    // --- LEVEL 1: SUB-MENU STRUCTURE ---
    if ($depth === 1) {            
        // vv We don't work with the sub-menu ul or lis but with what's inside the li vv
        if(!$item->has_children) { // if the item in this level has children sub-menu  
            // START DIV for element that has children sub-menu              
            $output .= '<div class="sub-menu__content">';
            $output .= '<span class="sub-menu__title">' . $item->title . '</span>'; // not link but span
            // ACF sample text field 
            $acf_sample_text = get_field( 'acf_text', $item );
            if ( ! empty( $acf_sample_text ) ) {
                $output .= '<span class="my-class">' . esc_html( $acf_sample_text ) . '</span>';
            }
            // ACF sample image field
            $menu_image = get_field( 'acf_image', $item );
            if ( $menu_image && is_array( $menu_image ) && ! empty( $menu_image['url'] ) ) {
                $image_url = esc_url( $menu_image['url'] );
                $image_alt = ! empty( $menu_image['alt'] ) ? esc_attr( $menu_image['alt'] ) : '';
                $output   .= '<img class="sub-menu__image" src="' . $image_url . '" alt="' . $image_alt . '">';
            }
            // WE don't close the DIV here because we want the nested sub-menu to be inside this div. Is down below.
        } else { // when it doesn't have children sub-menu
            // then is a link
            $output .= '<a class="sub-link" href="' . esc_url($item->url) . '">'; 
            $output .= '<span class="sub-menu__title">' . $item->title . '</span>';
            // same, we don't close it here because the logic needs to be alongside the closing div above
        }            
    }

    // --- LEVEL 2: DEEP LEVEL STRUCTURE ---
    if ($depth === 2) {                        
        $output .= '<a href="' . esc_url($item->url) . '" class="sub-menu__title" ' . $attributes . '>' . $item->title . '</a>';
    }
  }

  // Close the LI tag properly
  public function end_el(&$output, $item, $depth = 0, $args = null) {
    if ($depth === 1) {
        if(!$item->has_children) {
            $output .= '</div>'; // now we close the div for items that have children sub-menu above
        }
        else {
            $output .= '</a>'; // Close the link for level 1 items
        }
    }
    $output .= "</li>\n"; // close the root LI
  }
}
`,
};
