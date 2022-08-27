import countryList from '../json/country-list.json';
import customSelect from 'custom-select';
import renderCountry from '../templates/country-list.hbs';

const form = document.querySelector('.header__form');

form.lastElementChild.insertAdjacentHTML(
  'beforeend',
  renderCountry(countryList)
);
const mySelects = customSelect('select');
