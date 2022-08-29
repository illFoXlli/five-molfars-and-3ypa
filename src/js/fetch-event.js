import axios from 'axios';
import { pageMenu } from '../js/pagination';
import renderCard from '../templates/card-tpl.hbs';

const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events';
const API_KEY = 'unEzXyPGRdZtlW4MZOT74rfieLb91xjQ';
const form = document.querySelector('#form');

let keyword = 'vs';
let countryCode = 'US';
let numberCardByPage = 16;
let totalPages = 100;
let startPage = 1;

const eventsList = document.querySelector('.events');

form.addEventListener('submit', onSubmit);

export let key = {
  page: startPage,
  keyword,
  countryCode,
  numberCardByPage,
};

function onSubmit(event) {
  event.preventDefault();
  key.keyword = form.elements.searchQuery.value;
  key.countryCode = form.elements.chooseQuery.value;
  key.page = 1;
  fetchServer(key);
}

const fetchServer = ({ page, keyword, countryCode, numberCardByPage }) => {
  const params = {
    apikey: API_KEY,
    countrysCode: countryCode,
    keyword: keyword,
    size: numberCardByPage,
    page,
  };

  if (getFromSS(key) === null) {
    console.log('=====IF=====');
    return axios.get(`${BASE_URL}`, { params }).then(res => {
      saveToSS(key, res);
      setTotalPage(res.data.page.totalElements);
      renderElems(res.data);
      setPaginationServer(totalPages, key);
      return res.data;
    });
  } else {
    console.log('=====ELSE=====');
    let res = getFromSS(key);
    setTotalPage(res.data.page.totalElements);
    renderElems(res.data);
    setPaginationLS(totalPages, key);
    return Promise.resolve(res.data);
  }
};

function saveToSS(key, res) {
  sessionStorage.setItem(JSON.stringify(key), JSON.stringify(res));
}

function setPaginationServer(totalPages, key) {
  pageMenu(totalPages).on('beforeMove', async function (eventData) {
    spinerOn();
    let pages = eventData.page;
    key.page = pages;
    try {
      const data = await fetchServer(key);
      renderElems(data);
      spinerOff();
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

function spinerOff() {
  return preloader.classList.add('visually-hidden');
}

function spinerOn() {
  return preloader.classList.remove('visually-hidden');
}

function setTotalPage(number) {
  if (number < 960) {
    totalPages = number;
  } else {
    totalPages = 960;
  }
}

export function getFromSS(key) {
  let data = sessionStorage.getItem(JSON.stringify(key));
  return JSON.parse(data);
}

fetchServer(key);
