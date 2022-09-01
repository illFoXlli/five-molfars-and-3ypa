import { fetchServer, renderElems } from './fetch-event';
import { toggleModal, getCard, markupModal } from './modal';
import { saveToSS, getFromSS } from './utils';
import { key } from './fetch-event';
import { authorName } from './modal';

const aboutAuthorBtn = document.querySelector('.modal__list-btn-more');

aboutAuthorBtn.addEventListener('click', onAboutAuthorBtnClick);

function onAboutAuthorBtnClick() {
  key.keyword = authorName;
  key.page = 1;
  console.log(key.page);
  fetchServer(key);
  // renderElems();
  toggleModal();

  //console.log(authorName);
  //console.log(key.keyword);
}
