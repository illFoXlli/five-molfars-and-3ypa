import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { key } from '../js/fetch-event';

export const pageMenu = function (total) {
  const container = document.getElementById('pagination');
  const options = {
    totalItems: total,
    itemsPerPage: 16,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
  };
  const pagination = new Pagination(container, options);

  // pagination.on('beforeMove', async function (eventData) {
  //   const page = eventData.page;
  //   console.log(eventData);
  //   // try {
  //   //   const { data } = await fetchCardsByName(query, locale, page);
  //   //   const result = data._embedded;
  //   //   conteinerEl.innerHTML = cardsRender(result.events);
  //   // } catch (err) {
  //   //   console.log(err);
  //   // }
  // });
  console.log(options);

  return pagination;
};
