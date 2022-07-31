class PhotoModel {
  constructor(data, photographerData) {
    this._image = data.image;
    this._likes = data.likes;
    this._isLiked = data.isLiked;
    this._title = data.title;
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
    const picture = `assets/photos/${this._photographerName}/${this._image}`;
    const mediaCard = document.createElement('div');
    mediaCard.setAttribute('class', 'mediaCard');
    const img = document.createElement('img');
    Object.assign(img, {
      src: picture,
      alt: this._title,
      tabindex: 0,
    });

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
    heart.setAttribute('tabindex', '0');
    heart.setAttribute('class', 'fa-solid fa-heart');
    this.isLiked(heart);
    console.log(this.isLiked(heart));

    mediaCard.appendChild(img);
    mediaCard.appendChild(subTitle);
    subTitle.appendChild(mediaTitle);
    subTitle.appendChild(nbLikes);
    subTitle.appendChild(heart);
    return mediaCard;
  }
}
