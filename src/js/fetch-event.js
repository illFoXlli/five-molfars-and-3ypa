import axios from 'axios';
import { pageMenu } from '../js/pagination';
import renderCard from '../templates/card-tpl.hbs';

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events';
const API_KEY = 'unEzXyPGRdZtlW4MZOT74rfieLb91xjQ';
const form = document.querySelector('#form');

let keyword = 'concert';
let countryCode = '';
let numberCardByPage = 16;
let totalPages = 100;
let startPage = 1;

const eventsList = document.querySelector('.events');

export let key = {
  page: startPage,
  keyword,
  countryCode,
};
// let key1 = {
//   page: 1,
//   keyword,
//   countryCode,
// };

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  fetchServer(key);
  key.keyword = form.elements.searchQuery.value;
  key.countryCode = form.elements.chooseQuery.value;
  // key1.keyword = form.elements.searchQuery.value;
  // key1.countryCode = form.elements.chooseQuery.value;
}

export const fetchServer = ({ page, keyword, countryCode }) => {
  const params = {
    countrysCode: countryCode,
    keyword: keyword,
    size: 8,
    page: page,
    apikey: API_KEY,
  };

  if (sessionStorage.getItem(JSON.stringify(key)) === null) {
    return axios.get(`${BASE_URL}`, { params }).then(rec => {
      // sessionStorage.setItem(JSON.stringify(key1), JSON.stringify(rec));
      sessionStorage.setItem(JSON.stringify(key), JSON.stringify(rec));
      totalPages = rec.data.page.totalElements;

      console.log(totalPages);

      pageMenu(totalPages).on('beforeMove', async function (eventData) {
        let pages = eventData.page;

        key.page = pages;
        console.log('fffff111111111111111111111111111111111111111111111111');
        console.log(key);
        try {
          const { data } = await fetchServer(key);

          console.log(data);

          let LSElements = data._embedded.events;
          eventsList.innerHTML = renderCard(LSElements);
          // const result = data._embedded;
        } catch (err) {
          console.log(err);
        }
      });

      // let LS = JSON.parse(localStorage.getItem(JSON.stringify(key)));
      let LSElements = rec.data._embedded.events;
      eventsList.innerHTML = renderCard(LSElements);
    });
  } else {
    let data = sessionStorage.getItem(JSON.stringify(key));
    totalPages = JSON.parse(data).data.page.totalElements;

    pageMenu(totalPages).on('beforeMove', async function (eventData) {
      let pages = eventData.page;
      key.page = pages;

      let LS = JSON.parse(sessionStorage.getItem(JSON.stringify(key)));
      console.log('222222222222222222222222222222222');
      console.log(key);
      try {
        console.log(LS);
        let LSElements = LS.data._embedded.events;
        eventsList.innerHTML = renderCard(LSElements);
      } catch (err) {
        console.log(err);
      }
    });

    return data;
  }
};

fetchServer(key);
console.log(key);
// totalPages = fetchServer(key);
// console.log(totalPages);
// pageMenu(totalPages).on('beforeMove', async function (eventData) {
//   const page = eventData.page;
//   key.page = page;
//   try {
//     const { data } = await fetchServer(key);
//     const result = data._embedded;
//   } catch (err) {
//     console.log(err);
//   }
// });
