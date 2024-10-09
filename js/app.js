import { gutenAddCSS } from './snippets/wp-add-css-to-gutenberg.js';
import { autoLogin } from './snippets/wp-auto-login.js';
import { jsGetURL } from './snippets/js-get-url-parameters.js';
import { gutBlocksToDisplay } from './snippets/wp-gutenberg-select-blocks-to-display.js';
import { mailchimpSuccess } from './snippets/mailchimp-success-callback.js';
import { jsCreateElement } from './snippets/js-create-element.js';
import { jsaddRemoveHasClass } from './snippets/js-add-remove-class.js';
import { jsGetPrevNextSibling } from './snippets/js-get-previous-next-sibling.js';
import { jsCopyToClipboard } from './snippets/js-copy-text-to-clipboard.js';
import { wpLoadArchivePlugin } from './snippets/wp-plugin-add-archive-templatephp.js';
import { npmDropboxIgnoreNodeModules } from './snippets/npm-dropbox-ignore-node-modules.js';
import { gutAcfColorRadios } from './snippets/wp-acf-radio-color-picker.js';
import { registerAcfBlockTemplate } from './snippets/wp-registrer-ACF-block-template.js';
import { wpGetAllCpt } from './snippets/wp-get-all-registered-cpt.js';
import { wpChangeLoginLogo } from './snippets/wp-change-Login-logo-and-link-URL.js';
import { wpBlogSearchArchiveShortcodes } from './snippets/wp-create-blog-search-archive-loop-shortcodes.js';
import { wpCustomizeComments } from './snippets/wp-customize-comment-fields.js';
import { wpListPostCptCategories } from './snippets/wp-list-post-cpt-categories.js';
import { gutenbergResizableBar } from './snippets/wp-gutenberg-resizable-sidebar.js';
import { overrideAcfWysiwygColors } from './snippets/wp-override-acf-wysiwyg-colors.js';
import { wpAcfLink } from './snippets/wp-acf-links.js';
import { updateArrays } from './snippets/js-updating-arrays.js';
import { jsforloop } from './snippets/js-for-loop.js';
import { jsWhileLoop } from './snippets/js-while-loop.js';
import { diviFormSenderEmail } from './snippets/wp-divi-change-form-sender.js';
import { phpAjaxImgUploader } from './snippets/php-js-image-uploader.js';
import { wpAcfImg } from './snippets/wp-acf-image-field.js';
import { jsParallax } from './snippets/js-simple-parallax-effect.js';
import { cssAnimateSvgStroke } from './snippets/css-animate-svg-stroke.js';
import { wpApiAccessLogin } from './snippets/wp-api-access-w-credentials.js';
import { acfFrontendForm } from './snippets/wp-acf-front-end-form.js';
import { wpUploadMultipleCategories } from './snippets/wp-create-multiple-categories.js';
import { wpSearchQueries } from './snippets/wp-search-forms.js';
import { cssDynamicNumbering } from './snippets/css-ul-dynamic-numbering-counter.js';
import { hamburgerBtn } from './snippets/css-simple-animate-hamburher-button.js';

// add snippet into the array
let allSnippets = [
  gutenAddCSS,
  jsGetURL,
  autoLogin,
  gutBlocksToDisplay,
  mailchimpSuccess,
  jsCreateElement,
  jsaddRemoveHasClass,
  jsGetPrevNextSibling,
  jsCopyToClipboard,
  wpLoadArchivePlugin,
  npmDropboxIgnoreNodeModules,
  gutAcfColorRadios,
  registerAcfBlockTemplate,
  wpGetAllCpt,
  wpChangeLoginLogo,
  wpBlogSearchArchiveShortcodes,
  wpCustomizeComments,
  wpListPostCptCategories,
  gutenbergResizableBar,
  overrideAcfWysiwygColors,
  wpAcfLink,
  updateArrays,
  jsforloop,
  jsWhileLoop,
  diviFormSenderEmail,
  phpAjaxImgUploader,
  wpAcfImg,
  jsParallax,
  cssAnimateSvgStroke,
  wpApiAccessLogin,
  acfFrontendForm,
  wpUploadMultipleCategories,
  wpSearchQueries,
  cssDynamicNumbering,
  hamburgerBtn,
];

