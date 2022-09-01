import { getFromSS, saveToSS } from './utils';
import { key } from './fetch-event';
import btnModal from '../templates/btn-modal.hbs';

let closeModalClickBtn = document.querySelector('[data-modal-close]');
const backdropModal = document.querySelector('[data-modal]');
const onBoxClick = document.querySelector('.events');
const btnBuy = document.querySelector('.btnBuy');
let findUl;
let getDataSS;
let getCards;
let idCard;
export let authorName;
const modalLiBtn = document.querySelector('.modal--prise');
const modalLih2 = document.querySelector('.modal__list-title--modal');

closeModalClickBtn.addEventListener('click', onToggleModalClick);
backdropModal.addEventListener('click', onCloseModalClick);
onBoxClick.addEventListener('click', onCardClick);
document.addEventListener('keydown', onCloseByKeyKeydown);

function getCard(getCards, findUl) {
  let filterCard = getCards.find(card => card.id === findUl);
  filterCard.images = filterCard.images.sort((a, b) => b.width - a.width);
  markupModal(filterCard);
  authorName = filterCard._embedded.venues[0].name;
  saveToSS(findUl, filterCard);
}

export function onToggleModalClick(e) {
  backdropModal.classList.toggle('is-hidden');
  document.body.classList.remove('no-scroll');
}

function onCloseModalClick(e) {
  if (e.target === e.currentTarget) {
    backdropModal.classList.toggle('is-hidden');
    document.body.classList.remove('no-scroll');
  }
}

function onCloseByKeyKeydown(e) {
  if (e.code !== 'Escape') {
    return;
  } else {
    backdropModal.classList.toggle('is-hidden');
    document.body.classList.remove('no-scroll');
    document.removeEventListener('keydown', onCloseByKeyKeydown);
  }
}

function onCardClick(event) {
  document.addEventListener('keydown', onCloseByKeyKeydown);

  getDataSS = getFromSS(key);
  getCards = getDataSS.data._embedded.events;
  if (event.target.nodeName !== 'DIV') {
    findUl = event.target.closest('ul').id;
    idCard = findUl;
    backdropModal.classList.toggle('is-hidden');
    document.body.classList.add('no-scroll');
    getCard(getCards, findUl);
  }

  let cardModal = getFromSS(findUl);
  cardModal.priceRanges.map(item => (item.url = cardModal.url));
  modalLih2.innerHTML = btnModal(cardModal);
}

function markupModal({ images, info, priceRanges, dates, _embedded }) {
  let img = document.querySelector('.modal__img');
  img.src = images[0].url;
  let infoWhen = document.querySelector('.whenDate');
  infoWhen.textContent = `${dates.start.localDate}`;
  let infoWhenTime = document.querySelector('.secondP');
  infoWhenTime.textContent = `${dates.start.localTime} (${dates.timezone})`;
  let infoWhereStreet = document.querySelector('.whereInfo');
  let street = _embedded.venues[0].address.line1;
  infoWhereStreet.textContent = `${street}`;
  let infoWhereCityCountry = document.querySelector('.whereCityCountry');
  let city = _embedded.venues[0].city.name;
  let country = _embedded.venues[0].country.name;
  infoWhereCityCountry.textContent = `${city}, ${country}`;
  let whoInfo = document.querySelector('.whoInfo');

  try {
    let whoFirst = _embedded.attractions[0].name;
    let whoSecond = _embedded.attractions[1].name;
    whoInfo.textContent = `${whoFirst}/${whoSecond}`;
  } catch {
    let whoFirst = _embedded.attractions[0].name;
    whoInfo.textContent = `${whoFirst}`;
  }

  let infoText = document.querySelector('.modal p.modal__list-text');

  try {
    if (info === undefined) {
      infoText.textContent = accessibility.info;
    }
    infoText.textContent = info;
  } catch {
    infoText.textContent = 'No text 🍲';
  }

  try {
    let infoPrice = document.querySelector('.modal span.modal__standart');
    infoPrice.textContent = `${priceRanges[0].type.toUpperCase()} ${
      priceRanges[0].min
    }-${priceRanges[0].max} ${priceRanges[0].currency}`;
  } catch {
    console.log('Price is not defined');
  }
}
