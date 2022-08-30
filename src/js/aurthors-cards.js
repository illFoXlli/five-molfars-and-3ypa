import { fetchServer } from './fetch-event';
import { toggleModal, getCard, markupModal } from './modal';
import { saveToSS, getFromSS } from './utils';
import { key } from './fetch-event';
import { authorName } from './modal';

const aboutAuthorBtn = document.querySelector('.modal__list-btn-more');

aboutAuthorBtn.addEventListener('click', onAboutAuthorBtnClick);

function onAboutAuthorBtnClick() {
  toggleModal();
}
console.log(authorName);
// let result = getCard();
// console.log(result._embedded.venues.name);

// let result1 = getFromSS(key);
// console.log(result1._embedded.venues.name);
// console.log(result1);

//let author = rec.data._embedded.venues.name;