// we will use this array to save the snippet names and use it on autocomplete
let snippetNames = [];

// create snippet categories
let snippetCategories = [];

// start tab counter
let tabsCounter = 0;

// build snippets into the DOM
let snippetsContainer = document.getElementById('snippets-container');

for (let i = 0; i < allSnippets.length; i++) {
  // get the snippet details from object
  const snippetName = allSnippets[i].name;
  const snippetCats = allSnippets[i].cats.map((word) => word.toLowerCase());
  const snippetLanguage = allSnippets[i].language;
  const theSnippet = allSnippets[i].snippet;

  // loop and add categories to main categories array
  for (let i = 0; i < snippetCats.length; i++) {
    if (!snippetCategories.includes(snippetCats[i])) {
      snippetCategories.push(snippetCats[i]);
    }
  }

  // push to snippet names list for auto complete
  snippetNames.push(snippetName);

  // create snippet container
  const snippetContainer = document.createElement('article');
  snippetContainer.classList.add(
    'snippet-container',
    'bg-white',
    'rounded-xl',
    'drop-shadow-2xl',
    'mt-10'
  );
  snippetContainer.setAttribute('data-categories', snippetCats);
  snippetContainer.setAttribute('id', snippetName.replace(/ /g, '-'));

  // snippet details
  const snippetdetails = document.createElement('div');
  snippetdetails.classList.add('p-10');

  const snippetdetailsCats = document.createElement('div');
  snippetdetailsCats.classList.add('categories');
  const snippetdetailsCatsText = document.createTextNode(
    snippetCats.join(', ')
  );
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
  const snippetPreTag = document.createElement('pre');
  snippetPreTag.classList.add('relative');
  const snippetCodeTag = document.createElement('code');
  snippetCodeTag.setAttribute('data-language', snippetLanguage);
  const copySnippetBtn = document.createElement('button');
  copySnippetBtn.classList.add('copy-snippet', 'rounded-md', 'py-2', 'px-4');
  copySnippetBtn.textContent = 'Copy';

  // if is single snippet or multiple
  if (typeof theSnippet === 'string') {
    snippetCodeTag.innerHTML = theSnippet;
    snippetPreTag.appendChild(snippetCodeTag);
    snippetPreTag.appendChild(copySnippetBtn);

    snippetCodeContainer.appendChild(snippetPreTag);
  } else {
    const [tabBtnsContainer, tabsContainer] = buildTabs(
      theSnippet,
      snippetLanguage
    );
    snippetCodeContainer.appendChild(tabBtnsContainer);
    snippetCodeContainer.appendChild(tabsContainer);
  }

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
  menuCategoryItemBtn.classList.add(
    'text-bcolor-3',
    'hover:text-bcolor-2',
    'select-cat'
  );

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
categoryBtn.forEach((el) => {
  // add click event listener
  el.addEventListener('click', function () {
    // get this buttons category data-attr
    let elCategoryType = el.getAttribute('data-category-type');
    // loop through all the snippet containers
    snippetContainers.forEach((element) => {
      // get current nippet container categories in the data attr
      let containerCats = element.getAttribute('data-categories');
      // remove hide class to clear all snippet containers
      element.classList.remove('hide-snippet');
      // search the button's category inside the snippet container categories
      if (!containerCats.includes(elCategoryType)) {
        //if value is found true
        element.classList.add('hide-snippet');
      }
    });
  });
});

// clear all button
const showAllSnippets = document.getElementById('show-all');
showAllSnippets.addEventListener('click', function () {
  snippetContainers.forEach((element) => {
    element.classList.remove('hide-snippet');
  });
});

// initiate auto complete
const autoCompleteJS = new autoComplete({
  selector: '#autocomplete',
  placeHolder: 'Search for code...',
  data: {
    src: snippetNames,
  },
  resultItem: {
    highlight: 'autoComplete_highlight',
    selected: 'autoComplete_selected',
  },
});

document
  .querySelector('#autocomplete')
  .addEventListener('selection', function (event) {
    // clear any hidden snippets
    snippetContainers.forEach((element) => {
      element.classList.remove('hide-snippet');
    });

    let codeName = event.detail.selection.value;
    let codeAnchor = document.getElementById(codeName.replace(/ /g, '-'));
    let headerOffset = 90;
    let elementPosition = codeAnchor.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      //  behavior: "smooth"
    });
  });

