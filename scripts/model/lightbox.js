class LightboxModel {
  constructor(mediaData, photographer) {
    this._key;
    this._mediaData = mediaData;
    this._photographer = photographer;
  }
  getLightCardDOM() {
    const card = new mediaFactory(mediaData[this._key], photographer);
    this._result = card.getMediaCardDOM();
    if (!this._result.querySelector('img')) {
      this._result.querySelector('video').setAttribute('controls', 'controls');
    }
    this._result.querySelector('.mediaSubTitle').remove();
    return this._result;
  }

  displayLightbox(key) {
    this._key = key;
    this.openLightbox();
    const result = this.getLightCardDOM();
    const aside = document.querySelector('.aside_right');
    aside.parentNode.insertBefore(result, aside);
    document.querySelector('.lightbox_modal .mediaCard').firstChild.focus();
  }

  openLightbox() {
    document.querySelector('.lightbox_modal').style.display = 'flex';
  }
  closeLightbox() {
    document.querySelector('.lightbox_modal').style.display = 'none';
    document.querySelector('.lightbox_modal .mediaCard').remove();
  }
  nextLightbox() {
    if (this._key < this._mediaData.length - 1) {
      document.querySelector('.lightbox_modal .mediaCard').remove();
      this._key++;
      this.displayLightbox(this._key);
    }
  }
  beforeLightbox() {
    if (this._key > 0) {
      document.querySelector('.lightbox_modal .mediaCard').remove();
      this._key--;
      this.displayLightbox(this._key);
    }
  }
}

// LISTENERS LIGHTBOX

// QUIT BUTTON
const closeBtn = document.querySelector('.aside_right .fa-x');
closeBtn.addEventListener('click', function () {
  lightboxModel.closeLightbox();
});

document.addEventListener('keyup', (event) => {
  if (event.isComposing || event.keyCode === 27) {
    return lightboxModel.closeLightbox();
  }
});

// RIGHT BUTTON
document.addEventListener('keyup', (event) => {
  if (event.isComposing || event.keyCode === 39) {
    return lightboxModel.nextLightbox();
  }
});

document
  .querySelector('.fa-angle-right')
  .addEventListener('click', function () {
    lightboxModel.nextLightbox();
  });

// LEFT BUTTON
document.addEventListener('keyup', (event) => {
  if (event.isComposing || event.keyCode === 37) {
    return lightboxModel.beforeLightbox();
  }
});
