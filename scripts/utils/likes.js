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

// CURRENT LIKES
var hearts;
function refreshLikes() {
  hearts = document.querySelectorAll('.mediaCard i');
  var likes = new Likes(mediaData.isLiked);
  hearts.forEach((heart, index) => {
    heart.addEventListener('click', function () {
      likes.like(index);
      mediaDisplay();
    });
    heart.addEventListener('keyup', (event) => {
      if (event.isComposing || event.keyCode === 13) {
        likes.like(index), mediaDisplay();
      }
    });
  });
}

// LIKE BOX

class LikeBox {
  constructor(photographer, mediaData) {
    this._price = photographer.price;
    this._mediaData = mediaData;
    this._totalLikes = this.totalLikes(this._mediaData);
    this.likeBoxDom(this._totalLikes, this._price);
  }

  clearLikeBox() {
    const $likeBox = document.querySelector('.likeBox');
    $likeBox.innerHTML = '';
  }

  totalLikes(mediaData) {
    let total = 0;
    mediaData.forEach((media) => (total = total + media.likes));
    return total;
  }

  likeBoxDom(totalLikes, price) {
    this.clearLikeBox();
    const $totalLikes = document.createElement('p');
    $totalLikes.innerText = totalLikes;
    const blackHeart = document.createElement('i');
    blackHeart.setAttribute('class', 'fa-solid fa-hear');

    const $price = document.createElement('p');
    $price.innerText = `${price} € / jour`;

    const $likeBox = document.querySelector('.likeBox');

    $likeBox.appendChild($totalLikes);
    $likeBox.appendChild(blackHeart);
    $likeBox.appendChild($price);
  }
}
