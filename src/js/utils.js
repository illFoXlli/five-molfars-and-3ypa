import renderCard from '../templates/card-tpl.hbs';

export function spinerOff() {
  return preloader.classList.add('visually-hidden');
}

export function spinerOn() {
  return preloader.classList.remove('visually-hidden');
}

export function getFromSS(key) {
  let data = sessionStorage.getItem(JSON.stringify(key));
  return JSON.parse(data);
}

export function renderElems(data) {
  let LSElements = data._embedded.events;
  eventsList.innerHTML = renderCard(LSElements);
}

export function saveToSS(key, res) {
  sessionStorage.setItem(JSON.stringify(key), JSON.stringify(res));
}
