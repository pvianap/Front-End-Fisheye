function displayModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'block';
  contactHeaderDOM();
}

function closeModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'none';
}

function contactHeaderDOM() {
  const xElement = document.querySelector('.modal form');
  const name = document.createElement('h2');
  name.setAttribute('class', 'photographerName');
  name.innerText = photographer.name;
  if (document.querySelector('.photographerName') === null) {
    xElement.parentNode.insertBefore(name, xElement);
  }
}

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
