import Pagination from 'tui-pagination';
import { key } from '../js/fetch-event';

export const pageMenu = function (total) {

  const container = document.getElementById('pagination');
  const options = {
    totalItems: total,
    itemsPerPage: key.numberCardByPage,
    visiblePages: 5,
    page: key.page,
    centerAlign: true,
  };
  const pagination = new Pagination(container, options);

  return pagination;
};

pageMenu(100)

// const pagination = pageMenu(data.page.totalElements / 16);
// pagination.on('beforeMove', async function (eventData) {
//   const page = eventData.page;
//   try {
//     const { data } = await fetchCardsByName(query, locale, page);
//     const result = data._embedded;
//     conteinerEl.innerHTML = cardsRender(result.events);
//   } catch (err) {
//     console.log(err);
//   }
// });

