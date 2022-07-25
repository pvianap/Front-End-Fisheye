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
    this._result.querySelector('i').remove();
    this._result.querySelectorAll('p')[1].remove();
    return this._result;
  }

  displayLightbox(key) {
    this._key = key;
    this.openLightbox();
    const result = this.getLightCardDOM();
    const aside = document.querySelector('.aside_right');

    return aside.parentNode.insertBefore(result, aside);
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
      console.log(this._key);
      this.displayLightbox(this._key);
    } else {
    }
  }
  beforeLightbox() {
    if (this._key > 0) {
      document.querySelector('.lightbox_modal .mediaCard').remove();
      this._key--;
      console.log(this._key);
      this.displayLightbox(this._key);
    } else {
    }
  }
}

// LISTENERS LIGHTBOX

document
  .querySelector('.aside_right .fa-x')
  .addEventListener('click', function () {
    lightboxModel.closeLightbox();
  });

document
  .querySelector('.fa-angle-right')
  .addEventListener('click', function () {
    lightboxModel.nextLightbox();
  });

document.querySelector('.fa-angle-left').addEventListener('click', function () {
  lightboxModel.beforeLightbox();
});
