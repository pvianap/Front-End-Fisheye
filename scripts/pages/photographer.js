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
async function photographerData() {
  photographersData = await getPhotographers();
  let pageId = getId();
  let data = [];
  data = Object.values(photographersData).find((i) => i.id == `${pageId}`);
  return data;
}

//Récupère les données des medias du photographe
async function mediasData() {
  const allMedias = await new Api(url).getMediaData();
  let pageId = getId();
  mediaData = Object.values(allMedias).filter(
    (i) => i.photographerId == `${pageId}`
  );
  return mediaData;
}

//Display in DOM all elements
async function displayPhotographerPage(photographer) {
  const photographerHeader = document.querySelector('.photograph-header');
  const button = document.querySelector('button');
  const photographerModel = profileFactory(photographer);

  const profileDOM = photographerModel.getProfileDOM();
  const profilePhoto = photographerModel.getProfilePhoto();

  photographerHeader.insertBefore(profileDOM, button);
  photographerHeader.appendChild(profilePhoto);

  const sortDOM = sortFactory().getSortDOM();
  photographerHeader.parentNode.appendChild(sortDOM);

  const mediaContainer = document.createElement('section');
  mediaContainer.setAttribute('class', 'mediaContainer');
  photographerHeader.parentNode.appendChild(mediaContainer);
  const mediaData = await mediasData();
  mediaData.forEach((media) => {
    const mediaModel = mediaFactory(media, photographer);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    mediaContainer.appendChild(mediaCardDOM);
  });
}

async function initPhotographerPage() {
  const photographer = await photographerData();
  await displayPhotographerPage(photographer);
}

initPhotographerPage();
