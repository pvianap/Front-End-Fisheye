function mediaFactory(data, photographerData) {
  const { image, likes, video, title } = data;
  const photographer = photographerData;
  const photographerName = /^\w+/.exec(photographer.name);

  function getMediaCardDOM() {
    if (image) {
      picture = `assets/photos/${photographerName}/${image}`;
    }

    if (video) {
      picture = `assets/photos/${photographerName}/${video}`;
    }

    const mediaCard = document.createElement('div');
    mediaCard.setAttribute('class', 'mediaCard');

    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.setAttribute('alt', title);

    const subTitle = document.createElement('div');
    subTitle.setAttribute('class', 'mediaSubTitle');

    const mediaTitle = document.createElement('p');
    mediaTitle.textContent = `${title}`;

    const nbLikes = document.createElement('p');
    nbLikes.textContent = likes;

    const heart = document.createElement('i');
    heart.setAttribute('class', 'fa-solid fa-heart');

    mediaCard.appendChild(img);
    mediaCard.appendChild(subTitle);
    subTitle.appendChild(mediaTitle);
    subTitle.appendChild(nbLikes);
    subTitle.appendChild(heart);
    return mediaCard;
  }
  return { getMediaCardDOM };
}
