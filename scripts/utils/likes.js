function addLikes(index) {
  mediaData[index].likes++;
  console.log(mediaData[index].likes);
}

class Likes {
  constructor(isLiked) {
    this._isLiked = isLiked;
  }
  like(index) {
    if (mediaData[index].isLiked == false) {
      mediaData[index].likes++;
      mediaData[index].isLiked = true;
      document
        .querySelectorAll('.mediaCard .fa-solid')
        [index].setAttribute('style', 'font-weight:900');
      console.log(mediaData[index].likes);
    } else {
      mediaData[index].likes--;
      mediaData[index].isLiked = false;
      document
        .querySelectorAll('.mediaCard .fa-solid')
        [index].setAttribute('style', 'font-weight:100');
      console.log(mediaData[index].likes);
    }
  }
}
