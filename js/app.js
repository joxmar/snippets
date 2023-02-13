import { gutenAddCSS } from "./snippets/wp-add-css-to-gutenberg.js";
import { autoLogin } from "./snippets/wp-auto-login.js";
import { jsGetURL } from "./snippets/js-get-url-parameters.js";
import { gutBlocksToDisplay } from "./snippets/wp-gutenberg-select-blocks-to-display.js";
import { mailchimpSuccess } from "./snippets/mailchimp-success-callback.js";


// add snippet into the array
let allSnippets = [gutenAddCSS,jsGetURL,autoLogin,gutBlocksToDisplay, mailchimpSuccess];

// we will use this array to save the snippet names and use it on autocomplete
let snippetNames = [];

// create snippet categories
let snippetCategories = [];


// build snippets into the DOM
let snippetsContainer = document.getElementById('snippets-container');

for (let i = 0; i < allSnippets.length; i++) {
  // get the snippet details from object
  const snippetName = allSnippets[i].name;
  const snippetCats = allSnippets[i].cats.map(word => word.toLowerCase());
  const snippetLanguage = allSnippets[i].language;
  const theSnippet = allSnippets[i].snippet;

  
  
  // loop and add categories to main categories array
  for (let i = 0; i < snippetCats.length; i++) {
    if(!snippetCategories.includes(snippetCats[i])){
      snippetCategories.push(snippetCats[i]);
    };
  }
  



  // push to snippet names list for auto complete
  snippetNames.push(snippetName)



  // create snippet container
  const snippetContainer = document.createElement('article');
  snippetContainer.classList.add('snippet-container', 'bg-white', 'rounded-xl', 'drop-shadow-2xl', 'mt-10');
  snippetContainer.setAttribute('data-categories', snippetCats);
  snippetContainer.setAttribute('id', snippetName.replace(/ /g,'-'));


  
  // snippet details
  const snippetdetails = document.createElement('div');
  snippetdetails.classList.add('p-10');

  const snippetdetailsCats = document.createElement('div');
  snippetdetailsCats.classList.add('categories');
  const snippetdetailsCatsText = document.createTextNode(snippetCats.join(' '));
  snippetdetailsCats.appendChild(snippetdetailsCatsText);

  const snippetdetailsName = document.createElement('h2');
  snippetdetailsName.classList.add('snippet-title');
  const snippetdetailsNameText = document.createTextNode(snippetName);
  snippetdetailsName.appendChild(snippetdetailsNameText);
  
  snippetdetails.appendChild(snippetdetailsCats);
  snippetdetails.appendChild(snippetdetailsName);



  // snippet code
  const snippetCodeContainer = document.createElement('div');
  snippetCodeContainer.classList.add('code');

  const snippetCodePre = document.createElement('pre');
  const snippetCodeTag = document.createElement('code');
  snippetCodeTag .setAttribute('data-snippet-name', snippetLanguage);
  snippetCodeTag.innerHTML = theSnippet;

  snippetCodePre.appendChild(snippetCodeTag);
  snippetCodeContainer.appendChild(snippetCodePre);


  // now append details to the snippet container
  snippetContainer.appendChild(snippetdetails);
  snippetContainer.appendChild(snippetCodeContainer);

  // and finally to the main container on the DOM
  snippetsContainer.appendChild(snippetContainer);
  
}



// buil setup categories sidebar
let menuList = document.getElementById('cat-links');

for (let i = 0; i < snippetCategories.length; i++) {
  // create li
  const menuCategoryItem = document.createElement('li');
  menuCategoryItem.classList.add('mt-4');

  // create button
  const menuCategoryItemBtn = document.createElement('button');
  menuCategoryItemBtn.setAttribute('data-category-type', snippetCategories[i]);
  menuCategoryItemBtn.classList.add('text-bcolor-3','hover:text-bcolor-2', 'select-cat');

  // create and add category text to button
  const menuCategoryItemText = document.createTextNode(snippetCategories[i]);
  menuCategoryItemBtn.appendChild(menuCategoryItemText);

  // add button to li
  menuCategoryItem.appendChild(menuCategoryItemBtn);

  // add li to ul
  menuList.appendChild(menuCategoryItem);
  
}

// add event to cat links
const categoryBtn = document.querySelectorAll('.select-cat');
const snippetContainers = document.querySelectorAll('.snippet-container');

// go through each button
categoryBtn.forEach(el => {
  // add click event listener
  el.addEventListener('click', function(){
    // get this buttons category data-attr
    let elCategoryType = el.getAttribute('data-category-type');
    // loop through all the snippet containers
    snippetContainers.forEach(element => {
      // get current nippet container categories in the data attr
      let containerCats = element.getAttribute('data-categories')
      // remove hide class to clear all snippet containers 
      element.classList.remove('hide-snippet');
      // search the button's category inside the snippet container categories
      if(!containerCats.includes(elCategoryType)){ //if value is found true
        element.classList.add('hide-snippet');
      }
    });
  })
});


// initiate auto complete
const autoCompleteJS = new autoComplete({ 
  selector: "#autocomplete",
  placeHolder: "Search for code...",
  data: {
    src: snippetNames
  },
  resultItem: {
    highlight: "autoComplete_highlight",
    selected: "autoComplete_selected"
  }
 });

 document.querySelector("#autocomplete").addEventListener("selection", function (event) {

  // clear any hidden snippets
  snippetContainers.forEach(element => {
    element.classList.remove('hide-snippet');
  });

  let codeName = event.detail.selection.value;
  let codeAnchor = document.getElementById(codeName.replace(/ /g, '-'));
  let headerOffset = 90;
  let elementPosition = codeAnchor.getBoundingClientRect().top;
  let offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });

});