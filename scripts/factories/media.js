class mediaFactory {
  constructor(mediaData, photographerData) {
    if (mediaData.image) {
      return new PhotoModel(mediaData, photographerData);
    } else if (mediaData.video) {
      return new VideoModel(mediaData, photographerData);
    } else {
      throw 'Unknown media type';
    }
  }
}
