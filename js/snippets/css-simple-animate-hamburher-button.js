export const hamburgerBtn = {
  name: 'Simple Animate Hamburger Button',
  cats: ['javascript', 'jQuery', 'css'],
  language: 'html',
  snippet: [
    {
      language: 'html',
      tabName: 'HTML',
      content: `
<button class="mobile-menu">
  <span></span>
  <span></span>
  <span></span>
</button>
      `,
    },
    {
      language: 'css',
      tabName: 'CSS',
      content: `
/* Hamburger btn */
.mobile-menu {
  position: relative;
  width: 30px;
  padding: 0;
  background: transparent;
  height: 20px;
  border: none;
  transition: all 0.3s ease-in-out;
  display: none;
  z-index: 10;
}

.mobile-menu span {
  display: block;
  height: 5px;
  width: 100%;
  border-radius: 0;
  transition: all 0.3s ease-in-out;
  -webkit-transform-origin: left center;
  transform-origin: left center;
  position: absolute;
  opacity: 1;
  background: black;
}
.mobile-menu span:nth-child(1) {
  top: 0;
}

.mobile-menu span:nth-child(2) {
  top: 8px;
}

.mobile-menu span:nth-child(3) {
  top: 16px;
}

.mobile-menu.close-nav span:nth-child(2) {
  opacity: 0;
}

.mobile-menu.close-nav span:first-child,
.mobile-menu.close-nav span:last-child {
  position: absolute;
}

.mobile-menu.close-nav span:first-child {
  transform: rotate(45deg);
  top: 0;
}

.mobile-menu.close-nav span:last-child {
  transform: rotate(-45deg);
  top: 21px;
}

.mobile-menu:focus {
  border: none;
  box-shadow: none;
  outline: none;
  background: none;
}

.mobile-menu:hover {
  background: none;
}

@media screen and (max-width: 767px) {
  .mobile-menu {
    display: block;
  }
}
      `,
    },
    {
      language: 'javascript',
      tabName: 'Javascript',
      content: `
// Vanilla JS
document.querySelector('.mobile-menu').addEventListener('click', function () {
  this.classList.toggle('close-nav');

  // your code here
});

//jQuery
jQuery('.mobile-menu').on('click', function () {
  jQuery(this).toggleClass('close-nav');
  
  // your code here
});
  `,
    },
  ],
};
