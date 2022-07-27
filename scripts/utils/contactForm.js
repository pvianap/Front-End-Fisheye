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
