class Api {
  constructor(url) {
    this._url = url;
  }

  async get() {
    return fetch(this._url)
      .then((res) => res.json())
      .catch((err) => console.log('an error occurs', err));
  }
  async getPhotographersData() {
    return fetch(this._url)
      .then((res) => res.json())
      .then((res) => res.photographers)
      .catch((err) => console.log('an error occurs', err));
  }
  async getMediaData() {
    return fetch(this._url)
      .then((res) => res.json())
      .then((res) => res.media)
      .catch((err) => console.log('an error occurs', err));
  }
}

const url = '../../data/photographers.json';
