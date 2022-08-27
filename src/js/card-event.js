import { fetchServer } from './fetch-event';
import renderCard from '../templates/card-tpl.hbs';

const eventsList = document.querySelector('.events');

fetchServer(6, 'cat', 'US').then(rec => {
  eventsList.innerHTML += renderCard(rec.data._embedded.events);
});

// eventsList.innerHTML += renderCountry;
