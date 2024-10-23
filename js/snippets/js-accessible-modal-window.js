export const accessibleModalWindow = {
  name: 'Accessible Modal Window with Focus Trap',
  cats: ['javascript', 'accessibility', 'css'],
  language: 'html',
  snippet: [
    {
      language: 'html',
      tabName: 'html',
      content: `
<button class="show-modal">Show modal 1</button>

<div class="overlay hidden" aria-hidden="true">
  <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <button class="close-modal" aria-label="Close modal">&times;</button>
    <h1 id="modal-title">I'm a modal window 😍</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum. <br>
      <a href="#">CTA linke</a>
    </p>
  </div>
</div>
`,
    },
    {
      language: 'css',
      tabName: 'CSS',
      content: `
.hidden {
  opacity: 0;
  visibility: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 5;
  transition: all 0.1s ease-in-out;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 70%;
  transition: all 0.3s ease-in-out;
  background-color: white;
  padding: 6rem;
  border-radius: 5px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  z-index: 10;
  opacity: 1;
}

.overlay.hidden .modal {
  transform: translate(-50%, -50%) scale(0.8);
  opacity: 0;
}

.close-modal {
  position: absolute;
  top: 1.2rem;
  right: 2rem;
  font-size: 5rem;
  color: #333;
  cursor: pointer;
  border: none;
  background: none;
}

`,
    },
    {
      language: 'javascript',
      tabName: 'Javascript',
      content: `
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //  trigger modal from multipe btns

// open and close modal function
const openCloseModal = function (e) {
  overlay.classList.toggle('hidden');
  // overlay toggle aria-hidden
  overlay.setAttribute('aria-hidden', overlay.classList.contains('hidden'));

  // if opening, focus on the modal
  if (!modal.classList.contains('hidden')) {
    setTimeout(() => {
      btnCloseModal.focus();
    }, 100);
  }
};

// CLICK EVENTS

// attach  openclosemodal to all buttons
btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openCloseModal);
});

// attach close modal to close button
btnCloseModal.addEventListener('click', openCloseModal);

// attach close modal to overlay only and not the children
overlay.addEventListener('click', function (e) {
  if (e.target === overlay) {
    openCloseModal();
  }
});

// close modal on escape key press
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
    openCloseModal();
  }
});

// trapfocus on all elements inside the modal
const modalElements = modal.querySelectorAll('button, a, input, textarea');
const firstElement = modalElements[0];
const lastElement = modalElements[modalElements.length - 1];

document.addEventListener('keydown', function (e) {
  if (e.key === 'Tab' && !overlay.classList.contains('hidden')) {
    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  }
});
      `,
    },
  ],
};
