class PhotographerHeader {
  constructor(photographer) {
    this._photographer = photographer;
    this.addListeners();
    this.displayHeader();
  }

  //LISTENERS
  addListeners() {
    const logo = document.querySelector('.logo');
    logo.addEventListener('keyup', (event) => {
      if (event.isComposing || event.keyCode === 13) {
        return (window.location.href = `/index.html`);
      }
    });
  }
  //RENDER
  async displayHeader() {
    const photographerHeader = document.querySelector('.photograph-header');
    const button = document.querySelector('button');
    const photographerModel = profileFactory(this._photographer);
    const profileDOM = photographerModel.getProfileDOM();
    const profilePhoto = photographerModel.getProfilePhoto();
    photographerHeader.insertBefore(profileDOM, button);
    photographerHeader.appendChild(profilePhoto);
    photographerHeader.querySelector('h5').remove();
  }
}
