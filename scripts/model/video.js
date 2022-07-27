class VideoModel {
  constructor(data, photographerData) {
    this._video = data.video;
    this._likes = data.likes;
    this._title = data.title;
    this._isLiked = data.isLiked;
    this._photographer = photographerData;
    this._photographerName = /^\w+/.exec(this._photographer.name);
  }

  isLiked(heart) {
    if (this._isLiked) {
      return heart.setAttribute('style', 'font-weight:900');
    } else {
      return heart.setAttribute('style', 'font-weight:100');
    }
  }
  getMediaCardDOM(index) {
    const picture = `assets/photos/${this._photographerName}/${this._video}`;
    const mediaCard = document.createElement('div');
    mediaCard.setAttribute('class', 'mediaCard');
    const img = document.createElement('video');
    img.setAttribute('src', picture);
    img.setAttribute('alt', this._title);
    img.setAttribute('tabindex', '0');
    img.addEventListener('keyup', (event) => {
      if (event.isComposing || event.keyCode === 13) {
        return lightboxModel.displayLightbox(index);
      }
    });
    img.addEventListener('click', function () {
      lightboxModel.displayLightbox(index);
    });
    const subTitle = document.createElement('div');
    subTitle.setAttribute('class', 'mediaSubTitle');
    const mediaTitle = document.createElement('p');
    mediaTitle.textContent = `${this._title}`;
    const nbLikes = document.createElement('p');
    nbLikes.textContent = this._likes;
    const heart = document.createElement('i');
    heart.setAttribute('class', 'fa-solid fa-heart');
    this.isLiked(heart);
    mediaCard.appendChild(img);
    mediaCard.appendChild(subTitle);
    subTitle.appendChild(mediaTitle);
    subTitle.appendChild(nbLikes);
    subTitle.appendChild(heart);
    return mediaCard;
  }
}
