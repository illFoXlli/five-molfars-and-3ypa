import { getFromSS } from './utils';
import { key } from './fetch-event';

let closeModalBtn = document.querySelector('[data-modal-close]');
const backdropModal = document.querySelector('[data-modal]');
// const cardOnClick = document.querySelector('.event');
const boxOnClick = document.querySelector('.events');
let findUl;
let getDataSS;
let getCards;

console.log(closeModalBtn);
closeModalBtn.addEventListener('click', toggleModal);
// cardOnClick.addEventListener('click', onCardClick);
// cardOnClick.addEventListener('click', onCardClick);
boxOnClick.addEventListener('click', onCardClick);

function toggleModal() {
  backdropModal.classList.toggle('is-hidden');
  // console.log('ykjmdtgy');
  document.body.classList.remove('no-scroll');
}

function onCardClick(event) {
  getDataSS = getFromSS(key);
  getCards = getDataSS.data._embedded.events;
  //  console.log(event.target);
  if (event.target.nodeName !== 'DIV') {
    findUl = event.target.closest('ul').id;
    // console.log(findUl);
    backdropModal.classList.toggle('is-hidden');
    document.body.classList.add('no-scroll');
    getCard(getCards, findUl);
  }
}

function getCard(getCards, findUl) {
  let filterCard = getCards.find(card => card.id === findUl);
  console.log(getCards);
  markupModal(filterCard);
}

function markupModal({ images, info }) {
  let img = document.querySelector('.modal img.modal__img');
  img.src = images[0].url;
  let infoText = document.querySelector('.modal p.modal__list-text');
  let infoPrice = document.querySelector('.modal p.modal__list-text');

  // console.log(info.length);
  try {
    if (info === undefined) {
      infoText.textContent = accessibility.info;
    }
    infoText.textContent = info;
  } catch {
    infoText.textContent = 'No text 🍲';
  }

  /* dispatchEvent.textContet;
  backdropModal.innerHTML = `
          <div class="modal">
    <button class="modal__menu-btn-close" type="button" data-modal-close>
      <svg class="modal__svg" width="17" height="17" id="close" viewBox="0 0 32 32">
              <path d="M1.646 32a1.646 1.646 0 0 1-1.163-2.811L29.19.482a1.646 1.646 0 1 1 2.328 2.329L2.811 31.517A1.65 1.65 0 0 1 1.646 32z"/>
      <path d="M30.355 32c-.421 0-.843-.16-1.163-.483L.483 2.811A1.647 1.647 0 0 1 2.812.482l28.707 28.707A1.646 1.646 0 0 1 30.356 32z"/>
         </svg>
    </button>
    <div class="modal__wrapper">
      <img class="modal__img" src="${images[0].url}" alt="" />
      <ul class="modal__list">
        <li>
          <h2 class="modal__list-title">INFO</h2>
          <p class="modal__list-text">
            Atlas Weekend is the largest music festival in Ukraine. More than
            200 artists will create a proper music festival atmosphere on 10
            stages
          </p>
        </li>
        <li class="modal__list-item">
          <h2 class="modal__list-title">WHEN</h2>
          <p class="modal__list-text">2021-06-09</p>
          <p class="modal__list-text secondP">20:00 (Kyiv/Ukraine)</p>
        </li>
        <li class="modal__list-item">
          <h2 class="modal__list-title">WHERE</h2>
          <p class="modal__list-text">Kyiv, Ukraine</p>
          <p class="modal__list-text secondP">VDNH</p>
        </li>
        <li class="modal__list-item">
          <h2 class="modal__list-title">WHO</h2>
          <p class="modal__list-text">The Black Eyed Peas</p>
        </li>
        <li class="modal__list-item">
          <h2 class="modal__list-title">PRICES</h2>
          <p class="modal__list-text dash">
            <svg class="modal__svg" width="24" height="16">
              <use class="burger-menu__close" href="./images/svg/symbol-defs.svg#ticket">
              </use>
            </svg>
            <span class="modal__standart">Standart 300-500 UAH</span>
          </p>

          <div class="btn-wrapper">
            <button class="modal__list-btn">BUY TICKETS</button>
          </div>
          <p class="modal__list-text dash">
            <svg class="modal__svg" width="24" height="16">
              <use class="burger-menu__close" href="./images/svg/symbol-defs.svg#ticket"></use>
            </svg><span class="modal__vip">VIP 1000-1500 UAH</span>
          </p>
          <div class="btn-wrapper">
            <button class="modal__list-btn">BUY TICKETS</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="btn-wrapper-more">
      <button class="modal__list-btn-more">MORE FROM THIS AUTHOR</button>
    </div>
  </div>`; */
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
