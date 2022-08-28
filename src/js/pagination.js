import Pagination from 'tui-pagination';

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