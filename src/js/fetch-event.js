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
}

export const fetchServer = ({ page, keyword, countryCode }) => {
  const params = {
    apikey: API_KEY,
    countrysCode: countryCode,
    keyword: keyword,
    size: 16,
    page: page,
  };
  if (getFromLS(key) === null) {
    console.log('=====IF=====');
    return axios.get(`${BASE_URL}`, { params }).then(rec => {
      saveToLS(key, rec);
      totalPages = rec.data.page.totalElements;
      setPaginationServer(totalPages, key);
      //renderElems(rec);
      return rec.data;
    });
  } else {
    console.log('=====ELSE=====');
    let rec = getFromLS(key);
    setPaginationLS(totalPages, key);
    //renderElems(rec);
    return Promise.resolve(rec.data);
  }
};

function saveToLS(key, data) {
  localStorage.setItem(JSON.stringify(key), JSON.stringify(data));
}

function setPaginationServer(totalPages, key) {
  pageMenu(totalPages).on('beforeMove', async function (eventData) {
    let pages = eventData.page;
    key.page = pages;
    try {
      const data = await fetchServer(key);
      console.log(data);
      renderElems(data);
    } catch (err) {
      console.log(err);
    }
  });
}
function setPaginationLS(totalPages, key) {
  pageMenu(totalPages).on('beforeMove', async function (eventData) {
    let pages = eventData.page;
    key.page = pages;
    try {
      const data = await fetchServer(key);
      renderElems(data);
    } catch (err) {
      console.log(err);
    }
  });
}

function renderElems(data) {
  let LSElements = data._embedded.events;
  eventsList.innerHTML = renderCard(LSElements);
}

function getFromLS(key) {
  let data = localStorage.getItem(JSON.stringify(key));
  return JSON.parse(data);
}

function getToLSTotalPages(key) {
  let data = localStorage.getItem(JSON.stringify(key));
  totalPages = JSON.parse(data).data.page.totalElements;
  return totalPages;
}

fetchServer(key);
