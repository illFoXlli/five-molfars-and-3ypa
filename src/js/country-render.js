import countryList from '../json/country-list.json';
import customSelect from 'custom-select';
import renderCountry from '../templates/country-list.hbs';

const form = document.querySelector('.header__form');

form.lastElementChild.insertAdjacentHTML(
  'beforeend',
  renderCountry(countryList)
);

const mySelects = customSelect('select');

const customSelectContainer = document.querySelector(
  '.custom-select-container'
);

customSelectContainer.addEventListener('mouseenter', () => {
  customSelectContainer.classList.add('is-open');
  document.body.classList.add('no-scroll');
});
customSelectContainer.addEventListener('mouseleave', () => {
  if (document.body.classList.contains('no-scroll')) {
    customSelectContainer.classList.remove('is-open');
    //customContainer.ariaExpanded = 'false';
  }
  document.body.classList.remove('no-scroll');
});
