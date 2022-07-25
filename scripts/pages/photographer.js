//Récupère l'id dans URL
function getId() {
  let params = new URL(document.location).searchParams;
  let pageId = params.get('id');
  return pageId;
}

//Récupère les données des photgraphes
async function getPhotographers() {
  //     // Penser à remplacer par les données récupérées dans le json
  let photographers = await new Api(url).getPhotographersData();
  return photographers;
}

//Récupère les données du photographe de la page
var photographer;
async function photographerData() {
  photographersData = await getPhotographers();
  let pageId = getId();
  let data = [];
  data = Object.values(photographersData).find((i) => i.id == `${pageId}`);
  return data;
}

//Récupère les données des medias du photographe
var mediaData;
async function mediasData() {
  const allMedias = await new Api(url).getMediaData();
  let pageId = getId();

  mediaData = Object.values(allMedias).filter(
    (i) => i.photographerId == `${pageId}`
  );
  mediaData.forEach((media) => (media.isLiked = false));
}
mediasData();

//Display in DOM all elements
var lightboxModel;

////Display header
async function displayPhotographerPage(photographer) {
  const photographerHeader = document.querySelector('.photograph-header');
  const button = document.querySelector('button');
  const photographerModel = profileFactory(photographer);

  const profileDOM = photographerModel.getProfileDOM();
  const profilePhoto = photographerModel.getProfilePhoto();

  photographerHeader.insertBefore(profileDOM, button);
  photographerHeader.appendChild(profilePhoto);

  /////Display sortbar
  const sortDOM = sortFactory().getSortDOM();
  const mediaContainer = document.createElement('section');
  mediaContainer.setAttribute('class', 'mediaContainer');
  photographerHeader.parentNode.appendChild(mediaContainer);

  mediaDisplay();
}

// MEDIA DISPLAY
function mediaDisplay() {
  document.querySelector('.mediaContainer').innerHTML = '';
  mediaData.forEach((media) => {
    const mediaModel = new mediaFactory(media, photographer);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    document.querySelector('.mediaContainer').appendChild(mediaCardDOM);
  });

  // DISPLAY LIGHTBOX
  function setLightbox() {
    lightboxModel = new LightboxModel(mediaData, photographer);
    var images = document.querySelectorAll('.mediaCard img, .mediaCard video');
    images.forEach((image, index) => {
      image.addEventListener('click', function () {
        lightboxModel.displayLightbox(index);
      });
    });
  }

  setLightbox();

  // LIKES
  var hearts = document.querySelectorAll('.mediaCard i');
  var likes = new Likes(mediaData.isLiked);
  hearts.forEach((heart, index) => {
    heart.addEventListener(
      'click',
      function () {
        likes.like(index);
        mediaDisplay();
      },
      { once: true }
    );
  });
}

async function initPhotographerPage() {
  photographer = await photographerData();
  await displayPhotographerPage(photographer);
}

initPhotographerPage();
