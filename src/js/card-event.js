import { fetchServer } from './fetch-event';
import renderCard from '../templates/card-tpl.hbs';

const eventsList = document.querySelector('.events');

fetchServer(6, '', 'US').then(rec => {
  console.log(rec);
  eventsList.innerHTML += renderCard(rec);
});

// eventsList.innerHTML += renderCountry;
