import { getFromSS } from './utils';
import { key } from './fetch-event';

const closeModalBtn = document.querySelector('[data-modal-close]');
const backdropModal = document.querySelector('[data-modal]');
// const cardOnClick = document.querySelector('.event');
const boxOnClick = document.querySelector('.events');
let findUl;

closeModalBtn.addEventListener('click', toggleModal);
// cardOnClick.addEventListener('click', onCardClick);
// cardOnClick.addEventListener('click', onCardClick);
boxOnClick.addEventListener('click', onCardClick);

function toggleModal() {
  backdropModal.classList.toggle('is-hidden');
  document.body.classList.remove('no-scroll');
}

function onCardClick(event) {
  //  console.log(event.target);
  if (event.target.nodeName !== 'DIV') {
    findUl = event.target.closest('ul').id;
    // console.log(findUl);
    backdropModal.classList.toggle('is-hidden');
    document.body.classList.add('no-scroll');
    getCard(getCards, findUl);
  }
}

const getDataSS = getFromSS(key);
const getCards = getDataSS.data._embedded.events;
function getCard(getCards, findUl) {
  let filterCard = getCards.find(card => card.id === findUl);
  console.log(filterCard);
  return markupModal(filterCard);
}

function markupModal(filterCard) {
  console.log(filterCard.name);
}

// let cardInfo = getCard(getCards, findUl);
// console.log(cardInfo);

// console.log(getCard);

// export function getFromSS(key) {
//   let data = sessionStorage.getItem(JSON.stringify(key));
//   return JSON.parse(data);
// }
// const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events';
// const API_KEY = 'unEzXyPGRdZtlW4MZOT74rfieLb91xjQ';

// export const fetchServer = (page, keyword, countryCode) => {
//   const params = {
//     apikey: API_KEY,
//     countryCode: countryCode,
//     keyword: keyword,
//     size: 16,
//     page: page,
//   };
//   //   if (countryCode.length) {
//   //     params.countryCode = countryCode;
//   //   }
//   return axios
//     .get(`${BASE_URL}`, { params })
//     .then(rec => rec.data._embedded.events);
// };
// import renderCard from '../templates/card-tpl.hbs';

// const eventsList = document.querySelector('.events');

// fetchServer(6, '', 'US').then(rec => {
//   console.log(rec);
//   //   eventsList.innerHTML += renderCard(rec);
// });
