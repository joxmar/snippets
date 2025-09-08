export const cssOnlyTabs = {
  name: 'CSS only tabs, no JS needed',
  cats: ['CSS'],
  // language: 'html',
  //or if multiple files:
  snippet: [
    {
      language: 'html',
      tabName: 'HTML',
      content: `
<!-- NOTE: this is for simple static tabs, you need to know the ids of the content divs -->

<input type="radio" id="tab1" name="tabs" checked>
<label for="tab1">Tab 1</label>
<input type="radio" id="tab2" name="tabs">
<label for="tab2">Tab 2</label>
<input type="radio" id="tab3" name="tabs">
<label for="tab3">Tab 3</label>
<div class="tab-content" id="content1">Content for Tab 1</div>
<div class="tab-content" id="content2">Content for Tab 2</div>
<div class="tab-content" id="content3">Content for Tab 3</div>
      `,
    },
    {
      language: 'css',
      tabName: 'CSS',
      content: `
/* NOTE: this is for simple static tabs, you need to know the ids of the content divs */

input[type="radio"] {
  display: none;
}
label {
  display: inline-block;
  padding: 10px;
  cursor: pointer;
  background: #eee;
  border: 1px solid #ccc;
}
input[type="radio"]:checked + label {
  background: white;
  font-weight: bold;
}
.tab-content {
  display: none;
  padding: 20px;
  border: 1px solid #ccc;
}


#tab1:checked ~ #content1,
#tab2:checked ~ #content2,
#tab3:checked ~ #content3 {
  display: block;
}
      `,
    },
  ],
};
