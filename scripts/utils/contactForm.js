class ContactModal {
  constructor() {
    this.$main = document.querySelector('main');
    this.$body = document.querySelector('body');
    this.$modal = document.querySelector('#contact_modal');
    this.$contactButton = document.querySelector('.contact_button');
    this.$closeButton = document.querySelector('.modal header img');
    this.addListener();
  }

  openModal() {
    this.$main.setAttribute('aria-hidden', 'true');
    this.$modal.setAttribute('aria-hidden', 'false');
    this.$modal.style.display = 'block';
    this.$closeButton.focus();
    this.contactHeaderDOM();
  }

  closeModal() {
    this.$main.setAttribute('aria-hidden', 'false');
    this.$modal.setAttribute('aria-hidden', 'true');
    this.$modal.style.display = 'none';
    this.$contactButton.focus();
  }

  contactHeaderDOM() {
    const name = document.querySelector('.photographerName');
    name.innerText = photographer.name;
  }

  addListener() {
    this.$contactButton.addEventListener('click', (e) => {
      this.openModal();
    });
    this.$closeButton.addEventListener('click', (e) => {
      this.closeModal();
    });
  }
}

new ContactModal();

// function displayModal() {
//   const modal = document.getElementById('contact_modal');
//   modal.style.display = 'block';

//   contactHeaderDOM();
// }

// function closeModal() {
//   const modal = document.getElementById('contact_modal');
//   modal.style.display = 'none';
// }

// function contactHeaderDOM() {
//   const name = document.querySelector('.photographerName');
//   name.innerText = photographer.name;
// }

function submitInputs() {
  const name = document.querySelector('#name').value;
  const last = document.querySelector('#last').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  const mailContent = [{ name, last, email, message }];
  console.log(mailContent);
  return mailContent;
}

function cleanInputs() {
  document.querySelectorAll('input').forEach((e) => {
    e.value = '';
  });
}

function formSubmit() {
  const modal = document.querySelector('.modal');
  modal.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    submitInputs();
    cleanInputs();
    closeModal();
  });
}

formSubmit();
