//Récupère l'id dans URL
function getId() {
  let params = new URL(document.location).searchParams;
  let pageId = params.get('id');
  return pageId;
}

//Récupère les données des photgraphes
async function getPhotographers() {
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

async function displayPhotographerPage(photographer) {
  //Display header
  await new PhotographerHeader(photographer);

  //Display sortbar
  const sortDOM = sortFactory().getSortDOM();
  const mediaContainer = document.createElement('section');
  mediaContainer.setAttribute('class', 'mediaContainer');
  document.querySelector('main').appendChild(mediaContainer);
  mediaDisplay();
}

// MEDIA DISPLAY
function mediaDisplay() {
  document.querySelector('.mediaContainer').innerHTML = '';
  mediaData.forEach((media, index) => {
    const mediaModel = new mediaFactory(media, photographer);
    const mediaCardDOM = mediaModel.getMediaCardDOM(index);
    document.querySelector('.mediaContainer').appendChild(mediaCardDOM);
  });

  // DISPLAY LIGHTBOX TARGET
  function setLightbox() {
    lightboxModel = new LightboxModel(mediaData, photographer);
  }

  setLightbox();

  // LIKES
  refreshLikes();
  new LikeBox(photographer, mediaData);
}

async function initPhotographerPage() {
  photographer = await photographerData();
  await displayPhotographerPage(photographer);
}

initPhotographerPage();
