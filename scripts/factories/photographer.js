function photographerFactory(data) {
  const { name, portrait, city, tagline, country, price, id } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement('article');
    article.setAttribute('id', id);
    article.setAttribute(
      'onClick',
      `location.href='/photographer.html?id=${id}'`
    );
    article.setAttribute('tabindex', '0');
    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.setAttribute('alt', name);
    const h2 = document.createElement('h2');
    h2.textContent = name;
    const h3 = document.createElement('h3');
    h3.textContent = `${city},${country}`;
    const h4 = document.createElement('h4');
    h4.textContent = tagline;

    const h5 = document.createElement('h5');
    h5.textContent = `${price}€/jour`;

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(h5);
    return article;
  }
  return { name, picture, getUserCardDOM };
}
