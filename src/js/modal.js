import { fetchServer } from './fetch-event';

const closeModalBtn = document.querySelector('[data-modal-close]');
const backdropModal = document.querySelector('[data-modal]');
closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  backdropModal.classList.toggle('is-hidden');
}

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
