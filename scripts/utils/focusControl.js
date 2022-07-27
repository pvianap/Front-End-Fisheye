const focusArray = document.querySelectorAll('[tabindex]');
const focusElement = document.activeElement;
let currentFocus = -1;

// TAB KEY
document.addEventListener('keydown', (event) => {
  if (event.isComposing || event.keyCode === 9) {
    if (currentFocus < document.querySelectorAll('[tabindex]').length - 1) {
      currentFocus++;
      return;
      //   console.log(currentFocus);
    }
    // else console.log(currentFocus);
  }
});

// RIGHT KEY
document.addEventListener('keydown', (event) => {
  if (event.isComposing || event.keyCode === 39) {
    if (currentFocus < document.querySelectorAll('[tabindex]').length - 1) {
      currentFocus++;
      //   console.log(currentFocus);
      return document.querySelectorAll('[tabindex]')[currentFocus].focus();
    }
    // else console.log(currentFocus);
  }
});

// LEFT KEY
document.addEventListener('keydown', (event) => {
  if (event.isComposing || event.keyCode === 37) {
    if (currentFocus > 0) {
      currentFocus--;
      //   console.log(currentFocus);
      return document.querySelectorAll('[tabindex]')[currentFocus].focus();
    }
    // else console.log(currentFocus);
  }
});
