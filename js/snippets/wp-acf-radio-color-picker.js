export const gutAcfColorRadios = {
name : "ACF Create Gutenberg-Like color picker with radios",
cats : ['PHP', 'Wordpress', 'ACF'],
language : "php",
snippet : `
//based on https://whiteleydesigns.com/acf-gutenberg-color-picker/
//in functions.php
function my_acf_admin_head() {
// give a class name to the field group in ACF so you only target that one, in this example the radio group calss is .aaa-colors
  ?&gt;
  &lt;style type="text/css"&gt;  

  /* ACF color selection radio buttons */
  .wp-admin .acf-block-component .aaa-colors ul.acf-radio-list {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-left: 0;
  }
  .wp-admin .acf-block-component .aaa-colors ul.acf-radio-list li {
    margin-right: 0;
    display: flex;
  }
  .wp-admin .acf-block-component .aaa-colors ul.acf-radio-list li label {
    width: 28px;
    height: 28px;
    position: relative;
    margin-right: 10px;
    margin-bottom: 10px;
    color: #fff;
  }
  .wp-admin .acf-block-component .aaa-colors ul.acf-radio-list li label input[type=radio] {
    position: absolute;
    top: 0;
    left: 0;
    width: 28px;
    height: 28px;
  }
  .wp-admin .acf-block-component .aaa-colors ul.acf-radio-list li label input[type=radio]:checked::before {
    content: "";
    font-family: dashicons;
    width: 20px;
    height: 20px;
    background-color: transparent;
    font-size: 20px;
    margin: 2px;
    color: #fff;
  }

  &lt;?php 
    $aaa_color_field = get_field_object('field_key_not_name');
    $aaa_color_field_choices = $aaa_color_field['choices'];

    if (!empty($aaa_color_field_choices)) {
        foreach ($aaa_color_field_choices as $value =&gt; $label) {
          $aaa_radio_class = '.wp-admin .acf-block-component .aaa-colors ul.acf-radio-list li label input[type=radio][value="' . $value . '"] {';         
          $aaa_radio_class .= 'background-color: ' . $value . ';';
          $aaa_radio_class .= '}';
          echo $aaa_radio_class;
        }
    }
  ?&gt;
`
}