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
  console.log(options.itemsPerPage);
  console.log(options.totalItems);
  console.log(options.page);
  const pagination = new Pagination(container, options);

  return pagination;
};
