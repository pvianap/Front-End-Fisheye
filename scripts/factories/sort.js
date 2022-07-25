function sortFactory() {
  function mediaSorted(data, sortBy) {
    if (sortBy == 'likes') {
      data.sort((a, b) => b.likes - a.likes);
    }
    if (sortBy == 'date') {
      data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    }
    if (sortBy == 'title') {
      data.sort((a, b) => (a.title > b.title ? 1 : -1));
    }
    return data;
  }

  function getSortDOM() {
    // const sortBy = document.createElement('div');
    // sortBy.setAttribute('class', 'sortBar');
    // const sortByLabel = document.createElement('p');
    // sortByLabel.innerText = 'Trier par';
    // const sortByContent = document.createElement('ul');
    // sortByContent.setAttribute('class', 'sortByContent');
    const sortByPop = document.querySelector('.sortByPop');
    sortByPop.setAttribute(
      'onClick',
      `sortFactory().mediaSorted(mediaData, 'likes');mediaDisplay()`
    );
    // sortByPop.innerText = 'Popularité';
    const sortByDate = document.querySelector('.sortByDate');
    // sortByDate.innerText = 'Date';
    // sortByDate.setAttribute('class', 'sortByDate');
    sortByDate.setAttribute(
      'onClick',
      `sortFactory().mediaSorted(mediaData, 'date');mediaDisplay()`
    );
    const sortByTitre = document.querySelector('.sortByTitre');
    // sortByTitre.innerText = 'Titre';
    // sortByTitre.setAttribute('class', 'sortByTitre');
    sortByTitre.setAttribute(
      'onClick',
      `sortFactory().mediaSorted(mediaData, 'title');mediaDisplay()`
    );
    // sortBy.appendChild(sortByLabel);
    // sortBy.appendChild(sortByContent);
    // sortByContent.appendChild(sortByPop);
    // sortByContent.appendChild(sortByDate);
    // sortByContent.appendChild(sortByTitre);
    // return sortBy;
  }
  return { getSortDOM, mediaSorted };
}
