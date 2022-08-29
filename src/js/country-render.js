import countryList from '../json/country-list.json';
import renderCountry from '../templates/country-list.hbs';
import customSelect from 'custom-select';

const form = document.querySelector('.header__form');

form.lastElementChild.insertAdjacentHTML(
  'beforeend',
  renderCountry(countryList)
);
const mySelects = customSelect('select');