function buildTabs(snippet, language) {
  // loop and get all tabNames
  const tabBtnsContainer = document.createElement('ul');
  const tabsContainer = document.createElement('div');
  tabsContainer.classList.add('tabs-container');
  tabBtnsContainer.classList.add('tab-btns', 'flex', 'px-10', 'gap-8');
  for (let i = 0; i < snippet.length; i++) {
    // create tabs elemens with ul li and button
    const tabsLiContainer = document.createElement('li');
    const tabBtn = document.createElement('button');
    tabBtn.classList.add('py-4');
    if (i == 0) {
      tabBtn.classList.add('font-bold');
    }
    tabBtn.setAttribute('data-tab-content', 'tab-' + tabsCounter);
    tabBtn.textContent = snippet[i].tabName;
    tabsLiContainer.appendChild(tabBtn);
    tabBtnsContainer.appendChild(tabsLiContainer);
    const copySnippetBtn = document.createElement('button');
    copySnippetBtn.classList.add('copy-snippet', 'rounded-md', 'py-2', 'px-4');
    copySnippetBtn.textContent = 'Copy';

    // create tab content
    const snippetPreTag = document.createElement('pre');

    snippetPreTag.classList.add('tab-container');
    //add class hidden to all items except the first one
    if (i > 0) {
      snippetPreTag.classList.add('hidden');
    }
    const snippetCodeTag = document.createElement('code');
    snippetCodeTag.setAttribute('data-language', language);
    snippetCodeTag.innerHTML = snippet[i].content;
    snippetPreTag.appendChild(snippetCodeTag);
    snippetPreTag.appendChild(copySnippetBtn);
    snippetPreTag.setAttribute('id', 'tab-' + tabsCounter);
    tabsContainer.appendChild(snippetPreTag);
    tabsCounter++;
  }
  return [tabBtnsContainer, tabsContainer];
}

// create tabs functionality
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btns button');
  const tabContent = document.querySelectorAll('.tab-container');

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // we should only focus on the buttons in the same container
      const parentLi = button.parentNode;
      const parentUl = parentLi.parentNode;
      const siblingTabsContainer = parentUl.nextElementSibling;

      // remove bold from all buttons inside parentUl
      parentUl.querySelectorAll('button').forEach((btn) => {
        btn.classList.remove('font-bold');
      });

      button.classList.add('font-bold');

      const target = button.getAttribute('data-tab-content');
      siblingTabsContainer.querySelectorAll('.tab-container').forEach((tab) => {
        tab.classList.add('hidden');
        if (tab.getAttribute('id') === target) {
          tab.classList.remove('hidden');
        }
      });
    });
  });
}

initTabs();

function copySnippetFunction() {
  const copySnippetBtns = document.querySelectorAll('.copy-snippet');
  copySnippetBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      let codeContainer = this.previousElementSibling;
      var r = document.createRange();
      r.selectNode(codeContainer);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(r);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();

      setTimeout(() => {
        btn.textContent = 'Copied!';
        setTimeout(() => {
          btn.textContent = 'Copy';
        }, 1000);
      }, 100);
    });
  });
}

window.onload = copySnippetFunction;
