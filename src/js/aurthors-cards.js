import { fetchServer } from './fetch-event';
import { toggleModal } from './modal';
import { saveToSS } from './utils';

const aboutAuthorBtn = document.querySelector('.modal__list-btn-more');

aboutAuthorBtn.addEventListener('click', onAboutAuthorBtnClick);

function onAboutAuthorBtnClick() {
  toggleModal();
}
let author = rec.data._embeded.venue;
