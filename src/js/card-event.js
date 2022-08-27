import { fetchServer } from './fetch-event';
import renderCard from '../templates/card-tpl.hbs';

const eventsList = document.querySelector('.events');

fetchServer(6, 'cat', 'US').then(rec => {
  //console.log(rec[0].images[0].url);
  eventsList.innerHTML += renderCard(rec);
});

// eventsList.innerHTML += renderCountry;
