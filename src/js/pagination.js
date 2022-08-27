import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

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
pageMenu(1000)