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

const eventsList = document.querySelector('.events');

const key = {
  page: 1,
  keyword,
  countryCode,
};

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  fetchServer(key);
  key.keyword = form.elements.searchQuery.value;
  key.countryCode = form.elements.chooseQuery.value;
}

export const fetchServer = ({ page, keyword, countryCode }) => {
  const params = {
    apikey: API_KEY,
    countryCode: countryCode,
    keyword: keyword,
    size: 16,
    page: page,
  };
  if (localStorage.getItem(JSON.stringify(key)) === null) {
    return axios.get(`${BASE_URL}`, { params }).then(rec => {
      totalPages = rec.data.page.totalElements / 16;

      pageMenu(totalPages).on('beforeMove', async function (eventData) {
        let pages = eventData.page;

        key.page = pages;

        try {
          const { data } = await fetchServer(key);

          let LSElements = data._embedded.events;
          eventsList.innerHTML = renderCard(LSElements);
          // const result = data._embedded;
        } catch (err) {
          console.log(err);
        }
        localStorage.setItem(JSON.stringify(key), JSON.stringify(rec));
      });

      // let LS = JSON.parse(localStorage.getItem(JSON.stringify(key)));
      let LSElements = rec.data._embedded.events;
      eventsList.innerHTML = renderCard(LSElements);
    });
  } else {
    let data = localStorage.getItem(JSON.stringify(key));

    // totalPages = JSON.parse(data).page.totalElements;

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
    // return data;
  }
};
fetchServer(key);

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
