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
    const sortBy = document.createElement('div');
    sortBy.setAttribute('class', 'sortBar');
    const sortByLabel = document.createElement('p');
    sortByLabel.innerText = 'Trier par';
    const sortByContent = document.createElement('ul');
    sortByContent.setAttribute('class', 'sortByContent');
    const sortByPop = document.createElement('li');
    sortByPop.setAttribute('class', 'sortByPop');
    sortByPop.innerText = 'Popularité';
    const sortByDate = document.createElement('li');
    sortByDate.innerText = 'Date';
    sortByDate.setAttribute('class', 'sortByDate');
    const sortByTitre = document.createElement('li');
    sortByTitre.innerText = 'Titre';
    sortByTitre.setAttribute('class', 'sortByTitre');
    sortBy.appendChild(sortByLabel);
    sortBy.appendChild(sortByContent);
    sortByContent.appendChild(sortByPop);
    sortByContent.appendChild(sortByDate);
    sortByContent.appendChild(sortByTitre);
    return sortBy;
  }
  return { getSortDOM, mediaSorted };
}
